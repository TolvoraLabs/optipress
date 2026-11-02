import React from 'react';
import {
  Scale,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ShieldCheck,
} from 'lucide-react';

interface TermsPageProps {
  onGoToCompressor?: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onGoToCompressor }) => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        {onGoToCompressor && (
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
        )}

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200">
            Terms of Use
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-3">
            Last Updated: November 2026 • Plain-language terms for using OptiPress
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              1. Acceptance of Terms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              By accessing or using OptiPress, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              2. Description of Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              OptiPress is a free web-based utility that compresses and resizes digital images (including JPG, JPEG, PNG, and WebP files) directly inside the user's web browser using client-side Web APIs.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              The service requires no account registration, no login credentials, and no subscription fees. We do not place watermarks or brand markings onto your compressed output files.
            </p>
          </div>

          {/* Section 3 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              3. Content Ownership & Privacy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              <strong>You retain 100% full ownership and intellectual property rights</strong> to all images you optimize using OptiPress.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Because all image processing happens in your device's browser memory without uploading files to our servers, OptiPress does not claim, store, license, or publish any part of your content.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-indigo-600" />
              4. Permitted Personal & Commercial Use
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              You are free to use OptiPress for personal, non-profit, educational, and commercial purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>Compressing images for personal social media, resumes, or family storage.</li>
              <li>Optimizing graphic assets for client websites, applications, and e-commerce stores.</li>
              <li>Preparing photos for school, job application, or government document portals.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. User Responsibilities</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              When using OptiPress, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
              <li>You possess the legal right or appropriate permission to handle and compress the images you introduce.</li>
              <li>You will not use the service to process unlawful or malicious material.</li>
              <li>You will not attempt to disrupt or impair the availability of the website delivery infrastructure.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              6. Disclaimer of Warranties & Backup Recommendation
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              OptiPress is provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied. While we strive for high visual fidelity and dependable compression, we cannot guarantee that every image will compress to a specific target byte size. <strong>We strongly advise users to always keep backup copies of their original master photos.</strong>
            </div>
          </div>

          {/* Section 7 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Limitation of Liability</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              To the maximum extent permitted by applicable law, the creators and operators of OptiPress shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use the service.
            </p>
          </div>

          {/* Section 8 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to Terms</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We may update these terms from time to time. Continued use of the website following any posted modifications constitutes your acceptance of the revised terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
