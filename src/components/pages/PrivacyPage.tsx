import React from 'react';
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  ServerOff,
  Eye,
  Globe2,
  Cookie,
  FileText,
  AlertCircle,
  ExternalLink,
  HelpCircle,
  Scale,
  RefreshCw,
  Mail,
  Layers,
  Sparkles,
} from 'lucide-react';

interface PrivacyPageProps {
  onGoToCompressor?: () => void;
  onNavigateToContact?: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({
  onGoToCompressor,
  onNavigateToContact,
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              Official Privacy Policy
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              Website: OptiPress
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-2 tracking-tight">
            OptiPress Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs sm:text-sm text-slate-500">
            <span>
              <strong>Effective Date:</strong> November 4, 2026
            </span>
            <span>•</span>
            <span>
              <strong>Last Updated:</strong> November 4, 2026
            </span>
            <span>•</span>
            <span className="text-slate-600">
              <strong>URL:</strong> https://optipress-free-online-image-compressor.ai.studio/
            </span>
          </div>
        </div>

        {/* Verified Technical Summary Box */}
        <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-6 sm:p-8 mb-10 text-emerald-950 shadow-xs">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-emerald-900 mb-1">
                Executive Privacy Summary & Core Principles
              </h2>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed mb-3">
                OptiPress is an independent, free online image compressor and format conversion utility. Our core engineering principle is <strong>client-side data minimization</strong>. We have specifically designed this application so that your files remain private and under your direct control at all times.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-emerald-900 font-medium pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% In-Browser Local Image Compression</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Server Uploads or Image Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No User Accounts, Logins, or Passwords</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Google Analytics 4 Disclosure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Table of Contents for Accessible Navigation */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-sm sm:text-base">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Table of Contents & Quick Navigation</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => scrollToSection('section-1')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              1. Overview & Scope
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-2')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              2. Image Privacy & In-Browser Processing
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-3')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              3. Information We Collect
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-4')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              4. Google Analytics 4 Disclosures
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-5')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              5. Cookies & Browser Storage Technologies
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-6')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              6. Third-Party Infrastructure & Hosting
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-7')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              7. Third-Party Advertising & Future AdSense
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-8')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              8. How We Use Information
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-9')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              9. Data Storage, Retention & Deletion
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-10')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              10. Technical Data Security & Safeguards
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-11')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              11. User Privacy Rights (India, EEA/UK & Global)
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-12')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              12. Children's Privacy
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-13')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              13. International Visitors & Data Transfers
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-14')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              14. External Third-Party Links
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-15')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              15. Policy Changes & Versioning
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('section-16')}
              className="text-left text-slate-600 hover:text-blue-600 transition truncate cursor-pointer"
            >
              16. Contact Information & Privacy Enquiries
            </button>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-24">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <FileText className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Overview & Scope
              </h2>
            </div>
            <p className="mb-3">
              This Privacy Policy applies to the <strong>OptiPress</strong> web application, accessible at{' '}
              <a
                href="https://optipress-free-online-image-compressor.ai.studio/"
                className="text-blue-600 hover:underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://optipress-free-online-image-compressor.ai.studio/
              </a>{' '}
              (the "Website", "Service", "we", "us", or "our").
            </p>
            <p className="mb-3">
              OptiPress provides free, high-speed image compression, image dimension resizing, format conversion (between JPEG, PNG, and WebP), and batch archive packaging. This policy describes what information is collected, how it is used, how your privacy is protected, and the technical mechanisms underlying our client-side software.
            </p>
            <p>
              Please read this document carefully. By accessing or using OptiPress, you acknowledge that you understand and agree to the data handling practices described in this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                <Cpu className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. Image Privacy & In-Browser Technical Architecture
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900 block mb-1">Technical Verification Statement:</strong>
              We have verified the codebase and network calls: all image processing routines in OptiPress execute exclusively inside the user's web browser environment. <strong>At no time are your photos or graphics transmitted, streamed, uploaded, cached, or stored on any server or cloud service.</strong>
            </div>
            <p className="mb-4">
              Here is an exact step-by-step description of how your images are processed:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">1</span>
                  Local File Selection & In-Memory Loading
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When you drag-and-drop or choose files using the file picker, your web browser generates a local, internal object pointer using the standard HTML5 File API (<code>URL.createObjectURL(file)</code>). This memory pointer resides entirely in your computer's or smartphone's volatile memory (RAM).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">2</span>
                  Canvas Decoding & Pixel Resizing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The image bitmap is rendered directly into an invisible HTML5 <code>&lt;canvas&gt;</code> element created by the JavaScript engine in your browser tab. If you adjust dimensions or scale, high-quality interpolation (bicubic/bilinear smoothing) is computed entirely by your device CPU and GPU without communicating with any external API.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">3</span>
                  Encoding & Quality Quantization
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The canvas invokes the browser's native encoding method (<code>canvas.toBlob()</code>). The browser's native codecs (for JPEG, WebP, or PNG) compress the pixel data according to your chosen quality setting (from 1% to 100%).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">4</span>
                  Batch Archiving & Direct Download
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Individual file downloads are triggered directly from browser memory via standard HTML download anchor links. When you select batch download as a ZIP file, our client-side archiving library (JSZip) bundles the files into a <code>.zip</code> archive directly in browser memory and saves it to your local storage drive.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition">
                <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold">5</span>
                  Automatic Memory Deallocation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  When you click the "Clear All" button, remove an image card, or simply close or refresh your browser tab, all temporary object pointers are immediately revoked (<code>URL.revokeObjectURL()</code>), freeing the allocated RAM. No residual copies remain on the web or on any server.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                <Layers className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Information We Collect
              </h2>
            </div>
            <p className="mb-4">
              To provide our service and understand how users interact with OptiPress, certain information is collected or processed across different categories:
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">A. Image Files & Graphical Content (Strictly NOT Collected)</h3>
                <p className="text-slate-600 leading-relaxed">
                  We do not collect, view, copy, log, or store your image files, filenames, or embedded EXIF metadata (such as camera models or GPS tags) on any server. All image handling is strictly local.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">B. Account, Profile & Financial Information (NOT Collected)</h3>
                <p className="text-slate-600 leading-relaxed">
                  OptiPress is 100% free. We do not require registration, login accounts, passwords, credit card numbers, billing addresses, or social logins.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">C. Automatically Collected Analytics & Usage Information</h3>
                <p className="text-slate-600 leading-relaxed">
                  When you visit OptiPress, we use Google Analytics 4 to collect aggregated, pseudonymous usage statistics. This includes pages visited, navigation actions between tabs (e.g., About Us, Privacy Policy, Terms of Use, Contact Us), engagement timestamps, browser type and version, operating system, approximate geographic region (e.g., city and country level derived from truncated IP addresses), screen resolution, and referring website URLs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">D. Web Infrastructure & Server Connection Logs</h3>
                <p className="text-slate-600 leading-relaxed">
                  When your browser requests the static HTML, CSS, JavaScript, and icon files that run the application, our hosting infrastructure automatically logs standard web server connection data. This includes your IP address, browser user-agent string, HTTP request method, requested resource path, and timestamp. These logs are maintained for technical delivery, DDoS protection, and security audits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1">E. Information You Provide Voluntarily (Contact Enquiries)</h3>
                <p className="text-slate-600 leading-relaxed">
                  If you contact us via email or using the form on our Contact Us page, you may provide your name, email address, message subject, and the contents of your message. This information is used exclusively to evaluate, reply to, and resolve your inquiry.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <Eye className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Google Analytics 4 & Measurement Disclosures
              </h2>
            </div>
            <p className="mb-3">
              OptiPress uses <strong>Google Analytics 4 (GA4)</strong>, a web analysis service provided by Google LLC ("Google"), operating under Measurement ID: <code>G-1BWXZEQ0S0</code>.
            </p>

            <div className="space-y-3 mb-4 text-xs sm:text-sm text-slate-600">
              <p>
                <strong>What GA4 Collects:</strong> Google Analytics uses cookies and pseudonymous identifiers to track interactions on our website, such as page views (<code>page_view</code>), scroll depth, session duration, and interface navigation. It also gathers technical parameters including your device model, browser version, preferred language, and approximate geographic location.
              </p>
              <p>
                <strong>IP Masking & Processing:</strong> In Google Analytics 4, IP addresses are used solely to derive approximate geographic location and are automatically masked/anonymized by Google without being logged or stored on persistent storage disks. Google acts as a data processor on our behalf. The information generated about your use of the website is typically transmitted to and stored on Google servers in the United States and other global data centers.
              </p>
              <p>
                <strong>Separation from Image Processing:</strong> Google Analytics code runs in the global web page scope and does not have access to, nor does it inspect, the binary image data loaded into your browser's Canvas element.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm">
              <h3 className="font-bold text-blue-900 mb-2">Google Privacy Resources & Opt-Out Tools:</h3>
              <ul className="space-y-1.5 text-blue-800">
                <li>
                  • <strong>Google's Privacy Policy:</strong>{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-950 inline-flex items-center gap-1"
                  >
                    https://policies.google.com/privacy
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  • <strong>How Google uses information from sites or apps that use its services:</strong>{' '}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-950 inline-flex items-center gap-1"
                  >
                    https://policies.google.com/technologies/partner-sites
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  • <strong>Google Analytics Opt-out Browser Add-on:</strong>{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-950 inline-flex items-center gap-1"
                  >
                    https://tools.google.com/dlpage/gaoptout
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  (Allows you to prevent your data from being used by Google Analytics across any website).
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                <Cookie className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Cookies & Browser Storage Technologies
              </h2>
            </div>
            <p className="mb-3">
              Cookies are small text files placed on your computer or mobile device when you browse websites. They are widely used to make websites function properly, measure performance, and retain user preferences.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 text-slate-800 font-semibold">
                  <tr>
                    <th className="p-3 border-b border-slate-200">Cookie / Storage</th>
                    <th className="p-3 border-b border-slate-200">Provider</th>
                    <th className="p-3 border-b border-slate-200">Purpose</th>
                    <th className="p-3 border-b border-slate-200">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-3 font-mono text-slate-900">_ga</td>
                    <td className="p-3">Google Analytics</td>
                    <td className="p-3">Used to distinguish unique website visitors and calculate visitor sessions</td>
                    <td className="p-3">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-slate-900">_ga_1BWXZEQ0S0</td>
                    <td className="p-3">Google Analytics</td>
                    <td className="p-3">Used to persist session state and correlate interaction hits</td>
                    <td className="p-3">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-slate-900">Browser RAM / Object URLs</td>
                    <td className="p-3">OptiPress (Local)</td>
                    <td className="p-3">Holds image bitmaps in memory for real-time resizing and compression</td>
                    <td className="p-3">Ephemeral (Cleared on tab close or "Clear All")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              <strong>How to Manage Cookies:</strong> You can configure your browser settings to reject cookies, alert you when a cookie is placed, or delete existing cookies. To manage cookies in popular browsers, visit your browser settings under "Privacy & Security" (e.g., Chrome Settings &gt; Privacy & Security &gt; Cookies, Firefox Settings &gt; Privacy & Security, Safari Preferences &gt; Privacy). Note that blocking analytics cookies will not interfere with OptiPress's image compression features, which run purely on local canvas execution.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <Globe2 className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Third-Party Infrastructure & Hosting Providers
              </h2>
            </div>
            <p className="mb-3">
              To reliably deliver the website globally, OptiPress relies on established third-party infrastructure providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600 mb-4">
              <li>
                <strong>Cloud Hosting Infrastructure (Google Cloud / AI Studio):</strong> Delivers static application code (HTML, CSS, JavaScript) and static web icons via content delivery networks (CDNs). Cloud infrastructure hosts process network packets and maintain technical logs for connection reliability.
              </li>
              <li>
                <strong>Google Search Console:</strong> We utilize an HTML ownership verification meta tag (<code>google-site-verification</code>) to monitor site indexing, search visibility, and crawl health. This tag is a non-tracking static identifier in the HTML header.
              </li>
              <li>
                <strong>Client-Side Open Source Libraries:</strong> The website utilizes open-source libraries such as <code>JSZip</code> (for client-side ZIP archive packaging) and <code>Lucide React</code> (for icons). These libraries are bundled with the client application code and run entirely on your device without communicating with remote third-party servers.
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600">
              We do not integrate third-party image processing APIs, cloud storage buckets (such as Amazon S3, Google Cloud Storage, or Cloudinary) for your uploaded files, or facial recognition algorithms.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Third-Party Advertising & Future AdSense Disclosure
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-4">
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                Current Advertising Status: No Ads Displayed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As of the date of this Privacy Policy, <strong>OptiPress does not display advertisements, does not run Google AdSense, and does not partner with any third-party advertising networks.</strong> No advertising cookies, pixel tags, or retargeting scripts are installed on this website.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900">
              <h3 className="font-bold text-amber-950 mb-1">
                Future Advertising & Google AdSense Policy Disclosure:
              </h3>
              <p className="leading-relaxed mb-3">
                To keep OptiPress free for everyone and offset the costs of server hosting and domain maintenance, we may introduce third-party advertising in the future, including <strong>Google AdSense</strong>. If advertising is introduced, the following practices will apply:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-amber-800">
                <li>
                  Third-party vendors, including Google, will use cookies to serve ads based on your prior visits to this website or other websites on the Internet.
                </li>
                <li>
                  Google's use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve ads to you based on your visit to OptiPress and/or other sites on the Internet.
                </li>
                <li>
                  You may opt out of personalized advertising at any time by visiting{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-amber-950 inline-flex items-center gap-1"
                  >
                    Google Ads Settings
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  or by visiting the Network Advertising Initiative opt-out page at{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-amber-950 inline-flex items-center gap-1"
                  >
                    www.aboutads.info
                    <ExternalLink className="w-3 h-3" />
                  </a>.
                </li>
                <li>
                  Even if advertising is enabled in the future, your image files will remain strictly processed in your device's browser and will never be shared with advertisers or ad networks.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-teal-50 text-teal-600">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. How We Use Collected Information
              </h2>
            </div>
            <p className="mb-3">
              We process the limited information we collect strictly for legitimate, transparent purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600 mb-4">
              <li>
                <strong>Maintaining & Improving Service Performance:</strong> To verify that OptiPress runs smoothly across different web browsers (Chrome, Safari, Firefox, Edge) and mobile operating systems (Android, iOS).
              </li>
              <li>
                <strong>Monitoring System Health & Security:</strong> To detect, prevent, and respond to automated abuse, distributed denial-of-service (DDoS) attacks, and infrastructure malfunctions.
              </li>
              <li>
                <strong>Understanding Visitor Trends:</strong> To examine aggregated metrics such as which features (e.g. WebP conversion, batch compression, dimension resizing) are most frequently used, helping guide future engineering updates.
              </li>
              <li>
                <strong>Responding to User Inquiries:</strong> To read and reply to feedback, bug reports, and customer service requests submitted voluntarily to us.
              </li>
            </ul>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
              <strong>Explicit Commitment:</strong> We do not sell, rent, lease, monetize, or trade any personal information, IP logs, or visitor data with data brokers or marketing agencies.
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                <ServerOff className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Data Storage, Retention & Deletion
              </h2>
            </div>
            <p className="mb-3">
              Our retention standards vary depending on the category of data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <strong>Image Content:</strong> Zero retention on servers. Image files and object URLs exist only in your browser tab's volatile RAM while the tab is active. As soon as you navigate away, press refresh, close the tab, or click "Clear All", all image references are destroyed.
              </li>
              <li>
                <strong>Google Analytics Telemetry:</strong> Aggregated analytics data is retained in accordance with Google Analytics 4 retention configurations (typically 2 to 14 months for user- and event-level data, while anonymized aggregate trend reports may be retained longer).
              </li>
              <li>
                <strong>Hosting Connection Logs:</strong> Standard web server connection logs are maintained temporarily by cloud hosting systems for security and diagnostic purposes, typically overwritten on a rolling 30- to 90-day retention schedule.
              </li>
              <li>
                <strong>Contact Communications:</strong> Inquiries sent to our email or contact form are retained only for as long as necessary to address your request, resolve technical issues, or maintain a record of resolved support inquiries.
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                <Lock className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                10. Technical Data Security & Safeguards
              </h2>
            </div>
            <p className="mb-3">
              We take the security of your interactions with OptiPress seriously and implement technical and organizational measures:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <strong className="text-slate-900 block mb-1">HTTPS Encryption in Transit</strong>
                <span className="text-slate-600">
                  All traffic between your browser and our website is protected using industry-standard Transport Layer Security (TLS/HTTPS), preventing eavesdropping and tampering.
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <strong className="text-slate-900 block mb-1">Architectural Isolation</strong>
                <span className="text-slate-600">
                  By intentionally avoiding server-side image processing, there is no centralized database or cloud file repository that could be vulnerable to data leaks or cyber breaches.
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <strong className="text-slate-900 block mb-1">Browser Sandbox Protection</strong>
                <span className="text-slate-600">
                  OptiPress runs inside your browser's security sandbox, preventing scripts from reading any files on your hard drive other than those you explicitly choose to compress.
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <strong className="text-slate-900 block mb-1">No Third-Party Access</strong>
                <span className="text-slate-600">
                  We do not grant any third party access to private user files or system memory buffers.
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              <em>Note:</em> While we implement these industry-standard precautions, no system connected to the internet can guarantee absolute security. You are encouraged to maintain updated browser software and operating system security patches on your devices.
            </p>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <Scale className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11. User Privacy Rights (India, EEA/UK & International)
              </h2>
            </div>
            <p className="mb-3">
              Depending on your location and applicable data protection legislation, you may have specific privacy rights regarding personal information. Because OptiPress does not require user accounts and does not store uploaded images on servers, we hold no personal profile database. However, for any personal data processed (such as analytics or contact correspondence), your rights are outlined below:
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* India */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1">
                  A. For Visitors Located in India (DPDPA 2023 & Information Technology Act)
                </h3>
                <p className="text-slate-600 mb-2 leading-relaxed">
                  Under the Digital Personal Data Protection Act, 2023 (DPDPA) and the Information Technology Act, 2000 along with associated rules:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>Right to Information:</strong> You have the right to obtain a summary of personal data processed and the processing activities undertaken.
                  </li>
                  <li>
                    <strong>Right to Correction & Erasure:</strong> You may request the correction of inaccurate data or the erasure of personal information that is no longer necessary for the purpose it was collected.
                  </li>
                  <li>
                    <strong>Grievance Redressal:</strong> You have the right to register a grievance with our designated Privacy Representative regarding data processing practices. If unresolved, you may have recourse to the Data Protection Board of India.
                  </li>
                  <li>
                    <strong>Right to Nominate:</strong> You may nominate another individual to exercise your rights in the event of incapacity.
                  </li>
                </ul>
              </div>

              {/* EEA & UK */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1">
                  B. For Visitors in the European Economic Area (EEA) & United Kingdom (UK) (GDPR / UK GDPR)
                </h3>
                <p className="text-slate-600 mb-2 leading-relaxed">
                  If you are located in the EEA or the UK, you possess rights under the General Data Protection Regulation (GDPR) and UK GDPR:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>
                    <strong>Legal Basis for Processing:</strong> We process aggregated analytics and server connection logs on the basis of <em>Legitimate Interests</em> (Article 6(1)(f) GDPR) to deliver, maintain, monitor, and secure our website against abuse.
                  </li>
                  <li>
                    <strong>Rights Available:</strong> You have the right of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and the right to object to processing (Art. 21).
                  </li>
                  <li>
                    <strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your national Data Protection Authority (in the EU) or the Information Commissioner's Office (ICO in the UK at <code>https://ico.org.uk</code>) if you believe our data processing violates applicable law.
                  </li>
                </ul>
              </div>

              {/* United States & Global */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-1">
                  C. For Visitors in California and Other International Jurisdictions
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Under state privacy frameworks such as the California Consumer Privacy Act (CCPA/CPRA) and similar laws: we do not sell or share your personal information. You have the right to request disclosure of categories of personal information collected, the right to request deletion of personal information, and the right to non-discrimination for exercising your privacy rights.
                </p>
              </div>

              {/* How to Exercise */}
              <div className="p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-950">
                <h3 className="font-bold mb-1">How to Exercise Your Privacy Rights:</h3>
                <p className="leading-relaxed mb-2">
                  To submit a privacy inquiry or exercise your rights, please reach out to us using the contact details in Section 16 or via our{' '}
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    className="underline font-semibold hover:text-blue-700 cursor-pointer"
                  >
                    Contact Us page
                  </button>
                  .
                </p>
                <p className="text-xs text-blue-800">
                  Because we do not store customer databases or uploaded image files on servers, we cannot produce or delete copies of images you compressed. For browser cookies, you can immediately delete or block them using your browser settings or opt-out tools at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-pink-50 text-pink-600">
                <HelpCircle className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                12. Children's Privacy
              </h2>
            </div>
            <p className="mb-3">
              OptiPress is a general audience online image utility and is not structured or intended to attract children under the age of 13 (or under 16 where required by local regulations, such as in the EEA and UK).
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              We do not knowingly collect, request, or solicit personal information from children. If you are a parent or guardian and believe that your child has provided personal information to us via email or our contact form, please notify us immediately at{' '}
              <a
                href="mailto:hello.optipress@gmail.com"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                hello.optipress@gmail.com
              </a>
              , and we will promptly take steps to delete such information from our records.
            </p>
          </section>

          {/* Section 13 */}
          <section id="section-13" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <Globe2 className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                13. International Visitors & Data Transfers
              </h2>
            </div>
            <p className="mb-3">
              OptiPress is accessible worldwide, including visitors across India, North America, Europe, Asia, and other regions.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              While image processing is 100% localized to your device's web browser, static website hosting and Google Analytics 4 infrastructure may be hosted in and operated from the United States or other global data center regions.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you access OptiPress from regions with comprehensive data protection laws that differ from those of hosting locations, please be aware that non-image web requests and analytics telemetry may be transferred to, stored, and processed in jurisdictions outside your country. By accessing the website, you understand this data transfer.
            </p>
          </section>

          {/* Section 14 */}
          <section id="section-14" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                <ExternalLink className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                14. External Third-Party Links
              </h2>
            </div>
            <p className="mb-3">
              Our website may contain links to external third-party websites or services (for example, Google's privacy portal, web standards documentation, or analytics opt-out pages).
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Please note that we have no control over the privacy practices, content, or policies of any external websites. Once you leave OptiPress by following a third-party link, we strongly advise you to review the privacy policy of each external site you visit.
            </p>
          </section>

          {/* Section 15 */}
          <section id="section-15" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <RefreshCw className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                15. Policy Changes & Versioning
              </h2>
            </div>
            <p className="mb-3">
              We may review and update this Privacy Policy from time to time to reflect modifications in our software architecture, new features, evolving legal obligations, or operational requirements.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              When updates are made, we will revise the <strong>"Last Updated"</strong> and <strong>"Effective Date"</strong> indicators at the top of this page. Any changes will become effective immediately upon being published on this page.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We encourage visitors to check this page periodically to stay informed about how we safeguard user privacy. Your continued use of OptiPress after any amendments indicates your acknowledgement of the updated Privacy Policy.
            </p>
          </section>

          {/* Section 16 */}
          <section id="section-16" className="scroll-mt-24 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <Mail className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                16. Contact Information & Privacy Enquiries
              </h2>
            </div>
            <p className="mb-4">
              If you have any questions, suggestions, feedback, or requests regarding this Privacy Policy or our technical privacy practices, please contact us using the details below:
            </p>

            {/* Official Contact Information */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900 block mb-0.5">Website Name:</strong>
                <span className="text-slate-700">OptiPress (Free Online Image Compressor)</span>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Project Operator:</strong>
                <span className="text-slate-700 font-medium">OptiPress Team</span>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Official Contact Email:</strong>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <a
                    href="mailto:hello.optipress@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-semibold underline inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    hello.optipress@gmail.com
                  </a>
                </div>
                <p className="mt-1 text-slate-500 text-xs">
                  Monitored for privacy enquiries, data subject rights (GDPR/DPDP/CCPA), customer support, feedback, and general business enquiries.
                </p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Physical / Postal Address:</strong>
                <span className="text-slate-700 leading-relaxed block">
                  OptiPress is an independent, client-side web utility operated digitally without a public physical office or postal reception desk. Where a postal address is requested for correspondence or formal notices, visitors and organizations are requested to contact us directly by email at{' '}
                  <a
                    href="mailto:hello.optipress@gmail.com"
                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    hello.optipress@gmail.com
                  </a>
                  . All electronic messages are received securely and addressed promptly.
                </span>
              </div>

              <div>
                <strong className="text-slate-900 block mb-0.5">Online Contact Form:</strong>
                <span className="text-slate-700">
                  You can also submit an inquiry directly through our{' '}
                  <button
                    type="button"
                    onClick={onNavigateToContact}
                    className="text-blue-600 underline font-semibold hover:text-blue-800 cursor-pointer"
                  >
                    Interactive Contact Us Form
                  </button>
                  .
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              We endeavor to review and reply to legitimate privacy inquiries within a reasonable timeframe (typically within 30 days or as required under applicable local data privacy laws).
            </p>
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
            Back to Top of Privacy Policy
          </button>

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
  );
};
