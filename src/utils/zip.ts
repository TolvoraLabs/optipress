import JSZip from 'jszip';
import { CompressedItem } from './compressor';

/**
 * Create a ZIP archive containing all successfully compressed images and trigger download.
 */
export async function downloadAllAsZip(
  items: CompressedItem[],
  zipFilename: string = 'optipress-compressed-images.zip'
): Promise<{ success: boolean; count: number; error?: string }> {
  const successfulItems = items.filter((item) => item.status === 'success' && item.compressedBlob);

  if (successfulItems.length === 0) {
    return { success: false, count: 0, error: 'No compressed images ready for download.' };
  }

  const zip = new JSZip();

  // Add each compressed file into the zip
  const nameCounts: Record<string, number> = {};

  for (const item of successfulItems) {
    if (!item.compressedBlob) continue;

    let filename = item.downloadFilename || item.name;

    // Handle duplicate filenames gracefully
    if (nameCounts[filename]) {
      nameCounts[filename]++;
      const dot = filename.lastIndexOf('.');
      if (dot !== -1) {
        filename = `${filename.substring(0, dot)}_${nameCounts[filename]}${filename.substring(dot)}`;
      } else {
        filename = `${filename}_${nameCounts[filename]}`;
      }
    } else {
      nameCounts[filename] = 1;
    }

    zip.file(filename, item.compressedBlob);
  }

  try {
    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    });

    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = zipFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(url), 1500);
    return { success: true, count: successfulItems.length };
  } catch (err) {
    return {
      success: false,
      count: 0,
      error: err instanceof Error ? err.message : 'Failed to generate ZIP archive.',
    };
  }
}
