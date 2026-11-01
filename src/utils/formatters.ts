/**
 * Formatting and calculation utilities for OptiPress.
 */

export interface SavingsResult {
  originalBytes: number;
  compressedBytes: number;
  savedBytes: number; // Bytes saved (positive integer if reduced, 0 otherwise)
  increasedBytes: number; // Bytes increased (positive integer if larger, 0 otherwise)
  diffBytes: number; // originalBytes - compressedBytes (positive = reduction, negative = increase)
  percentage: number; // Percentage change (e.g. 75 for -75%, or 0.1 for +0.1% larger)
  status: 'reduced' | 'larger' | 'same';
  displayText: string; // User-facing description
  isReduced: boolean;
  isLarger: boolean;
}

/**
 * Format bytes into human-readable string (e.g. "1.45 MB", "855.5 KB", "409 B")
 */
export function formatBytes(bytes: number, decimals: number = 1): string {
  if (bytes === 0 || isNaN(bytes)) return '0 B';
  const absBytes = Math.abs(bytes);
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(absBytes) / Math.log(k));
  const index = Math.min(i, sizes.length - 1);
  const value = parseFloat((absBytes / Math.pow(k, index)).toFixed(dm));
  const prefix = bytes < 0 ? '-' : '';
  return `${prefix}${value} ${sizes[index]}`;
}

/**
 * Compare actual raw byte counts and calculate savings/increase accurately.
 * Does not round before comparing.
 */
export function calculateSavings(originalBytes: number, compressedBytes: number): SavingsResult {
  if (!originalBytes || originalBytes <= 0 || !compressedBytes || compressedBytes <= 0) {
    return {
      originalBytes: originalBytes || 0,
      compressedBytes: compressedBytes || 0,
      savedBytes: 0,
      increasedBytes: 0,
      diffBytes: 0,
      percentage: 0,
      status: 'same',
      displayText: '0 B (0%)',
      isReduced: false,
      isLarger: false,
    };
  }

  // Exact byte difference
  const diffBytes = originalBytes - compressedBytes;

  if (diffBytes > 0) {
    // Actually reduced
    const rawPct = (diffBytes / originalBytes) * 100;
    // Format to 1 decimal place or whole number
    const percentage = Math.round(rawPct * 10) / 10;
    const displayPct = percentage >= 1 ? Math.round(percentage) : percentage.toFixed(1);

    return {
      originalBytes,
      compressedBytes,
      savedBytes: diffBytes,
      increasedBytes: 0,
      diffBytes,
      percentage,
      status: 'reduced',
      displayText: `Saved ${displayPct}% (${formatBytes(diffBytes)})`,
      isReduced: true,
      isLarger: false,
    };
  } else if (diffBytes < 0) {
    // Output is larger
    const increasedBytes = Math.abs(diffBytes);
    const rawPct = (increasedBytes / originalBytes) * 100;
    const percentage = Math.round(rawPct * 10) / 10;
    const displayPct = percentage >= 1 ? Math.round(percentage) : percentage.toFixed(1);

    return {
      originalBytes,
      compressedBytes,
      savedBytes: 0,
      increasedBytes,
      diffBytes,
      percentage,
      status: 'larger',
      displayText: `+${formatBytes(increasedBytes)} larger (+${displayPct}%)`,
      isReduced: false,
      isLarger: true,
    };
  } else {
    // Exactly equal
    return {
      originalBytes,
      compressedBytes,
      savedBytes: 0,
      increasedBytes: 0,
      diffBytes: 0,
      percentage: 0,
      status: 'same',
      displayText: 'No change (0%)',
      isReduced: false,
      isLarger: false,
    };
  }
}

/**
 * Calculate resized dimensions while preserving aspect ratio if requested.
 */
export function calculateTargetDimensions(options: {
  originalWidth: number;
  originalHeight: number;
  targetWidth?: number;
  targetHeight?: number;
  maintainAspectRatio?: boolean;
  scalePercent?: number;
}): { width: number; height: number } {
  const { originalWidth, originalHeight, targetWidth, targetHeight, maintainAspectRatio = true, scalePercent } = options;

  if (originalWidth <= 0 || originalHeight <= 0) {
    return { width: 100, height: 100 };
  }

  // Scale percentage mode (e.g. 50% scale)
  if (scalePercent !== undefined && scalePercent > 0 && scalePercent <= 100) {
    const factor = scalePercent / 100;
    return {
      width: Math.max(1, Math.round(originalWidth * factor)),
      height: Math.max(1, Math.round(originalHeight * factor)),
    };
  }

  const aspectRatio = originalWidth / originalHeight;

  if (targetWidth && targetHeight) {
    if (!maintainAspectRatio) {
      return {
        width: Math.max(1, Math.round(targetWidth)),
        height: Math.max(1, Math.round(targetHeight)),
      };
    }
    // Fit within bounding box while preserving aspect ratio
    const ratioW = targetWidth / originalWidth;
    const ratioH = targetHeight / originalHeight;
    const ratio = Math.min(ratioW, ratioH);
    return {
      width: Math.max(1, Math.round(originalWidth * ratio)),
      height: Math.max(1, Math.round(originalHeight * ratio)),
    };
  }

  if (targetWidth && !targetHeight) {
    const width = Math.max(1, Math.round(targetWidth));
    const height = maintainAspectRatio ? Math.max(1, Math.round(width / aspectRatio)) : originalHeight;
    return { width, height };
  }

  if (!targetWidth && targetHeight) {
    const height = Math.max(1, Math.round(targetHeight));
    const width = maintainAspectRatio ? Math.max(1, Math.round(height * aspectRatio)) : originalWidth;
    return { width, height };
  }

  return { width: originalWidth, height: originalHeight };
}

/**
 * Generate output filename with updated extension.
 */
export function generateCompressedFilename(
  originalName: string,
  targetMimeType: string,
  prefix: string = 'optipress_'
): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot !== -1 ? originalName.substring(0, lastDot) : originalName;

  let ext = 'jpg';
  switch (targetMimeType) {
    case 'image/webp':
      ext = 'webp';
      break;
    case 'image/png':
      ext = 'png';
      break;
    case 'image/jpeg':
    default:
      ext = 'jpg';
      break;
  }

  return `${prefix}${baseName}.${ext}`;
}

/**
 * Detect MIME type accurately from File object and filename extension.
 */
export function detectMimeType(file: File): string {
  if (file.type) {
    const t = file.type.toLowerCase();
    if (t === 'image/jpeg' || t === 'image/jpg') return 'image/jpeg';
    if (t === 'image/png') return 'image/png';
    if (t === 'image/webp') return 'image/webp';
  }
  const name = file.name.toLowerCase();
  if (name.endsWith('.jpg') || name.endsWith('.jpeg')) return 'image/jpeg';
  if (name.endsWith('.png')) return 'image/png';
  if (name.endsWith('.webp')) return 'image/webp';
  return 'image/jpeg';
}

/**
 * Validate image file format and size.
 */
export function validateImageFile(file: File): { isValid: boolean; error?: string } {
  const mime = detectMimeType(file);
  const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  if (!acceptedTypes.includes(mime)) {
    return {
      isValid: false,
      error: `Unsupported format (${file.type || 'unknown'}). OptiPress supports JPG, JPEG, PNG, and WebP.`,
    };
  }

  // Max 50MB per image
  const maxSize = 50 * 1024 * 1024;
  if (file.size > maxSize) {
    return {
      isValid: false,
      error: `File is too large (${formatBytes(file.size)}). Maximum supported file size is 50 MB.`,
    };
  }

  return { isValid: true };
}
