import React from 'react';
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Sliders,
  FileImage,
  Maximize2,
  Sparkles,
  Clock,
  CheckCircle2,
  Layers,
  HelpCircle,
  Layout,
} from 'lucide-react';

interface GuidesPageProps {
  onGoToCompressor?: () => void;
  onNavigateToCompressGuide?: () => void;
  onNavigateToFormatGuide?: () => void;
  onNavigateToImageSizesGuide?: () => void;
  onNavigateToContact?: () => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({
  onGoToCompressor,
  onNavigateToCompressGuide,
  onNavigateToFormatGuide,
  onNavigateToImageSizesGuide,
  onNavigateToContact,
}) => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        {onGoToCompressor && (
          <div className="mb-8">
            <button
              type="button"
              onClick={onGoToCompressor}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Image Compressor
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              Knowledge Base &amp; Tutorials
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-2 tracking-tight">
            Image Compression Guides &amp; Resources
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Welcome to the OptiPress knowledge center. This section helps visitors understand image formats, compression quality, resizing, file sizes, and web image optimization with practical, beginner-friendly advice.
          </p>
        </div>

        {/* Core Pillars / Topics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
              <Sliders className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
              Quality &amp; Sliders
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Find the 70–80% sweet spot where file sizes drop by 60–80% without noticeable blurring.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
              <FileImage className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
              Formats (WebP, JPG, PNG)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Understand when to use lossy JPEG, lossless PNG transparency, or modern WebP encoding.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-2.5 shadow-2xs">
              <Maximize2 className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
              Dimension Resizing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scale down 4000px camera photos to web containers to fix slow mobile load times instantly.
            </p>
          </div>
        </div>

        {/* In-Depth Tutorials Section */}
        <div className="space-y-8 mb-12">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              In-Depth Tutorials &amp; Comparison Guides
            </h2>
            <span className="text-xs text-slate-500 font-medium">3 Dedicated Guides</span>
          </div>

          {/* Tutorial Card 1: Compression without Blur */}
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white hover:border-blue-300 transition shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Step-by-Step Tutorial
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 8 min read
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500">10 Chapters</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              How to Compress Images for the Web Without Making Them Look Blurry
            </h3>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              A complete walkthrough on balancing file size reduction with visual clarity. Learn why image weight matters for SEO and Core Web Vitals, how lossy vs. lossless compression functions, how to pick optimal quality slider settings, and how to avoid the &quot;Megapixel Trap&quot; through smart dimension resizing.
            </p>

            {/* Highlights */}
            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold mb-2">
                Key Topics Covered:
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>The 70%–80% compression sweet spot</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>The Megapixel Trap and dimension scaling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Before/After side-by-side inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Four common image quality mistakes</span>
                </div>
              </div>
            </div>

            {/* Read Article Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                type="button"
                onClick={onNavigateToCompressGuide}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition active:scale-95 cursor-pointer"
              >
                <span>Read Full Compression Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-slate-500 font-mono">
                /guides/compress-images-for-web
              </span>
            </div>
          </div>

          {/* Tutorial Card 2: WebP vs JPG vs PNG */}
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white hover:border-indigo-300 transition shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                Format Comparison Guide
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 7 min read
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500">11 Chapters</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              WebP vs JPG vs PNG: Which Image Format Should You Choose?
            </h3>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              An honest, in-depth comparison of WebP, JPG, and PNG image formats. Learn about lossy vs. lossless encoding, transparency behavior, browser compatibility across 96%+ of users, when to deploy each format, and how to convert images directly in your browser.
            </p>

            {/* Highlights */}
            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold mb-2">
                Key Topics Covered:
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Comprehensive side-by-side comparison table</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Transparency support: alpha channel vs. solid fills</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Clear decision tree: When to use JPG, PNG, or WebP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Step-by-step conversion workflow in OptiPress</span>
                </div>
              </div>
            </div>

            {/* Read Article Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                type="button"
                onClick={onNavigateToFormatGuide}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition active:scale-95 cursor-pointer"
              >
                <span>Read Format Comparison</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-slate-500 font-mono">
                /guides/webp-vs-jpg-vs-png
              </span>
            </div>
          </div>

          {/* Tutorial Card 3: Best Image Sizes for Websites */}
          <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white hover:border-emerald-300 transition shadow-xs">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Sizing &amp; Dimensions Guide
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 8 min read
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500">8 Chapters</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Best Image Sizes for Websites: A Beginner&apos;s Guide
            </h3>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              A comprehensive walkthrough on choosing the right pixel dimensions and aspect ratios for your website. Covers recommended resolutions for hero banners, blog headers, body content, e-commerce products, and thumbnails, with a full comparison table and practical resizing tips.
            </p>

            {/* Highlights */}
            <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm">
              <strong className="text-slate-900 block font-semibold mb-2">
                Key Topics Covered:
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Pixel dimensions vs. storage file weight (KB/MB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Recommended pixel sizes for heroes, blogs, and products</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Aspect ratios (16:9, 4:3, 1:1, 3:2) &amp; layout stability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Two-step resizing &amp; compression workflow with OptiPress</span>
                </div>
              </div>
            </div>

            {/* Read Article Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                type="button"
                onClick={onNavigateToImageSizesGuide}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition active:scale-95 cursor-pointer"
              >
                <span>Read Image Sizing Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-xs text-slate-500 font-mono">
                /guides/best-image-sizes-for-websites
              </span>
            </div>
          </div>
        </div>

        {/* Fast Action CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold mb-1.5">
              Put these image principles into practice
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-lg leading-relaxed">
              Compress, resize, and convert JPG, PNG, and WebP images directly in your browser with OptiPress. Completely free, no registration, and zero server uploads.
            </p>
          </div>
          {onGoToCompressor && (
            <button
              type="button"
              onClick={onGoToCompressor}
              className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition active:scale-95 shadow-xs shrink-0 cursor-pointer"
            >
              Launch Compressor
            </button>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          {onGoToCompressor && (
            <button
              type="button"
              onClick={onGoToCompressor}
              className="hover:text-blue-600 transition flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Image Compressor
            </button>
          )}

          {onNavigateToContact && (
            <button
              type="button"
              onClick={onNavigateToContact}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Have a question or guide suggestion? Contact Us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
