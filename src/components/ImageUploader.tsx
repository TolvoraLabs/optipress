import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { validateImageFile } from '../utils/formatters';

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  onLoadSample: () => void;
  isProcessing?: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onFilesSelected,
  onLoadSample,
  isProcessing = false,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processSelectedFiles(Array.from(e.target.files));
      // Reset input value so re-selecting the same file fires onChange
      e.target.value = '';
    }
  };

  const processSelectedFiles = (incomingFiles: File[]) => {
    setUploadError(null);

    const validFiles: File[] = [];
    const errors: string[] = [];

    for (const file of incomingFiles) {
      const validation = validateImageFile(file);
      if (validation.isValid) {
        validFiles.push(file);
      } else {
        errors.push(`${file.name}: ${validation.error}`);
      }
    }

    if (errors.length > 0) {
      setUploadError(errors.slice(0, 3).join(' • ') + (errors.length > 3 ? ` (+${errors.length - 3} more)` : ''));
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  return (
    <div className="w-full">
      {/* Drop Zone Box */}
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer border-2 border-dashed rounded-3xl p-8 sm:p-12 transition-all duration-300 text-center flex flex-col items-center justify-center ${
          isDragOver
            ? 'border-blue-600 bg-blue-50/70 scale-[1.01] shadow-lg shadow-blue-500/10'
            : 'border-slate-300 hover:border-blue-400 bg-gradient-to-b from-white to-slate-50/50 hover:bg-slate-50/80 shadow-sm'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileInputChange}
          disabled={isProcessing}
        />

        {/* Floating Glow & Icon */}
        <div className="relative mb-4">
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition duration-300">
            <UploadCloud className="w-9 h-9 sm:w-10 sm:h-10 animate-pulse" />
          </div>
          <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-md">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
        </div>

        {/* Text Instructions */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">
          Drop your images here, or{' '}
          <span className="text-blue-600 underline decoration-blue-300 underline-offset-4 group-hover:text-blue-700">
            browse files
          </span>
        </h3>
        <p className="text-slate-500 text-sm max-w-md mb-6">
          Compress and resize JPG, JPEG, PNG, and WebP images. Select single or multiple files to process simultaneously.
        </p>

        {/* Format Tags & Limits */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs font-semibold text-slate-600">
          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">JPG / JPEG</span>
          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">PNG</span>
          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg shadow-2xs">WebP</span>
          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg">Up to 50 MB / image</span>
        </div>

        {/* Action Buttons: Browse + Try Sample */}
        <div className="flex flex-wrap items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition active:scale-95"
          >
            Select Images from Device
          </button>

          <button
            type="button"
            onClick={onLoadSample}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition flex items-center gap-2 shadow-2xs hover:border-slate-400"
            title="Load a high-res sample photo to test compression instantly"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            Try with Sample Photo
          </button>
        </div>

        {/* Privacy Assurance Banner */}
        <div className="mt-8 pt-5 border-t border-slate-200/80 w-full max-w-lg flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>100% Private & In-Browser: Your photos are never uploaded to any server.</span>
        </div>
      </div>

      {/* Upload Error Banner */}
      {uploadError && (
        <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2 animate-fadeIn">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
          <div>
            <strong className="font-semibold">Notice: </strong>
            {uploadError}
          </div>
        </div>
      )}
    </div>
  );
};
