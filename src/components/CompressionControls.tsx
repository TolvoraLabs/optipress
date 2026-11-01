import React from 'react';
import {
  Trash2,
  Sparkles,
  SlidersHorizontal,
  Archive,
  Layers,
  Info,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { ImageProcessingOptions, OutputFormatOption } from '../utils/compressor';
import { SavingsResult, formatBytes } from '../utils/formatters';

interface CompressionControlsProps {
  totalOriginalSize: number;
  totalCompressedSize: number;
  aggregateSavings: SavingsResult;
  totalCount: number;
  successCount: number;
  hasPngItems: boolean;
  isProcessing: boolean;
  globalOptions: ImageProcessingOptions;
  onChangeGlobalOptions: (opts: Partial<ImageProcessingOptions>) => void;
  onDownloadAllZip: () => void;
  onClearAll: () => void;
}

export const CompressionControls: React.FC<CompressionControlsProps> = ({
  totalOriginalSize,
  totalCompressedSize,
  aggregateSavings,
  totalCount,
  successCount,
  hasPngItems,
  isProcessing,
  globalOptions,
  onChangeGlobalOptions,
  onDownloadAllZip,
  onClearAll,
}) => {
  const currentQualityPct = Math.round(globalOptions.quality * 100);

  const presets = [
    { label: 'Crisp (85%)', value: 85, desc: 'High visual fidelity' },
    { label: 'Balanced (70%)', value: 70, desc: 'Recommended default' },
    { label: 'Max Saving (30%)', value: 30, desc: 'Aggressive file reduction' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-6 mb-6 transition-all">
      {/* Top summary row: Aggregate stats */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-blue-700">
              <Layers className="w-4 h-4" />
            </span>
            <h3 className="text-base font-bold text-slate-800">
              Live Batch Optimization ({totalCount} {totalCount === 1 ? 'image' : 'images'})
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Changes to quality, format, or scale are automatically compressed live in your browser.
          </p>
        </div>

        {/* Global Summary Badge */}
        {totalCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl text-xs">
            <div>
              <span className="text-slate-400">Total Before:</span>{' '}
              <strong className="text-slate-800">{formatBytes(totalOriginalSize)}</strong>
            </div>
            <span className="text-slate-300">→</span>
            <div>
              <span className="text-slate-400">Total After:</span>{' '}
              <strong className={aggregateSavings.isLarger ? 'text-amber-700' : 'text-blue-600'}>
                {formatBytes(totalCompressedSize)}
              </strong>
            </div>
            {aggregateSavings.isReduced && (
              <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Saved {aggregateSavings.percentage}% ({formatBytes(aggregateSavings.savedBytes)})
              </span>
            )}
            {aggregateSavings.isLarger && (
              <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-200">
                +{formatBytes(aggregateSavings.increasedBytes)} larger (+{aggregateSavings.percentage}%)
              </span>
            )}
          </div>
        )}
      </div>

      {/* Notice if PNG files are loaded and format is not WebP */}
      {hasPngItems && globalOptions.outputFormat !== 'image/webp' && (
        <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>PNG Notice:</strong> PNG is a lossless format and ignores quality sliders in web browsers. Select <strong>WebP</strong> as Target Format to compress PNGs by 70–90%.
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              onChangeGlobalOptions({ outputFormat: 'image/webp' });
            }}
            className="shrink-0 px-2.5 py-1 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-lg text-[11px] transition"
          >
            Switch to WebP
          </button>
        </div>
      )}

      {/* Global Setting Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
        {/* 1. Global Quality */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label htmlFor="global-quality-slider" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              Quality: <span className="text-blue-600 font-extrabold">{currentQualityPct}%</span>
            </label>
            <span className="text-[11px] text-slate-400">
              {currentQualityPct >= 80 ? 'Crisp Detail' : currentQualityPct >= 60 ? 'Balanced' : 'High Compression'}
            </span>
          </div>

          <input
            id="global-quality-slider"
            type="range"
            min="5"
            max="100"
            step="5"
            value={currentQualityPct}
            onChange={(e) => onChangeGlobalOptions({ quality: parseInt(e.target.value, 10) / 100 })}
            className="w-full h-2 bg-slate-200 rounded-lg accent-blue-600 cursor-pointer"
            aria-label={`Compression quality ${currentQualityPct} percent`}
          />

          {/* Preset Buttons */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {presets.map((preset) => (
              <button
                key={preset.value}
                type="button"
                onClick={() => onChangeGlobalOptions({ quality: preset.value / 100 })}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-medium border text-center transition ${
                  currentQualityPct === preset.value
                    ? 'bg-blue-50 border-blue-300 text-blue-700 font-semibold shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                title={preset.desc}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <p className="text-[10px] text-slate-400">
            Automatically live-compresses ~350ms after you stop moving the slider.
          </p>
        </div>

        {/* 2. Format Selection */}
        <div className="space-y-2.5">
          <label htmlFor="global-target-format" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Target Format
          </label>
          <select
            id="global-target-format"
            value={globalOptions.outputFormat}
            onChange={(e) => onChangeGlobalOptions({ outputFormat: e.target.value as OutputFormatOption })}
            className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-slate-700 text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          >
            <option value="auto">Auto (Match original file format)</option>
            <option value="image/webp">WebP (Recommended — Genuinely compresses JPG & PNG)</option>
            <option value="image/jpeg">JPEG / JPG (High compression for photos)</option>
            <option value="image/png">PNG (Lossless — Quality slider does not apply)</option>
          </select>
          <p className="text-[11px] text-slate-500">
            Automatically re-encodes files immediately when changed.
          </p>
        </div>

        {/* 3. Global Resize Scaling */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
            <span>Resize Scale</span>
            <span className="text-[11px] text-blue-600 font-semibold">
              {globalOptions.scalePercent || 100}%
            </span>
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[100, 75, 50, 25].map((scale) => (
              <button
                key={scale}
                type="button"
                onClick={() => onChangeGlobalOptions({ scalePercent: scale === 100 ? undefined : scale })}
                className={`py-2 px-1 text-center text-xs font-semibold rounded-lg border transition ${
                  (globalOptions.scalePercent || 100) === scale
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {scale}%
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-400">
            Scale dimensions proportionally (e.g. 50% reduces pixel count by 75%).
          </p>
        </div>
      </div>

      {/* Action Toolbar with Live Status Indicators */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Live Status Indicator */}
        <div className="flex items-center gap-3">
          {isProcessing ? (
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80 animate-pulse">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span>Compressing live ({currentQualityPct}%)...</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live compression active</span>
            </div>
          )}

          <button
            type="button"
            onClick={onClearAll}
            disabled={totalCount === 0 || isProcessing}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 disabled:opacity-40 transition"
            title="Remove all uploaded images"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear All
          </button>
        </div>

        {/* Right: ZIP Download */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDownloadAllZip}
            disabled={successCount === 0 || isProcessing}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition disabled:opacity-50"
            title="Download all compressed images in a single ZIP file"
          >
            <Archive className="w-4 h-4 text-blue-400" />
            Download All as ZIP ({successCount})
          </button>
        </div>
      </div>
    </div>
  );
};
