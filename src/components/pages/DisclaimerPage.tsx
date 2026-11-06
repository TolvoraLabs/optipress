import React from 'react';
import {
  AlertTriangle,
  FileText,
  ShieldAlert,
  ArrowLeft,
  Cpu,
  ExternalLink,
  Scale,
  RefreshCw,
  Mail,
  Info,
  CheckCircle2,
} from 'lucide-react';

interface DisclaimerPageProps {
  onGoToCompressor?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToPrivacy?: () => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({
  onGoToCompressor,
  onNavigateToContact,
  onNavigateToPrivacy,
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

        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
            Legal Disclosures
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Disclaimer
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-3">
            Last Updated: November 2026 • Plain-language legal and technical disclosures for OptiPress
          </p>
        </div>

        {/* Transparency Callout Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-900 block font-semibold mb-1">
              Summary for OptiPress Visitors:
            </strong>
            OptiPress is a free, web-based image compression and resizing utility. All image encoding and decoding occurs locally in your device&apos;s web browser without transmitting your photos to our servers. The information and tools on this website are provided in good faith on an &quot;as is&quot; basis for general convenience. Please read the sections below for important details on results, user responsibilities, third-party analytics, and limitations of liability.
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section id="general-information">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              1. General Information & Purpose of Utility
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              OptiPress (<a href="https://optipress-free-online-image-compressor.ai.studio/" className="text-blue-600 hover:text-blue-800 underline font-medium">https://optipress-free-online-image-compressor.ai.studio/</a>) is an independent, free online utility developed to help users compress, resize, and convert digital images (including standard formats such as JPG, JPEG, PNG, and WebP).
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              The service is provided free of charge, requires no subscription or user registration, and is intended for personal, educational, and commercial image preparation. The materials, calculators, and tools available on OptiPress are provided for general informational and practical convenience only, and do not constitute professional digital preservation, archival, or legal advice.
            </p>
          </section>

          {/* Section 2 */}
          <section id="no-guarantee-of-results" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              2. No Guarantee of Compression Results or Visual Quality
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              Image compression relies on mathematical lossy and lossless algorithms that produce varying outcomes depending on the source material. Consequently, OptiPress <strong>does not guarantee specific compression ratios, byte reductions, or identical visual fidelity</strong> for any image.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2 mb-3">
              <p>Factors influencing actual results include:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Existing Compression:</strong> Photos already compressed with high-efficiency codecs (such as optimized WebP or low-quality JPEG) may not compress further and could occasionally result in equal or slightly larger file sizes if re-encoded.</li>
                <li><strong>Format Inherent Capabilities:</strong> PNG is a lossless format; saving to PNG preserves pixel values losslessly, which may not significantly reduce photograph file size unless converted to a lossy format such as WebP or JPEG.</li>
                <li><strong>Browser Engine Differences:</strong> Encoding is executed natively by your web browser&apos;s Canvas API engine (e.g., Blink, Gecko, or WebKit), which may produce minor variation across different devices or operating systems.</li>
                <li><strong>User Settings:</strong> The selected quality slider percentage, target pixel dimensions, and format selection directly dictate the resulting size and clarity.</li>
              </ul>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Preview images generated in your browser are provided to help you evaluate results prior to downloading. You are solely responsible for inspecting the output to determine whether it satisfies your requirements for quality, resolution, and dimensions.
            </p>
          </section>

          {/* Section 3 */}
          <section id="user-responsibility" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              3. User Responsibility & Backup Recommendation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              By using OptiPress, you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600 mb-3">
              <li>
                <strong>Authorization & Rights:</strong> You possess the necessary legal ownership, copyright, licenses, or express permission to access, process, resize, and convert any images you introduce into the tool.
              </li>
              <li>
                <strong>Lawful Use:</strong> You will not use OptiPress to process unlawful, defamatory, infringing, or malicious images or materials.
              </li>
              <li>
                <strong>Mandatory Backup Copies:</strong> Because compression—especially lossy compression—permanently discards pixel data, <strong>you must always retain your original master copies</strong>. OptiPress does not store, backup, or retrieve your files under any circumstance.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="image-processing" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-600" />
              4. Image Processing Architecture & Realistic Privacy Boundaries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              We believe in honest, accurate technical disclosures without exaggerated marketing claims:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-3 mb-3">
              <div>
                <strong className="text-slate-900 block font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  What our implementation does:
                </strong>
                <span>
                  All image decoding, Canvas rendering, quality compression, resizing, and ZIP packaging run entirely on your client machine using your web browser&apos;s native HTML5 Canvas API and JavaScript memory. Your image files are never uploaded, sent over a network, or saved to any remote server or cloud database for processing.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 block font-semibold mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  Realistic technical boundaries:
                </strong>
                <span>
                  While your files are not transmitted to OptiPress servers, client-side processing still occurs within your local computing environment. We do not and cannot guarantee security against risks residing on your own device, such as malicious browser extensions, screen-capture tools, spyware, compromised local operating systems, or shared device caches. Users handling sensitive, confidential, or regulated records should ensure their local devices and browsers are adequately secured.
                </span>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="service-availability" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-blue-600" />
              5. Service Availability & Feature Modifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              OptiPress is provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we strive to maintain dependable uptime, we do not warrant that the website will be uninterrupted, error-free, timely, or compatible with every web browser version or hardware platform.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Features, compression formats, supported image types, or design layouts may be updated, adjusted, temporarily suspended, or discontinued at any time for maintenance, security enhancements, or technical refinements without prior notice.
            </p>
          </section>

          {/* Section 6 */}
          <section id="third-party-services" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-indigo-600" />
              6. Third-Party Services & Analytics Disclosure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              To understand aggregated visitor traffic, site usage trends, and improve our interface, OptiPress uses <strong>Google Analytics 4 (GA4)</strong> with Measurement ID <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono">G-1BWXZEQ0S0</code>.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-3">
              <li>Google Analytics collects standard non-identifying telemetry such as aggregate page visits, browser types, and approximate device category.</li>
              <li><strong>Google Analytics does not inspect, access, or receive any image data, file names, or pixel content</strong> processed in your browser.</li>
              <li>You may opt out of Google Analytics tracking at any time using browser content-blocking tools or the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 font-medium">Google Analytics Opt-out Browser Add-on <ExternalLink className="w-3 h-3" /></a>.</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong>Advertising Transparency:</strong> Google AdSense is <strong>not installed</strong> and does not run on OptiPress. Should third-party advertising or sponsored elements ever be introduced in the future, this disclaimer and our Privacy Policy will be promptly updated with full, transparent disclosures before any such technology takes effect.
            </p>
          </section>

          {/* Section 7 */}
          <section id="external-links" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-blue-600" />
              7. External Links & Third-Party Platforms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              OptiPress may contain links to external third-party websites, such as browser vendor documentation, web standards specifications (e.g., W3C / MDN), or Google privacy and opt-out resources.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              These external websites are operated independently by third parties and maintain their own distinct terms of service and privacy practices. OptiPress does not endorse, control, verify, or assume responsibility for the content, security, or privacy policies of any linked third-party resource.
            </p>
          </section>

          {/* Section 8 */}
          <section id="limitation-of-liability" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-slate-800" />
              8. Reasonable Limitation of Liability
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2 mb-3 leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, OptiPress, its operators, creators, and contributors shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Your access to, use of, or inability to access or use OptiPress.</li>
                <li>Any accidental loss of data, file corruption, or image degradation resulting from user-selected compression settings or failure to maintain master backup copies.</li>
                <li>Technical delays, service interruptions, or software bugs.</li>
                <li>Any unauthorized access to your device resulting from browser extensions, third-party software, or hardware vulnerabilities outside our control.</li>
              </ul>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>Statutory Rights Notice:</strong> Some jurisdictions (including consumer protection laws in certain regions) do not permit the total exclusion or limitation of liability for certain types of damages or statutory consumer guarantees. In such jurisdictions, our liability shall be limited strictly to the minimum extent permitted by applicable law, and nothing in this disclaimer is intended to unlawfully limit statutory rights that cannot be excluded by agreement.
            </p>
          </section>

          {/* Section 9 */}
          <section id="changes-to-disclaimer" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-slate-800" />
              9. Changes & Updates to This Disclaimer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We may review, revise, or update this Disclaimer from time to time to reflect operational, legal, or technical developments. Any updates will be published directly on this page with an updated &quot;Last Updated&quot; revision date at the top. Your continued use of OptiPress after modified terms are posted signifies your acknowledgment and acceptance of the revised Disclaimer.
            </p>
          </section>

          {/* Section 10 */}
          <section id="contact-information" className="pt-2 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              10. Contact Information & Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              If you have any questions, feedback, or inquiries regarding this Disclaimer or our website disclosures, please reach out to us:
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-3">
              <div>
                <strong className="text-slate-900 block mb-0.5">Website:</strong>
                <span className="text-slate-700">OptiPress (Free Online Image Compressor)</span>
              </div>
              <div>
                <strong className="text-slate-900 block mb-0.5">Public Contact Email:</strong>
                <a
                  href="mailto:hello.optipress@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  hello.optipress@gmail.com
                </a>
              </div>
              <div>
                <strong className="text-slate-900 block mb-0.5">Inquiries Handled:</strong>
                <span className="text-slate-600 leading-relaxed block">
                  Contact us at{' '}
                  <a
                    href="mailto:hello.optipress@gmail.com"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    hello.optipress@gmail.com
                  </a>{' '}
                  for privacy enquiries, customer support, feedback, and general business enquiries. We aim to respond as soon as reasonably possible.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 block mb-0.5">Physical / Postal Address:</strong>
                <span className="text-slate-600 leading-relaxed block">
                  OptiPress operates as a free, independent digital web utility without a public physical office or postal reception desk. Where a postal address is requested for correspondence or formal notices, visitors and organizations are requested to contact us directly by email at{' '}
                  <a
                    href="mailto:hello.optipress@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    hello.optipress@gmail.com
                  </a>
                  .
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Back to top & compressor action footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 rotate-90" />
            Back to Top of Disclaimer
          </button>

          <div className="flex items-center gap-3">
            {onNavigateToPrivacy && (
              <button
                type="button"
                onClick={onNavigateToPrivacy}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition cursor-pointer"
              >
                View Privacy Policy
              </button>
            )}

            {onGoToCompressor && (
              <button
                type="button"
                onClick={onGoToCompressor}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition active:scale-95 cursor-pointer"
              >
                <span>Launch Image Compressor</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
