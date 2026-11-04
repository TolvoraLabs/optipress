import React from 'react';
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  ServerOff,
  EyeOff,
  Globe2,
} from 'lucide-react';

interface PrivacyPageProps {
  onGoToCompressor?: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onGoToCompressor }) => {
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
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            Privacy Policy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            OptiPress Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-3">
            Last Updated: November 2026 • Clear, plain-language explanation of our actual technical implementation
          </p>
        </div>

        {/* Verified Technical Summary Box */}
        <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-6 sm:p-8 mb-10 text-emerald-950">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-emerald-900 mb-1">
                Verified In-Browser Image Processing
              </h2>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                OptiPress is architected as a client-side web application. All image reading, decoding, compression, resizing, and ZIP packaging happen directly in your device's web browser using the HTML5 Canvas API. <strong>Your photos and files are not uploaded to, processed by, or saved on any remote server.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              1. How Image Processing Works on Your Device
            </h2>
            <p className="mb-3">
              To be completely transparent about how OptiPress functions technically:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <strong>Local File Selection:</strong> When you drag and drop or select an image file, the browser allocates memory locally using the standard <code>URL.createObjectURL()</code> method.
              </li>
              <li>
                <strong>Browser Canvas Encoding:</strong> The image is drawn onto an HTML5 <code>&lt;canvas&gt;</code> element in device memory. The browser's built-in encoder then re-encodes the image into your chosen format (JPEG, PNG, or WebP) at the selected quality and dimension scale.
              </li>
              <li>
                <strong>Direct Download:</strong> The resulting compressed file is downloaded directly from browser RAM to your storage using a standard HTML anchor link.
              </li>
              <li>
                <strong>Zero Network Transmission:</strong> The application does not issue any network requests (such as <code>fetch</code>, <code>XMLHttpRequest</code>, or form submissions) containing your image data.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ServerOff className="w-5 h-5 text-purple-600" />
              2. Information We Do Not Collect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">No Image Files or Photos</strong>
                <span className="text-slate-600">We cannot see, access, inspect, or retain any images you compress.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">No User Accounts or Passwords</strong>
                <span className="text-slate-600">OptiPress does not require registration, login, or personal profile data.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">No Image Metadata Storage</strong>
                <span className="text-slate-600">EXIF data (such as camera models or GPS tags) is not stored on any server.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">No Tracking Cookies</strong>
                <span className="text-slate-600">We do not set advertising cookies or track you across other websites.</span>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-indigo-600" />
              3. Web Hosting & Infrastructure Traffic
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              When you load the OptiPress website, your web browser downloads static code assets (HTML, JavaScript, CSS, and icons) from our cloud hosting infrastructure (such as Google Cloud Run / CDN).
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Like virtually all web hosts, the hosting infrastructure may automatically record standard connection logs (such as your device IP address, browser user-agent, and request timestamp) for network delivery, security monitoring, and DDoS defense. These standard connection logs never contain or see the photos you process inside the application.
            </p>
          </div>

          {/* Section 4 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-slate-700" />
              4. Analytics & Third-Party Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">
              OptiPress uses Google Analytics 4 (Measurement ID: G-1BWXZEQ0S0) to understand aggregate visitor counts, page views, and general website performance.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Google Analytics does not collect, receive, or inspect any image files or photos you compress. All image compression logic executes strictly client-side on your local device. We do not integrate third-party advertising networks or external image-processing APIs.
            </p>
          </div>

          {/* Section 5 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Data Retention & Tab Closure</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              When you click "Clear All" or close your browser tab, all temporary object URLs are revoked and your computer's browser releases the allocated memory. Nothing is preserved after you leave the website.
            </p>
          </div>

          {/* Section 6 */}
          <div className="pt-2">
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Policy Updates & Contact</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              If we update this Privacy Policy in the future, revisions will be published on this page with an updated modification date.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              If you have any questions about our privacy practices, you can contact us via our Contact Us page. OptiPress is an independent free web tool provided without corporate telemarketing or phone tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
