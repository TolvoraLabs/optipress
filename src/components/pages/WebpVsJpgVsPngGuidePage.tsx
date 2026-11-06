import React, { useState } from 'react';
import {
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Zap,
  Sliders,
  Eye,
  ArrowRight,
  ExternalLink,
  FileImage,
  Maximize2,
  ShieldCheck,
  Scale,
  Sparkles,
  Info,
  Clock,
  ChevronDown,
  Layers,
  Palette,
} from 'lucide-react';

interface WebpVsJpgVsPngGuidePageProps {
  onGoToCompressor?: () => void;
  onNavigateToGuides?: () => void;
  onNavigateToContact?: () => void;
}

export const WebpVsJpgVsPngGuidePage: React.FC<WebpVsJpgVsPngGuidePageProps> = ({
  onGoToCompressor,
  onNavigateToGuides,
  onNavigateToContact,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { id: 'what-are-formats', title: '1. What Are JPG, PNG, and WebP?' },
    { id: 'main-differences', title: '2. Main Differences Between the Three Formats' },
    { id: 'quality-and-file-size', title: '3. Image Quality and File Size Differences' },
    { id: 'transparency-support', title: '4. Transparency Support Explained' },
    { id: 'when-to-use-jpg', title: '5. When to Use JPG' },
    { id: 'when-to-use-png', title: '6. When to Use PNG' },
    { id: 'when-to-use-webp', title: '7. When to Use WebP' },
    { id: 'browser-compatibility', title: '8. Browser Compatibility & Practical Considerations' },
    { id: 'convert-with-optipress', title: '9. How to Convert Images Using OptiPress' },
    { id: 'common-mistakes', title: '10. Common Mistakes When Choosing an Image Format' },
    { id: 'frequently-asked-questions', title: '11. Frequently Asked Questions' },
  ];

  const guideFaqs = [
    {
      q: 'Does WebP reduce image quality compared to JPG?',
      a: 'Not when configured with appropriate quality settings. WebP uses more modern prediction algorithms than the older JPEG standard. This allows it to preserve similar visual detail and edge sharpness with fewer bytes. However, like any lossy codec, setting the quality slider too low (below 50%) will result in visible blurring or smoothing.',
    },
    {
      q: 'Can I convert an image back from WebP to JPG or PNG?',
      a: 'Yes. You can use OptiPress or standard image editing software to convert WebP files back to JPG or PNG at any time. Keep in mind that if an image was previously compressed using lossy WebP, converting it to PNG will not magically restore data that was discarded during the initial lossy pass.',
    },
    {
      q: 'Why do some older photo programs or portals still demand JPG files?',
      a: 'JPEG has been the worldwide standard since 1992. Some older government portals, desktop printing kiosks, and legacy email clients were programmed decades ago and have not been updated to recognize newer modern formats like WebP or AVIF. In those specific scenarios, exporting as standard JPG remains the safest choice.',
    },
    {
      q: 'Is PNG always larger than JPG?',
      a: 'For photographs and complex real-world scenes with millions of color gradients, PNG files are almost always substantially larger than JPG because PNG stores all pixel data losslessly. However, for simple graphics, computer screenshots with few colors, and line diagrams, a well-optimized PNG can occasionally be smaller and significantly sharper than a JPG.',
    },
    {
      q: 'How does choosing the right image format affect my website’s Google ranking?',
      a: 'Image format choice directly influences total page weight and load speed. Faster pages achieve superior Core Web Vitals scores—specifically Largest Contentful Paint (LCP). By using modern formats like WebP to deliver lightweight assets without visual degradation, your pages render faster on mobile devices, improving user experience and SEO performance.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
          {onGoToCompressor && (
            <button
              type="button"
              onClick={onGoToCompressor}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Home
            </button>
          )}
          <span>/</span>
          {onNavigateToGuides && (
            <button
              type="button"
              onClick={onNavigateToGuides}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Guides &amp; Resources
            </button>
          )}
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
            WebP vs JPG vs PNG Comparison
          </span>
        </nav>

        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-200 flex items-center gap-1.5">
              <FileImage className="w-3.5 h-3.5 text-indigo-700" />
              Format Comparison Guide
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 7 min read
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500">Updated November 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            WebP vs JPG vs PNG: Which Image Format Should You Choose?
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Choosing the right image format is one of the easiest ways to speed up your website without sacrificing visual appeal. Here is an honest, beginner-friendly guide comparing WebP, JPG, and PNG with clear recommendations for blogs, businesses, and online stores.
          </p>

          {/* Quick Internal CTA banner */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Want to convert or compress images between WebP, JPG, and PNG? <strong>OptiPress</strong> converts formats directly inside your browser.
              </span>
            </div>
            {onGoToCompressor && (
              <button
                type="button"
                onClick={onGoToCompressor}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shrink-0 transition cursor-pointer"
              >
                Open Compressor
              </button>
            )}
          </div>
        </div>

        {/* Article Body Container */}
        <article className="border border-slate-200 rounded-3xl p-6 sm:p-10 bg-white shadow-xs">
          {/* Table of Contents */}
          <nav aria-label="Table of contents" className="mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToAnchor(item.id)}
                  className="text-left text-slate-600 hover:text-blue-600 hover:underline transition py-1 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Article Sections */}
          <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Section 1 */}
            <section id="what-are-formats" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                1. What Are JPG, PNG, and WebP?
              </h2>
              <p className="mb-3">
                Whenever you save or upload an image, it is stored in a specific file format. Each format uses different math to encode pixel colors, balance compression, and manage transparency:
              </p>
              <div className="space-y-3 my-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    JPG (JPEG – Joint Photographic Experts Group)
                  </h3>
                  <p className="text-slate-600">
                    Created in 1992, JPG is the most recognized image format on earth. It was engineered specifically for continuous-tone photographs and complex scenes with millions of smooth color transitions. JPG achieves small file sizes by discarding subtle color data that human eyes rarely notice (lossy compression).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    PNG (Portable Network Graphics)
                  </h3>
                  <p className="text-slate-600">
                    Released in 1996 as an open replacement for GIF, PNG is a lossless format. It preserves every single pixel value exactly as created and supports an alpha channel for smooth, transparent backgrounds. Because it never discards image data, PNG files are sharp but can become very heavy when storing detailed photos.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                    WebP (Web Picture Format)
                  </h3>
                  <p className="text-slate-600">
                    Developed by Google in 2010 specifically for modern web performance, WebP is a hybrid format. It supports both lossy and lossless compression, alpha transparency, and animation in a single modern container. It was created to deliver the photographic efficiency of JPG and the transparency of PNG while utilizing modern predictive compression techniques.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="main-differences" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                2. Main Differences Between the Three Formats
              </h2>
              <p className="mb-4">
                To understand which format fits your project, here is an objective side-by-side comparison of their core features:
              </p>

              {/* Comprehensive Comparison Table */}
              <div className="overflow-x-auto mb-5 border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                      <th className="p-3.5 font-bold">Feature</th>
                      <th className="p-3.5 font-bold">JPG / JPEG</th>
                      <th className="p-3.5 font-bold">PNG</th>
                      <th className="p-3.5 font-bold">WebP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Compression Type</td>
                      <td className="p-3.5">Lossy</td>
                      <td className="p-3.5">Lossless</td>
                      <td className="p-3.5 font-semibold text-indigo-700">Lossy &amp; Lossless</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Transparency Support</td>
                      <td className="p-3.5 text-slate-400">No (solid fill)</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Yes (Alpha channel)</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Yes (In lossy &amp; lossless)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Animation Support</td>
                      <td className="p-3.5 text-slate-400">No</td>
                      <td className="p-3.5 text-slate-400">No (APNG is rare)</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Yes (Animated WebP)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Color Palette</td>
                      <td className="p-3.5">24-bit Truecolor (16.7M)</td>
                      <td className="p-3.5">24-bit Truecolor + 8-bit Alpha</td>
                      <td className="p-3.5">24-bit Truecolor + 8-bit Alpha</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">Browser Compatibility</td>
                      <td className="p-3.5 text-emerald-700 font-medium">100% (All devices)</td>
                      <td className="p-3.5 text-emerald-700 font-medium">100% (All devices)</td>
                      <td className="p-3.5 text-emerald-700 font-medium">96%+ (All modern browsers)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 bg-blue-50/30">
                      <td className="p-3.5 font-bold text-blue-900">Best Primary Role</td>
                      <td className="p-3.5">Legacy photos, physical print</td>
                      <td className="p-3.5">Logos, charts, UI with text</td>
                      <td className="p-3.5 font-semibold text-blue-800">Modern websites &amp; mobile web</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="quality-and-file-size" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                3. Image Quality and File Size Differences
              </h2>
              <p className="mb-3">
                Why does the same picture result in completely different file sizes across these formats? The answer lies in how pixel information is analyzed:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-blue-600" />
                    How Image Content Affects Results
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Actual compression ratios depend heavily on the content of the image. A camera photograph with foliage, facial details, or waves contains high-frequency color variations. Lossy encoders (like JPG and lossy WebP) excel here because they simplify barely noticeable nuances. Conversely, flat graphics with solid colors compress far better in PNG.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-purple-600" />
                    Modern Algorithmic Efficiency
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    WebP employs spatial prediction algorithms adapted from video compression (VP8 codec). By predicting neighboring pixel blocks based on adjacent pixels, it encodes image data with fewer bits than the 1990s Discrete Cosine Transform used by JPEG. At matching visual quality, WebP frequently yields smaller files for web delivery.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-700">
                <strong>An Honest Note on Performance:</strong> No format is universally superior in every circumstance. A heavily detailed graphic with text may occasionally look sharper in lossless PNG than in a low-quality WebP. Always use interactive before/after visual tools to evaluate clarity against file size.
              </div>
            </section>

            {/* Section 4 */}
            <section id="transparency-support" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                4. Transparency Support Explained
              </h2>
              <p className="mb-3">
                Transparency allows an image to seamlessly blend over whatever background color, gradient, or pattern is beneath it on a webpage:
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="text-slate-900 block font-semibold mb-1">
                    JPG Has No Transparency:
                  </strong>
                  <p className="text-slate-600">
                    JPG files do not support an alpha transparency channel. If you attempt to save an image with a transparent cutout as a JPG, the transparent areas will automatically be filled with a solid color (typically solid white or black). If your graphic must sit on a colored website background, JPG is not suitable.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="text-slate-900 block font-semibold mb-1">
                    PNG Full Alpha Channel:
                  </strong>
                  <p className="text-slate-600">
                    PNG provides 8-bit alpha transparency (256 levels of opacity). This allows for smooth, semi-transparent drop shadows, glass reflections, and smooth anti-aliased curved edges around logos without jagged fringes.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="text-slate-900 block font-semibold mb-1">
                    WebP Offers Transparent Lossy Compression:
                  </strong>
                  <p className="text-slate-600">
                    WebP supports alpha transparency in <em>both</em> its lossless and lossy modes. This is a game-changer for e-commerce websites: you can save an isolated product photo with a transparent background using lossy WebP compression, achieving file sizes that are often 60%–70% smaller than an uncompressed PNG without sacrificing transparency!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="when-to-use-jpg" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                5. When to Use JPG
              </h2>
              <p className="mb-3">
                While modern formats have overtaken web optimization, JPG remains valuable in specific workflows:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-3">
                <li><strong>Legacy System Compatibility:</strong> Older government upload portals, university document submission portals, and legacy printing kiosks that do not accept WebP.</li>
                <li><strong>Physical Photo Printing:</strong> Professional photo print labs and photo albums calibrated specifically for sRGB JPEG files.</li>
                <li><strong>Camera Master Capture:</strong> Digital cameras and smartphones capturing high-resolution photos before web compression.</li>
                <li><strong>Email Signatures &amp; Newsletters:</strong> Older email clients (such as legacy versions of desktop Outlook) that may not render modern WebP embeds correctly.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="when-to-use-png" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                6. When to Use PNG
              </h2>
              <p className="mb-3">
                PNG is the ideal choice when exact pixel fidelity and sharpness take priority over byte size:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-3">
                <li><strong>Brand Logos &amp; Identity Assets:</strong> Vector exports, high-resolution logos, and brand emblems that require transparent backgrounds.</li>
                <li><strong>Screenshots of Software &amp; Text:</strong> Tutorial screenshots showing code editors, menus, or technical documentation. Lossy compression creates blurry artifacts around letters; PNG keeps text razor-sharp.</li>
                <li><strong>Charts, Graphs &amp; Line Diagrams:</strong> Financial charts, architectural schematics, and vector-style illustrations with sharp geometric boundaries.</li>
                <li><strong>Work-in-Progress Editing:</strong> Saving intermediate graphics that you intend to edit again later, avoiding generational quality loss.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="when-to-use-webp" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                7. When to Use WebP
              </h2>
              <p className="mb-3">
                For online publication and web applications, WebP is now the recommended default choice:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-3">
                <li><strong>Website Hero Banners &amp; Photography:</strong> Large visual assets displayed on homepages where reducing file weight directly speeds up Largest Contentful Paint (LCP).</li>
                <li><strong>Blog &amp; Article Featured Images:</strong> Keeping article pages under 1 MB total weight so international readers on mobile connections can load content smoothly.</li>
                <li><strong>E-Commerce Product Catalogs:</strong> Displaying isolated product images with transparent backgrounds at substantially lower byte weight than PNG.</li>
                <li><strong>Mobile Web Applications:</strong> Conserving mobile bandwidth and battery life for users across devices and slower 4G/3G connections.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="browser-compatibility" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                8. Browser Compatibility &amp; Practical Considerations
              </h2>
              <p className="mb-3">
                A common hesitation among website owners is whether visitors will be able to see WebP images.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2 mb-4">
                <p>
                  <strong>The Current Reality:</strong> WebP is supported natively across more than <strong>96% of global web browsers</strong> according to web standards tracking data.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Google Chrome:</strong> Supported since 2011.</li>
                  <li><strong>Mozilla Firefox:</strong> Supported since 2019 (version 65+).</li>
                  <li><strong>Microsoft Edge:</strong> Supported since 2018 (version 18+).</li>
                  <li><strong>Apple Safari:</strong> Supported on macOS Big Sur (Safari 14+) and iOS 14+ since September 2020.</li>
                </ul>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                For the rare visitor using decade-old operating systems, modern content management systems and web servers can serve WebP using the HTML5 <code>&lt;picture&gt;</code> tag, serving WebP to modern browsers while providing a fallback JPG for legacy clients.
              </p>
            </section>

            {/* Section 9 */}
            <section id="convert-with-optipress" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                9. How to Convert Images Using OptiPress
              </h2>
              <p className="mb-4">
                OptiPress lets you convert between formats right inside your web browser without downloading software or uploading files to unfamiliar servers:
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Add Your Files</strong>
                    <span className="text-slate-600">
                      Drag and drop PNG, JPG, or WebP images into the{' '}
                      {onGoToCompressor ? (
                        <button
                          type="button"
                          onClick={onGoToCompressor}
                          className="text-blue-600 underline font-semibold hover:text-blue-800 cursor-pointer"
                        >
                          OptiPress Compressor
                        </button>
                      ) : (
                        'OptiPress Compressor'
                      )}
                      . You can add individual photos or batches.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Select Your Target Output Format</strong>
                    <span className="text-slate-600">
                      Use the &quot;Output Format&quot; selector to choose <strong>WebP</strong> (for maximum web efficiency), <strong>JPEG</strong>, or <strong>PNG</strong>. You can change formats globally or per individual card.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Adjust Quality &amp; Preview</strong>
                    <span className="text-slate-600">
                      For WebP and JPG, set the slider between 70% and 80%. Click the &quot;Compare&quot; button to slide between original and converted pixels in real time.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    4
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Download Your Optimized Files</strong>
                    <span className="text-slate-600">
                      Download your converted files individually or click &quot;Download All as ZIP&quot; to save all optimized assets at once.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="common-mistakes" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                10. Common Mistakes When Choosing an Image Format
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 1: Uploading Raw Camera Photos as PNG
                    </strong>
                    <span className="text-slate-600">
                      PNG is lossless and preserves all 12 million pixels of a camera photo without compression, resulting in 8 MB to 15 MB files that cripple web page speeds. Always convert camera shots to WebP or JPG for websites.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 2: Saving Text Screenshots as Aggressive Lossy JPG
                    </strong>
                    <span className="text-slate-600">
                      JPEG compression causes ringing and mosquito noise around sharp high-contrast typography. Use PNG or lossless WebP for screenshots with text.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 3: Re-compressing Already Degraded Files
                    </strong>
                    <span className="text-slate-600">
                      Converting a heavily compressed low-quality JPG into WebP will not recover lost details; it simply locks in existing artifacts. Always convert from the highest quality master image available.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 4: Disregarding Display Dimensions
                    </strong>
                    <span className="text-slate-600">
                      Converting a 4000px photo to WebP still leaves 12 million pixels for the browser to decode. Pair format conversion with smart dimension resizing (e.g. 1200px width) for maximum speed.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section id="frequently-asked-questions" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                11. Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {guideFaqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl overflow-hidden transition bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Tutorial Callout to Action */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Ready to convert and optimize your images?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl mb-5 leading-relaxed">
              Convert between WebP, JPG, and PNG with OptiPress. Completely free, no registration, and 100% processed locally inside your web browser.
            </p>
            {onGoToCompressor && (
              <button
                type="button"
                onClick={onGoToCompressor}
                className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition active:scale-95 shadow-xs cursor-pointer"
              >
                Launch OptiPress Compressor
              </button>
            )}
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-3">
            {onNavigateToGuides && (
              <button
                type="button"
                onClick={onNavigateToGuides}
                className="hover:text-blue-600 transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to All Guides
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-blue-600 transition flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 rotate-90" />
              Back to Top
            </button>

            {onNavigateToContact && (
              <button
                type="button"
                onClick={onNavigateToContact}
                className="hover:text-blue-600 transition cursor-pointer"
              >
                Contact Us
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
