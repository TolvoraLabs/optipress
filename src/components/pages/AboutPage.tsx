import React from 'react';
import { ShieldCheck, Zap, Globe, Heart, Cpu, Sparkles, Check } from 'lucide-react';

interface AboutPageProps {
  onGoToCompressor: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onGoToCompressor }) => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            About OptiPress
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Compress Smarter. Save More.
          </h1>
          <p className="text-slate-600 text-base sm:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
            OptiPress was born from a simple belief: image compression on the modern web should be fast, effortless, and uncompromisingly private.
          </p>
        </div>

        {/* Story & Philosophy */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-base leading-relaxed">
          <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              The Browser-First Privacy Revolution
            </h2>
            <p>
              Traditional image compression websites ask you to upload your sensitive photos, identity documents, and personal creations to remote servers in unknown data centers. Many of these services harvest data, log IP addresses, or require expensive subscription tiers just to compress a few megabytes.
            </p>
            <p className="mt-3">
              <strong>OptiPress takes an entirely different approach:</strong> By harnessing standard browser HTML5 Canvas, modern WebAssembly, and high-performance WebP encoders right inside your browser, all image optimization happens 100% locally on your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Built for the Global Web & India</h3>
              <p className="text-sm text-slate-600">
                In many parts of the world, including India, high cellular data costs and spotty mobile connections can make uploading 20 MB files frustrating. OptiPress uses zero upload bandwidth, helping you shrink images before sharing over WhatsApp, job portals, or government forms.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Sustainable & Eco-Friendly</h3>
              <p className="text-sm text-slate-600">
                By eliminating energy-intensive server farms and round-trip data transfers, in-browser compression dramatically lowers the carbon footprint of web media processing.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">Our Guiding Commitments</h2>
          <ul className="space-y-3">
            {[
              'Zero image uploads: Your files never touch a cloud server.',
              'No account, no signups, no email spam, no paywalls.',
              'No watermarks or artificial limits on your downloads.',
              'Batch processing with one-click ZIP packaging.',
              'Supports JPG, PNG, and modern high-compression WebP.',
            ].map((commitment, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-emerald-100 text-emerald-600 mt-1">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>{commitment}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA to Compressor */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Compress Your Images?</h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Join thousands of designers, photographers, developers, and everyday users who optimize photos with OptiPress.
          </p>
          <button
            type="button"
            onClick={onGoToCompressor}
            className="px-8 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition shadow-lg hover:scale-105 active:scale-95"
          >
            Launch Free Compressor Now
          </button>
        </div>
      </div>
    </div>
  );
};
