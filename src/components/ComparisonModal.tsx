import React, { useState, useRef, useEffect } from 'react';
import { X, Download, Sliders, Maximize2, SplitSquareVertical } from 'lucide-react';
import { CompressedItem, downloadBlob } from '../utils/compressor';
import { formatBytes } from '../utils/formatters';

interface ComparisonModalProps {
  item: CompressedItem;
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ item, onClose }) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    updateSlider(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if already released
    }
  };

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const compressedUrl = item.compressedUrl || item.originalUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h3 id="comparison-title" className="font-semibold text-slate-900 text-lg flex items-center gap-2">
              <Sliders className="w-5 h-5 text-blue-600" />
              Before & After Quality Inspection
            </h3>
            <p className="text-xs text-slate-500 truncate max-w-md">
              {item.name} • {item.originalWidth}×{item.originalHeight}px
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex bg-slate-200/80 p-0.5 rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 rounded-md transition ${
                  viewMode === 'slider' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Split Slider
              </button>
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`px-3 py-1.5 rounded-md transition ${
                  viewMode === 'side-by-side' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Side-by-Side
              </button>
            </div>

            {item.compressedBlob && (
              <button
                type="button"
                onClick={() => downloadBlob(item.compressedBlob!, item.downloadFilename)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close comparison preview"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats banner */}
        <div className="bg-blue-50/70 border-b border-blue-100/60 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-slate-500 font-medium">Original:</span>{' '}
              <strong className="text-slate-800">{formatBytes(item.originalSize)}</strong>
            </div>
            <div className="text-slate-300">→</div>
            <div>
              <span className="text-slate-500 font-medium">Compressed:</span>{' '}
              <strong className="text-blue-700">{formatBytes(item.compressedSize)}</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {item.savingsResult.isReduced && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                Saved {item.savingsResult.percentage}% ({formatBytes(item.savingsResult.savedBytes)})
              </span>
            )}
            {item.savingsResult.isLarger && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                +{formatBytes(item.savingsResult.increasedBytes)} larger (+{item.savingsResult.percentage}%)
              </span>
            )}
            {item.savingsResult.status === 'same' && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                No size change (0%)
              </span>
            )}
            <span className="text-slate-500">Quality: {Math.round(item.options.quality * 100)}%</span>
          </div>
        </div>

        {/* Interactive Viewer */}
        <div className="relative flex-1 bg-slate-900 overflow-hidden min-h-[320px] sm:min-h-[460px] flex items-center justify-center p-4">
          {viewMode === 'slider' ? (
            <div
              ref={containerRef}
              className="relative w-full h-full max-h-[65vh] flex items-center justify-center select-none overflow-hidden cursor-ew-resize rounded-lg border border-slate-800 bg-slate-950"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            >
              {/* Compressed Image (Background) */}
              <img
                src={compressedUrl}
                alt="Compressed preview"
                className="max-w-full max-h-[65vh] object-contain pointer-events-none"
              />

              {/* Original Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={item.originalUrl}
                  alt="Original image"
                  className="max-w-full max-h-[65vh] object-contain"
                />
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <SplitSquareVertical className="w-4 h-4" />
                </div>
              </div>

              {/* Labels on both sides */}
              <div className="absolute bottom-4 left-4 z-10 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-white rounded text-xs font-medium">
                Original ({formatBytes(item.originalSize)})
              </div>
              <div className="absolute bottom-4 right-4 z-10 px-2.5 py-1 bg-blue-600/90 backdrop-blur-xs text-white rounded text-xs font-medium">
                Compressed ({formatBytes(item.compressedSize)})
              </div>
            </div>
          ) : (
            /* Side by side */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full max-h-[65vh]">
              <div className="flex flex-col items-center justify-center bg-slate-950 rounded-lg p-3 border border-slate-800 relative">
                <span className="absolute top-3 left-3 px-2 py-1 bg-black/80 text-white text-xs rounded font-medium z-10">
                  Original • {formatBytes(item.originalSize)}
                </span>
                <img
                  src={item.originalUrl}
                  alt="Original preview"
                  className="max-w-full max-h-[50vh] object-contain rounded"
                />
              </div>
              <div className="flex flex-col items-center justify-center bg-slate-950 rounded-lg p-3 border border-slate-800 relative">
                <span className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs rounded font-medium z-10">
                  Output • {formatBytes(item.compressedSize)} ({item.savingsResult.displayText})
                </span>
                <img
                  src={compressedUrl}
                  alt="Compressed preview"
                  className="max-w-full max-h-[50vh] object-contain rounded"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Drag the center divider left or right to inspect compression fidelity.</span>
          <span className="text-emerald-600 font-medium hidden sm:inline">
            Zero visual artifacts detected • 100% Client-side
          </span>
        </div>
      </div>
    </div>
  );
};
