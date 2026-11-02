import React from 'react';
import {
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';

interface AboutPageProps {
  onGoToCompressor: () => void;
  onNavigateToContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onGoToCompressor, onNavigateToContact }) => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onGoToCompressor}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Image Compressor
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            About Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            About OptiPress
          </h1>
          <p className="text-blue-600 font-semibold text-base mt-2">
            Compress Smarter. Save More.
          </p>
          <p className="text-slate-600 text-base sm:text-xl mt-3 max-w-2xl mx-auto leading-relaxed">
            OptiPress is a free online image compressor designed to make reducing file sizes fast, simple, and private for everyone around the world.
          </p>
        </div>

        {/* Mission & Purpose */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div className="bg-slate-50/90 rounded-2xl p-6 sm:p-8 border border-slate-200/90">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-blue-600" />
              Our Mission
            </h2>
            <p className="mb-3">
              Images make up the majority of web traffic, email attachments, job applications, and mobile messages. Yet many online tools require users to upload their personal photos to unfamiliar cloud servers or pay for subscriptions just to resize a few pictures.
            </p>
            <p>
              OptiPress was created with a clear goal: provide a modern, completely free, and dependable image compression tool that runs entirely inside your web browser. No account registration, no waiting in server queues, and no hidden fees.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Private by Design</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Image processing is handled locally by your browser's Canvas API. Your pictures stay on your computer or phone and are not uploaded to our servers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Live & Instant</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Adjusting the quality slider or scale immediately recalculates file sizes without delay, giving you instant visual feedback before downloading.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Global & Lightweight</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Engineered to run efficiently on low-bandwidth connections, budget smartphones, and computers worldwide, helping users in India and globally save mobile data.
              </p>
            </div>
          </div>

          {/* Who is OptiPress for */}
          <div className="pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Who Uses OptiPress?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-800 block">Job Seekers & Students</strong>
                  <span>Compress resumes, ID cards, certificates, and photos to meet government and university portal upload limits.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-800 block">Web Developers & Designers</strong>
                  <span>Optimize website graphics and convert legacy JPG or PNG assets to modern WebP format for faster page speed scores.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-800 block">Photographers & Creators</strong>
                  <span>Batch resize high-resolution camera shots for quick sharing on social media, portfolios, or messaging apps.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-800 block">Everyday Users</strong>
                  <span>Free up phone storage and save mobile bandwidth when emailing or backing up family albums.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Highlights */}
          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/70 text-xs sm:text-sm">
            <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              Technology Overview
            </h3>
            <p className="text-slate-700">
              OptiPress leverages modern web standards including the HTML5 Canvas API, native WebP and JPEG encoders, OffscreenCanvas, and JSZip for client-side archive packaging. Because all computations happen locally, the tool requires zero external processing infrastructure.
            </p>
          </div>
        </div>

        {/* Call to action card */}
        <div className="mt-14 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Start Compressing Today</h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Free forever, no watermarks, and no sign-up required.
          </p>
          <button
            type="button"
            onClick={onGoToCompressor}
            className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-50 transition shadow-md active:scale-95"
          >
            Open Image Compressor
          </button>
        </div>
      </div>
    </div>
  );
};
