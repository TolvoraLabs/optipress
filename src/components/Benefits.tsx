import React from 'react';
import {
  ShieldCheck,
  Zap,
  Globe2,
  Lock,
  Layers,
  Sparkles,
  Smartphone,
  CheckCircle,
  FileCheck,
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '100% Private & Secure',
      desc: 'Your photos never leave your device. All compression takes place within your browser via Canvas API, guaranteeing total privacy for sensitive documents, personal photos, and corporate assets.',
      badge: 'Zero Uploads',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Lightning Fast Processing',
      desc: 'Skip waiting in line for remote servers to download, process, and re-upload your files. With browser-powered execution, your images compress in milliseconds.',
      badge: 'Zero Latency',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-blue-600" />,
      title: 'Global & Mobile Data Saver',
      desc: 'Engineered to work seamlessly worldwide, including India and regions with varying network bandwidth. Reduces data consumption when sharing photos over WhatsApp, email, or uploading to portals.',
      badge: 'Saves Bandwidth',
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      title: 'Batch Compression & ZIP Download',
      desc: 'Compress dozens of images simultaneously. Download them individually or pack the entire set into an organized ZIP archive with a single click.',
      badge: 'Bulk Ready',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: 'Responsive & Mobile Friendly',
      desc: 'Optimized touch interface works smoothly on smartphones, tablets, Chromebooks, Windows, and Mac laptops. No app installation required.',
      badge: 'Cross-Device',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-teal-600" />,
      title: 'No Watermarks or Hidden Caps',
      desc: 'Completely free for personal and commercial usage. No signup forms, no email collection, no daily limits, and no ugly watermarks stamped onto your images.',
      badge: 'Always Free',
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-700 border border-purple-200">
            Why Choose OptiPress
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Built for Privacy, Speed, and Simplicity
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Traditional online compressors upload your private images to mysterious cloud servers. OptiPress keeps everything on your computer or phone.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition">
                    {b.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {b.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle className="w-4 h-4" />
                <span>Verified browser-native feature</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
