import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  Trash2,
  Eye,
  Settings2,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Loader2,
  Sparkles,
  RefreshCw,
  X,
} from 'lucide-react';
import { CompressedItem, ImageProcessingOptions, OutputFormatOption, downloadBlob } from '../utils/compressor';
import { formatBytes } from '../utils/formatters';

interface ImageCardProps {
  item: CompressedItem;
  onRecompressWithSettings: (id: string, newSettings: Partial<ImageProcessingOptions>) => void;
  onRemove: (id: string) => void;
  onOpenCompare: (item: CompressedItem) => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  item,
  onRecompressWithSettings,
  onRemove,
  onOpenCompare,
}) => {
  const [showSettings, setShowSettings] = useState(false);
  const [localQuality, setLocalQuality] = useState(Math.round(item.options.quality * 100));
  const [localFormat, setLocalFormat] = useState<OutputFormatOption>(item.options.outputFormat);
  const [maintainAspect, setMaintainAspect] = useState<boolean>(item.options.maintainAspectRatio);
  const [customW, setCustomW] = useState<number | ''>(item.options.customWidth || item.originalWidth);
  const [customH, setCustomH] = useState<number | ''>(item.options.customHeight || item.originalHeight);
  const [scalePreset, setScalePreset] = useState<number>(item.options.scalePercent || 100);

  // Sync local state when external item.options changes (e.g. global batch updates)
  useEffect(() => {
    setLocalQuality(Math.round(item.options.quality * 100));
    setLocalFormat(item.options.outputFormat);
    setMaintainAspect(item.options.maintainAspectRatio);
    setCustomW(item.options.customWidth || item.compressedWidth || item.originalWidth);
    setCustomH(item.options.customHeight || item.compressedHeight || item.originalHeight);
    setScalePreset(item.options.scalePercent || 100);
  }, [
    item.options.quality,
    item.options.outputFormat,
    item.options.maintainAspectRatio,
    item.options.customWidth,
    item.options.customHeight,
    item.options.scalePercent,
    item.compressedWidth,
    item.compressedHeight,
    item.originalWidth,
    item.originalHeight,
  ]);

  const aspectRatio = item.originalWidth / item.originalHeight;
  const isCurrentlyPng = item.outputMimeType === 'image/png';
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerLiveRecompress = (updates: Partial<ImageProcessingOptions>) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      onRecompressWithSettings(item.id, updates);
    }, 350);
  };

  const handleQualityChange = (val: number) => {
    setLocalQuality(val);
    triggerLiveRecompress({ quality: val / 100 });
  };

  const handleFormatChange = (fmt: OutputFormatOption) => {
    setLocalFormat(fmt);
    triggerLiveRecompress({ outputFormat: fmt });
  };

  const handleWidthChange = (valStr: string) => {
    if (valStr === '') {
      setCustomW('');
      return;
    }
    const val = parseInt(valStr, 10);
    if (isNaN(val)) return;
    setCustomW(val);
    let newH = typeof customH === 'number' ? customH : item.originalHeight;
    if (maintainAspect && aspectRatio) {
      newH = Math.max(1, Math.round(val / aspectRatio));
      setCustomH(newH);
    }
    setScalePreset(0);
    triggerLiveRecompress({
      customWidth: val,
      customHeight: newH,
      scalePercent: undefined,
      maintainAspectRatio: maintainAspect,
    });
  };

  const handleHeightChange = (valStr: string) => {
    if (valStr === '') {
      setCustomH('');
      return;
    }
    const val = parseInt(valStr, 10);
    if (isNaN(val)) return;
    setCustomH(val);
    let newW = typeof customW === 'number' ? customW : item.originalWidth;
    if (maintainAspect && aspectRatio) {
      newW = Math.max(1, Math.round(val * aspectRatio));
      setCustomW(newW);
    }
    setScalePreset(0);
    triggerLiveRecompress({
      customWidth: newW,
      customHeight: val,
      scalePercent: undefined,
      maintainAspectRatio: maintainAspect,
    });
  };

  const handleScalePreset = (percent: number) => {
    setScalePreset(percent);
    const factor = percent / 100;
    const newW = Math.max(1, Math.round(item.originalWidth * factor));
    const newH = Math.max(1, Math.round(item.originalHeight * factor));
    setCustomW(newW);
    setCustomH(newH);
    triggerLiveRecompress({
      scalePercent: percent > 0 && percent < 100 ? percent : undefined,
      customWidth: newW,
      customHeight: newH,
    });
  };

  const handleQuickConvertToWebp = () => {
    setLocalFormat('image/webp');
    onRecompressWithSettings(item.id, {
      outputFormat: 'image/webp',
    });
  };

  const savings = item.savingsResult;

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
      {/* Top Main Row */}
      <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Thumbnail Preview with click to compare */}
        <div className="relative group shrink-0 w-full sm:w-24 h-24 sm:h-24 bg-slate-100 rounded-lg overflow-hidden border border-slate-200/80 flex items-center justify-center">
          <img
            src={item.compressedUrl || item.originalUrl}
            alt={item.name}
            className="w-full h-full object-cover transition duration-200 group-hover:scale-105"
          />
          {item.status === 'success' && (
            <button
              type="button"
              onClick={() => onOpenCompare(item)}
              title="Open full comparison"
              className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-[11px] font-medium gap-1"
            >
              <Eye className="w-5 h-5 text-white" />
              <span>Compare</span>
            </button>
          )}
          {item.status === 'compressing' && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h4 className="font-semibold text-slate-800 text-sm truncate max-w-xs" title={item.name}>
              {item.name}
            </h4>

            {/* Accurate Status Badges */}
            {item.status === 'success' && (
              <>
                {savings.isReduced && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Saved {savings.percentage}%
                  </span>
                )}
                {savings.isLarger && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    +{formatBytes(savings.increasedBytes)} larger (+{savings.percentage}%)
                  </span>
                )}
                {savings.status === 'same' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    No size change (0%)
                  </span>
                )}
              </>
            )}

            {item.status === 'compressing' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 animate-pulse">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Compressing...
              </span>
            )}

            {item.status === 'error' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-200">
                <AlertCircle className="w-3.5 h-3.5" />
                Failed
              </span>
            )}
          </div>

          {/* Size Comparison Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-1">
            <div>
              <span className="text-slate-400">Original:</span>{' '}
              <span className="font-semibold text-slate-800">{formatBytes(item.originalSize)}</span>
              <span className="text-slate-400 ml-1">({item.originalWidth}×{item.originalHeight}px)</span>
            </div>

            {item.status === 'success' && (
              <>
                <span className="text-slate-300">→</span>
                <div>
                  <span className="text-slate-400">Output ({item.outputMimeType.replace('image/', '')}):</span>{' '}
                  <span className={`font-bold ${savings.isLarger ? 'text-amber-700' : 'text-blue-600'}`}>
                    {formatBytes(item.compressedSize)}
                  </span>
                  <span className="text-slate-400 ml-1">({item.compressedWidth}×{item.compressedHeight}px)</span>
                </div>

                {savings.isReduced && (
                  <div className="text-emerald-600 font-semibold">
                    (-{formatBytes(savings.savedBytes)})
                  </div>
                )}
              </>
            )}
          </div>

          {/* Notice when PNG was processed and didn't reduce */}
          {item.status === 'success' && isCurrentlyPng && savings.isLarger && (
            <div className="mt-2 p-2 rounded-lg bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>PNG format is lossless in web browsers and ignores the quality slider.</span>
              </span>
              <button
                type="button"
                onClick={handleQuickConvertToWebp}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-700 hover:bg-amber-800 text-white font-semibold transition active:scale-95 text-[10px]"
              >
                <Sparkles className="w-3 h-3" />
                Convert to WebP (Shrink by 70–90%)
              </button>
            </div>
          )}

          {item.errorMessage && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {item.errorMessage}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            aria-label="Adjust image settings"
            className={`p-2 rounded-lg border text-xs font-medium transition flex items-center gap-1.5 ${
              showSettings
                ? 'bg-blue-50 border-blue-200 text-blue-700'
                : 'border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
            title="Individual Quality & Resize Settings"
          >
            <Settings2 className="w-4 h-4" />
            <span className="hidden md:inline">Adjust</span>
          </button>

          <button
            type="button"
            onClick={() => onRecompressWithSettings(item.id, {})}
            disabled={item.status === 'compressing'}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition flex items-center gap-1.5 text-xs font-medium"
            title="Re-compress this image now"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${item.status === 'compressing' ? 'animate-spin text-blue-600' : ''}`} />
            <span className="hidden md:inline">Re-compress</span>
          </button>

          {item.status === 'success' && (
            <button
              type="button"
              onClick={() => onOpenCompare(item)}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition flex items-center gap-1.5 text-xs font-medium"
              title="Compare Before & After"
            >
              <Eye className="w-4 h-4 text-purple-600" />
              <span className="hidden md:inline">Compare</span>
            </button>
          )}

          {item.status === 'success' && item.compressedBlob && (
            <button
              type="button"
              onClick={() => downloadBlob(item.compressedBlob!, item.downloadFilename)}
              className="px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition flex items-center gap-1.5 text-xs font-semibold shadow-xs"
              title="Download Compressed Image"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove image ${item.name}`}
            className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
            title="Remove from list"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable Per-Image Settings Drawer with Live Updating */}
      {showSettings && (
        <div className="border-t border-slate-100 bg-slate-50/70 p-4 transition-all duration-200">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60 text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Settings2 className="w-3.5 h-3.5 text-blue-600" />
              Custom Settings for "{item.name}"
            </span>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              Live auto-compressed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Quality Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor={`quality-slider-${item.id}`} className="font-semibold text-slate-700">Quality: {localQuality}%</label>
                <span className="text-[11px] text-slate-400">
                  {localQuality >= 80 ? 'Crisp' : localQuality >= 60 ? 'Optimal' : 'Max Saving'}
                </span>
              </div>
              <input
                id={`quality-slider-${item.id}`}
                type="range"
                min="5"
                max="100"
                step="5"
                value={localQuality}
                onChange={(e) => handleQualityChange(parseInt(e.target.value, 10))}
                className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                aria-label={`Quality for ${item.name}`}
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>5% (Smallest)</span>
                <span>100% (Lossless/Max)</span>
              </div>

              {localFormat === 'image/png' || (localFormat === 'auto' && item.originalMimeType === 'image/png') ? (
                <p className="text-[10px] text-amber-700 font-medium">
                  Notice: Quality slider has no effect on PNG in web browsers. Select WebP to enable quality compression.
                </p>
              ) : null}
            </div>

            {/* Target Format */}
            <div className="space-y-1.5">
              <label htmlFor={`format-select-${item.id}`} className="font-semibold text-slate-700">Output Format</label>
              <select
                id={`format-select-${item.id}`}
                value={localFormat}
                onChange={(e) => handleFormatChange(e.target.value as OutputFormatOption)}
                className="w-full p-2 bg-white rounded-lg border border-slate-200 text-slate-700 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <option value="auto">Keep Original ({item.originalMimeType.replace('image/', '')})</option>
                <option value="image/webp">WebP (Recommended - Smallest File Size)</option>
                <option value="image/jpeg">JPEG / JPG (Standard compatibility)</option>
                <option value="image/png">PNG (Lossless)</option>
              </select>
              {localFormat === 'image/webp' ? (
                <p className="text-[11px] text-purple-600 flex items-center gap-1 font-medium">
                  <Sparkles className="w-3 h-3" />
                  WebP provides genuine lossy & lossless compression with alpha support.
                </p>
              ) : localFormat === 'image/jpeg' ? (
                <p className="text-[11px] text-blue-600">
                  JPEG supports high lossy compression. Solid white background used for transparent areas.
                </p>
              ) : (
                <p className="text-[11px] text-slate-400">
                  PNG preserves exact pixel values without lossy compression.
                </p>
              )}
            </div>

            {/* Resize / Dimensions */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-slate-700">Resize Dimensions</label>
                <button
                  type="button"
                  onClick={() => setMaintainAspect(!maintainAspect)}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800"
                >
                  {maintainAspect ? (
                    <>
                      <Lock className="w-3 h-3 text-blue-600" />
                      Aspect Locked
                    </>
                  ) : (
                    <>
                      <Unlock className="w-3 h-3 text-amber-500" />
                      Free ratio
                    </>
                  )}
                </button>
              </div>

              {/* Scale Quick Presets */}
              <div className="grid grid-cols-4 gap-1 mb-1.5">
                {[100, 75, 50, 25].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => handleScalePreset(pct)}
                    className={`py-1 px-1 rounded text-center text-[10px] font-medium border transition ${
                      scalePreset === pct
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>

              {/* Exact Width and Height */}
              <div className="flex items-center gap-1.5">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Width"
                      value={customW}
                      onChange={(e) => handleWidthChange(e.target.value)}
                      className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-700 focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="absolute right-1.5 top-1 text-[10px] text-slate-400">w</span>
                  </div>
                </div>
                <span className="text-slate-400">×</span>
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Height"
                      value={customH}
                      onChange={(e) => handleHeightChange(e.target.value)}
                      className="w-full px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-700 focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="absolute right-1.5 top-1 text-[10px] text-slate-400">h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Close drawer button */}
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              className="px-4 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition shadow-2xs"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
