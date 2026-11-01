import React from 'react';
import { Cpu, Eye, FileDown, Layers, Zap, Sliders, HardDrive, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            Technology Behind OptiPress
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How Browser Image Compression Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            OptiPress utilizes modern Web APIs to optimize pixels locally on your device without compromising perceptual image quality.
          </p>
        </div>

        {/* 3 Step Visual Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {/* Step 1 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative hover:border-blue-300 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              Local Canvas Decoding
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you select an image, OptiPress decodes the image bitmap directly into your browser's memory using HTML5 Canvas. No data is sent over the internet or uploaded to any server.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative hover:border-blue-300 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-purple-600" />
              Chroma Subsampling & Quantization
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The human eye is more sensitive to variations in brightness (luminance) than color (chrominance). OptiPress selectively compresses color data and strips redundant EXIF metadata while preserving crisp edges.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative hover:border-blue-300 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-sm">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FileDown className="w-5 h-5 text-indigo-600" />
              Instant Export & ZIP Packaging
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The optimized image is re-encoded into high-efficiency JPEG or modern WebP format. You can download individual pictures immediately or export an entire batch in a single compressed ZIP file.
            </p>
          </div>
        </div>

        {/* Deep Dive Box: Lossy vs Lossless & WebP */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/30 text-blue-200 border border-blue-400/30 mb-4">
                <Zap className="w-3.5 h-3.5" />
                Compression Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Lossy vs. Lossless: Which Should You Use?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Understanding the trade-offs helps you achieve the smallest possible file sizes while keeping your visuals sharp.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    JPEG / JPG (Lossy)
                  </h4>
                  <p className="text-slate-300">
                    Best for photographs and complex real-world images. Achieves 60–85% file size reduction with virtually invisible visual degradation.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    WebP (Next-Gen Format)
                  </h4>
                  <p className="text-slate-300">
                    Developed by Google, WebP provides superior lossless and lossy compression for images on the web. It is roughly 25–35% smaller than comparable JPEGs.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    PNG (Lossless & Transparency)
                  </h4>
                  <p className="text-slate-300">
                    PNG is strictly lossless in web browsers and does not support lossy quality reduction. In fact, raw canvas re-encoding of an already-crushed PNG can occasionally result in a slightly larger file (+0.1%). To compress PNG images effectively by 70–90%, select <strong>WebP</strong> as the output format!
                  </p>
                </div>
              </div>
            </div>

            {/* Visual comparison illustration */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-4">
                Real-World Compression Savings
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span>Uncompressed Camera Photo (Original JPG)</span>
                    <span className="text-slate-300">4.8 MB (100%)</span>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 w-full rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span>OptiPress Balanced (75% Quality)</span>
                    <span className="text-emerald-400 font-bold">1.1 MB (-77%)</span>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[23%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1 font-medium">
                    <span>OptiPress Next-Gen WebP (70% Quality)</span>
                    <span className="text-purple-400 font-bold">680 KB (-86%)</span>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 w-[14%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Processed 100% locally on your computer, phone, or tablet. No bandwidth uploaded to servers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
