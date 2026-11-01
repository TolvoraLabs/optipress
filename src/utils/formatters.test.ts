import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatBytes,
  calculateSavings,
  calculateTargetDimensions,
  generateCompressedFilename,
  detectMimeType,
} from './formatters';

test('formatBytes handles zero, small bytes, and decimals', () => {
  assert.equal(formatBytes(0), '0 B');
  assert.equal(formatBytes(500), '500 B');
  assert.equal(formatBytes(1024), '1 KB');
  assert.equal(formatBytes(1536, 1), '1.5 KB');
  assert.equal(formatBytes(876032, 1), '855.5 KB');
  assert.equal(formatBytes(876441, 1), '855.9 KB');
});

test('calculateSavings accurately calculates reductions in raw bytes', () => {
  const result = calculateSavings(1000, 300);
  assert.equal(result.savedBytes, 700);
  assert.equal(result.increasedBytes, 0);
  assert.equal(result.percentage, 70);
  assert.equal(result.status, 'reduced');
  assert.equal(result.isReduced, true);
  assert.equal(result.isLarger, false);
});

test('calculateSavings accurately detects when output file is larger (e.g. 855.5 KB to 855.9 KB)', () => {
  // 876032 bytes = 855.5 KB, 876441 bytes = 855.9 KB (+409 bytes)
  const result = calculateSavings(876032, 876441);
  assert.equal(result.status, 'larger');
  assert.equal(result.isReduced, false);
  assert.equal(result.isLarger, true);
  assert.equal(result.increasedBytes, 409);
  assert.equal(result.savedBytes, 0);
  assert.match(result.displayText, /larger/);
});

test('calculateSavings handles identical sizes', () => {
  const result = calculateSavings(5000, 5000);
  assert.equal(result.status, 'same');
  assert.equal(result.percentage, 0);
  assert.equal(result.isReduced, false);
  assert.equal(result.isLarger, false);
});

test('detectMimeType handles file extensions and types', () => {
  const jpgFile = { type: 'image/jpeg', name: 'photo.jpg' } as File;
  const pngFile = { type: '', name: 'logo.PNG' } as File;
  const webpFile = { type: 'image/webp', name: 'image.webp' } as File;

  assert.equal(detectMimeType(jpgFile), 'image/jpeg');
  assert.equal(detectMimeType(pngFile), 'image/png');
  assert.equal(detectMimeType(webpFile), 'image/webp');
});

test('calculateTargetDimensions scales by percentage', () => {
  const dims = calculateTargetDimensions({
    originalWidth: 1920,
    originalHeight: 1080,
    scalePercent: 50,
  });
  assert.equal(dims.width, 960);
  assert.equal(dims.height, 540);
});

test('generateCompressedFilename produces proper extensions', () => {
  assert.equal(
    generateCompressedFilename('vacation-photo.PNG', 'image/webp'),
    'optipress_vacation-photo.webp'
  );
  assert.equal(
    generateCompressedFilename('banner.jpeg', 'image/jpeg'),
    'optipress_banner.jpg'
  );
  assert.equal(
    generateCompressedFilename('logo.webp', 'image/png'),
    'optipress_logo.png'
  );
});
