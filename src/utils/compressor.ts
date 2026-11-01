/**
 * Core In-Browser Image Compression Engine for OptiPress.
 * 100% Client-Side. No images are ever sent to an external server.
 */

import {
  SavingsResult,
  calculateSavings,
  calculateTargetDimensions,
  generateCompressedFilename,
  detectMimeType,
} from './formatters';

export type OutputFormatOption = 'auto' | 'image/jpeg' | 'image/webp' | 'image/png';

export interface ImageProcessingOptions {
  quality: number; // 0.05 to 1.0 (e.g. 0.3 for 30%)
  outputFormat: OutputFormatOption; // 'auto' retains input or chooses best
  maintainAspectRatio: boolean;
  scalePercent?: number; // e.g., 50 for 50%
  customWidth?: number;
  customHeight?: number;
}

export interface CompressedItem {
  id: string;
  originalFile: File;
  name: string;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
  originalUrl: string;
  originalMimeType: string;

  // Compression Output
  status: 'pending' | 'compressing' | 'success' | 'error';
  errorMessage?: string;
  compressedBlob: Blob | null;
  compressedUrl: string | null;
  compressedSize: number;
  compressedWidth: number;
  compressedHeight: number;
  outputMimeType: string;
  downloadFilename: string;

  // Accurate Savings
  savingsResult: SavingsResult;

  // Metadata flags
  isPngLosslessNotice: boolean; // Flag if PNG format was used and quality couldn't apply
  isWebpConversion: boolean;

  // Config applied
  options: ImageProcessingOptions;
}

/**
 * Load image file into an HTMLImageElement
 */
export function loadImageFromFile(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to decode image. The file may be corrupt or an unsupported format.'));
    };

    img.src = url;
  });
}

/**
 * Determine effective output MIME type based on user preference and original MIME.
 */
export function determineOutputMimeType(originalMime: string, requestedFormat: OutputFormatOption): string {
  if (requestedFormat && requestedFormat !== 'auto') {
    return requestedFormat;
  }
  // Auto mode: preserve original MIME type
  if (originalMime === 'image/jpeg' || originalMime === 'image/jpg') {
    return 'image/jpeg';
  }
  if (originalMime === 'image/webp') {
    return 'image/webp';
  }
  if (originalMime === 'image/png') {
    return 'image/png';
  }
  return originalMime || 'image/jpeg';
}

/**
 * Compress and optionally resize an image directly in the browser via Canvas API.
 */
export async function compressImage(
  imageItem: {
    file: File;
    name: string;
    originalWidth?: number;
    originalHeight?: number;
  },
  options: ImageProcessingOptions
): Promise<{
  blob: Blob;
  width: number;
  height: number;
  outputMime: string;
  downloadFilename: string;
  originalWidth: number;
  originalHeight: number;
  isPngLosslessNotice: boolean;
  isWebpConversion: boolean;
}> {
  const img = await loadImageFromFile(imageItem.file);
  const origW = img.naturalWidth || img.width;
  const origH = img.naturalHeight || img.height;

  // Calculate target dimensions
  const { width: targetW, height: targetH } = calculateTargetDimensions({
    originalWidth: origW,
    originalHeight: origH,
    targetWidth: options.customWidth,
    targetHeight: options.customHeight,
    maintainAspectRatio: options.maintainAspectRatio,
    scalePercent: options.scalePercent,
  });

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) {
    throw new Error('Canvas 2D context could not be created in your browser.');
  }

  // High quality interpolation
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  const origMime = detectMimeType(imageItem.file);
  const outputMime = determineOutputMimeType(origMime, options.outputFormat);

  // If compressing to JPEG, fill background with clean white so transparent pixels don't turn black
  if (outputMime === 'image/jpeg') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, targetW, targetH);
  }

  // Draw scaled image onto canvas
  ctx.drawImage(img, 0, 0, targetW, targetH);

  // Strictly clamp quality between 0.01 and 1.0
  const numericQuality = Math.min(Math.max(Number(options.quality), 0.01), 1.0);

  // Perform compression via canvas.toBlob
  const compressedBlob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to encode image in browser Canvas.'));
        }
      },
      outputMime,
      numericQuality
    );
  });

  // Verify actual encoded MIME type returned by the browser
  const actualMime = compressedBlob.type || outputMime;
  const isWebpConversion = actualMime === 'image/webp' && origMime !== 'image/webp';
  const isPngLosslessNotice = actualMime === 'image/png';

  const downloadFilename = generateCompressedFilename(imageItem.name, actualMime);

  return {
    blob: compressedBlob,
    width: targetW,
    height: targetH,
    outputMime: actualMime,
    downloadFilename,
    originalWidth: origW,
    originalHeight: origH,
    isPngLosslessNotice,
    isWebpConversion,
  };
}

/**
 * Trigger download of a single blob in the browser.
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

/**
 * Generate a sample demo canvas image for instant testing without user files.
 */
export function createSampleDemoImage(): Promise<File> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d')!;

    // Rich gradient background
    const grad = ctx.createLinearGradient(0, 0, 1600, 1000);
    grad.addColorStop(0, '#1e3a8a');
    grad.addColorStop(0.5, '#3b82f6');
    grad.addColorStop(1, '#8b5cf6');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1600, 1000);

    // Decorative geometric shapes and text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.arc(300, 300, 220, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.beginPath();
    ctx.arc(1300, 700, 350, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 72px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('OptiPress Sample Image', 800, 480);

    ctx.font = 'normal 32px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillText('High-Resolution 1600 × 1000 Test Image', 800, 560);
    ctx.fillText('Compress with quality slider to see instant byte savings', 800, 620);

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'optipress-sample-1600x1000.jpg', { type: 'image/jpeg' });
        resolve(file);
      }
    }, 'image/jpeg', 0.98);
  });
}
