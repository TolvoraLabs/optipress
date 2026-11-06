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
} from 'lucide-react';

interface CompressImagesGuidePageProps {
  onGoToCompressor?: () => void;
  onNavigateToGuides?: () => void;
  onNavigateToContact?: () => void;
}

export const CompressImagesGuidePage: React.FC<CompressImagesGuidePageProps> = ({
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
    { id: 'why-file-size-matters', title: '1. Why Image File Size Matters for Websites' },
    { id: 'jpg-vs-png-vs-webp', title: '2. The Difference Between JPG, PNG, and WebP' },
    { id: 'how-compression-works', title: '3. How Image Compression Works in Simple Terms' },
    { id: 'how-to-use-optipress', title: '4. How to Use OptiPress Step by Step' },
    { id: 'choosing-quality-setting', title: '5. How to Choose a Suitable Quality Setting' },
    { id: 'resizing-vs-compression', title: '6. When to Resize an Image Instead of Only Compressing' },
    { id: 'comparing-images', title: '7. How to Compare Original and Compressed Images' },
    { id: 'common-mistakes', title: '8. Common Mistakes That Reduce Image Quality' },
    { id: 'format-selection-guide', title: '9. Choosing the Right Format for Different Images' },
    { id: 'frequently-asked-questions', title: '10. Frequently Asked Questions' },
  ];

  const guideFaqs = [
    {
      q: 'Can lossy image compression be reversed to restore original quality?',
      a: 'No. When lossy compression (such as JPEG or lossy WebP) is applied, discarded fine pixel color data is permanently removed from the file. This is why you should always retain master backup copies of your uncompressed photos and only use OptiPress on copies destined for web publication or distribution.',
    },
    {
      q: 'What is the difference between image resolution (DPI/PPI) and pixel dimensions?',
      a: 'DPI (Dots Per Inch) and PPI (Pixels Per Inch) are metadata tags intended for physical printing on paper. Web browsers completely ignore DPI and render images strictly according to their pixel dimensions (width × height in pixels). An image measuring 1200×800 pixels displays identically on a screen whether tagged as 72 DPI or 300 DPI. For websites, focus on pixel dimensions and byte size rather than print DPI.',
    },
    {
      q: 'Will compressing my images hurt my website’s Google search rankings?',
      a: 'On the contrary, optimizing image byte sizes significantly improves Google search performance. Fast-loading pages achieve better Core Web Vitals scores (specifically Largest Contentful Paint, or LCP), lower mobile bounce rates, and improved mobile crawl efficiency. As long as images remain visually sharp and maintain appropriate descriptive alt attributes, compression directly benefits SEO.',
    },
    {
      q: 'Is WebP supported on all modern web browsers and mobile devices?',
      a: 'Yes. Modern web browsers including Google Chrome, Apple Safari (version 14 and newer on macOS and iOS), Mozilla Firefox, Microsoft Edge, and Opera offer native WebP support. WebP is supported across more than 96% of global web browsers according to web standards data.',
    },
    {
      q: 'Why didn’t my PNG file shrink very much when keeping PNG as the output format?',
      a: 'PNG is an inherently lossless compression format designed to preserve exact pixel data, line art, and transparency. Re-encoding a photo as PNG in a browser preserves every pixel value without discarding data. To drastically reduce photograph file sizes while maintaining sharp quality, convert the image to WebP or JPEG.',
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
            How to Compress Images Without Blur
          </span>
        </nav>

        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              In-Depth Tutorial
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 8 min read
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500">Updated November 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How to Compress Images for the Web Without Making Them Look Blurry
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A comprehensive, actionable walkthrough on balancing file size reduction with visual clarity, choosing between JPG, PNG, and WebP, avoiding the megapixel trap, and testing results before publishing.
          </p>

          {/* Quick Internal CTA banner */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Want to follow along with your own pictures? <strong>OptiPress</strong> runs 100% locally in your browser with zero server uploads.
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
            <section id="why-file-size-matters" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                1. Why Image File Size Matters for Websites
              </h2>
              <p className="mb-3">
                Images represent more than 50% of the total byte weight of average web pages today. High-resolution smartphone cameras and modern DSLR lenses capture incredible detail, but they also produce file sizes ranging from 3 MB to 15 MB per picture.
              </p>
              <p className="mb-3">
                When these uncompressed files are uploaded directly to a website, several critical issues occur:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong>Slower Page Loading:</strong> Every megabyte requires network round trips. On mobile connections (4G, 3G, or congested public Wi-Fi), downloading multi-megabyte pictures can take several seconds, causing frustrated visitors to leave before reading your content.
                </li>
                <li>
                  <strong>Core Web Vitals Impact:</strong> Search engines evaluate user experience metrics, including <em>Largest Contentful Paint (LCP)</em>. Because hero images and featured banners are often the largest visual elements on screen, slow-loading images directly delay LCP scores.
                </li>
                <li>
                  <strong>Mobile Data Costs for Global Visitors:</strong> International visitors and mobile data users frequently access the web on metered plans. Lightweight images conserve bandwidth and respect users’ data budgets.
                </li>
                <li>
                  <strong>Server &amp; Cloud Bandwidth Expenses:</strong> Serving 500 KB images instead of 5 MB images cuts your web hosting data transfer by 90%, preventing bandwidth overages.
                </li>
              </ul>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700">
                <strong>Key Takeaway:</strong> Optimizing images is not about sacrificing visual aesthetics. It is about removing redundant data so your website feels fast, responsive, and professional across every device.
              </div>
            </section>

            {/* Section 2 */}
            <section id="jpg-vs-png-vs-webp" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                2. The Difference Between JPG, PNG, and WebP
              </h2>
              <p className="mb-4">
                Selecting the right format is the foundation of clean, crisp compression. The table below outlines how the three major web image formats compare:
              </p>

              {/* Responsive Format Comparison Table */}
              <div className="overflow-x-auto mb-5 border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                      <th className="p-3.5 font-bold">Format</th>
                      <th className="p-3.5 font-bold">Compression Type</th>
                      <th className="p-3.5 font-bold">Transparency Support</th>
                      <th className="p-3.5 font-bold">Best Suited For</th>
                      <th className="p-3.5 font-bold">Browser Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">JPG / JPEG</td>
                      <td className="p-3.5">Lossy</td>
                      <td className="p-3.5 text-slate-400">No (solid background)</td>
                      <td className="p-3.5">Photographs, complex gradients, banners</td>
                      <td className="p-3.5 text-emerald-700 font-medium">100% (Universal)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="p-3.5 font-bold text-slate-900">PNG</td>
                      <td className="p-3.5">Lossless</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Yes (Alpha channel)</td>
                      <td className="p-3.5">Logos, icons, screenshots, charts</td>
                      <td className="p-3.5 text-emerald-700 font-medium">100% (Universal)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 bg-blue-50/30">
                      <td className="p-3.5 font-bold text-blue-900">WebP (Modern)</td>
                      <td className="p-3.5 font-semibold text-blue-800">Lossy &amp; Lossless</td>
                      <td className="p-3.5 text-emerald-700 font-medium">Yes (Both modes)</td>
                      <td className="p-3.5">All modern web graphics, photos, UI</td>
                      <td className="p-3.5 text-emerald-700 font-medium">96%+ (All modern browsers)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                For in-depth format specifications, see the authoritative documentation provided by{' '}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 font-medium"
                >
                  MDN Web Docs: Web Image Formats <ExternalLink className="w-3 h-3" />
                </a>{' '}
                and the{' '}
                <a
                  href="https://www.w3.org/TR/png/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 font-medium"
                >
                  W3C PNG Specification <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </section>

            {/* Section 3 */}
            <section id="how-compression-works" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                3. How Image Compression Works in Simple Terms
              </h2>
              <p className="mb-3">
                Digital images are grids of pixels. An uncompressed 1080p image contains over two million individual pixels, with each pixel holding precise values for red, green, and blue light (and sometimes an alpha transparency channel).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Lossless Compression
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Similar to putting text in a ZIP file. It identifies repeating patterns and optimizes internal data tables without deleting any pixel data. When decompressed, the image is 100% mathematically identical to the original. Because no pixel information is dropped, size savings are moderate (typically 10%–30%).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    Lossy Compression
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Capitalizes on human visual perception. Human eyes are far more sensitive to changes in brightness (luminance) than subtle shifts in color (chrominance). Lossy algorithms safely discard minor color nuances that your eyes cannot distinguish, delivering 50% to 80% file size savings with virtually no visible difference.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="how-to-use-optipress" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                4. How to Use OptiPress Step by Step
              </h2>
              <p className="mb-4">
                OptiPress operates entirely inside your web browser using HTML5 Canvas. Your images stay on your computer or phone and are never transmitted to remote servers.
              </p>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Upload Your Images</strong>
                    <span className="text-slate-600">
                      Drag and drop JPG, PNG, or WebP images into the upload box on the{' '}
                      {onGoToCompressor ? (
                        <button
                          type="button"
                          onClick={onGoToCompressor}
                          className="text-blue-600 underline font-semibold hover:text-blue-800 cursor-pointer"
                        >
                          OptiPress Home Tool
                        </button>
                      ) : (
                        'OptiPress Home Tool'
                      )}
                      , or click &quot;Choose Images&quot;. You can process single photos or batches at once.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Set Compression Quality</strong>
                    <span className="text-slate-600">
                      Adjust the master quality slider. 75% is configured as the balanced default. You can adjust the slider globally for all queued files or individually per image.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Choose Output Format &amp; Optional Scaling</strong>
                    <span className="text-slate-600">
                      Keep the original format or convert to modern WebP for superior compression. If the image is excessively large (e.g. 4000px wide), reduce the dimensions or scale slider to fit web display sizes.
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                    4
                  </span>
                  <div>
                    <strong className="text-slate-900 block font-semibold mb-0.5">Inspect &amp; Download</strong>
                    <span className="text-slate-600">
                      Click the &quot;Compare&quot; button to view a side-by-side before/after split slider. When satisfied, click &quot;Download&quot; on individual cards or &quot;Download All as ZIP&quot;.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="choosing-quality-setting" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                5. How to Choose a Suitable Quality Setting
              </h2>
              <p className="mb-4">
                Finding the sweet spot between sharpness and file weight depends on how your image will be viewed:
              </p>

              <div className="overflow-x-auto mb-4 border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900">
                      <th className="p-3 font-bold">Slider Range</th>
                      <th className="p-3 font-bold">Intended Use Case</th>
                      <th className="p-3 font-bold">Visual Result</th>
                      <th className="p-3 font-bold">Byte Reduction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td className="p-3 font-bold text-purple-700">85% – 95%</td>
                      <td className="p-3">Hero banners, photography portfolios, art prints</td>
                      <td className="p-3">Flawless, virtually lossless to human eyes</td>
                      <td className="p-3">20% – 45%</td>
                    </tr>
                    <tr className="bg-emerald-50/40">
                      <td className="p-3 font-bold text-emerald-700">70% – 80% (Sweet Spot)</td>
                      <td className="p-3">Standard blog posts, e-commerce products, news articles</td>
                      <td className="p-3">Sharp and clear; no visible blurring or artifacts</td>
                      <td className="p-3 font-semibold text-emerald-800">55% – 80%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-700">50% – 65%</td>
                      <td className="p-3">Small thumbnails, card previews, background textures</td>
                      <td className="p-3">Good for small viewports; slight softening on high zoom</td>
                      <td className="p-3">75% – 88%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-600">Below 50%</td>
                      <td className="p-3">Extreme low-bandwidth constraints only</td>
                      <td className="p-3 text-red-600">Visible pixelation and color banding can occur</td>
                      <td className="p-3">85%+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6 */}
            <section id="resizing-vs-compression" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                6. When to Resize an Image Instead of Only Compressing
              </h2>
              <p className="mb-3">
                One of the most frequent mistakes website managers make is trying to compress an oversized photo without resizing its pixel dimensions first. This is called the <strong>Megapixel Trap</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-700 space-y-2 mb-4">
                <strong className="text-amber-900 block font-semibold">
                  Why resizing is the secret to true speed:
                </strong>
                <p>
                  A photo taken on a modern smartphone often measures <strong>4032 × 3024 pixels</strong> (over 12 million pixels). If your website content column is only <strong>800 pixels wide</strong>, your visitor’s browser must download all 12 million pixels, only to immediately shrink it down by 80% to fit the layout.
                </p>
                <p>
                  If you first resize the dimensions to 1200px or 1600px width (leaving ample resolution for high-density Retina screens) and <em>then</em> apply 75% quality compression, your file size can drop from 6 MB down to under 150 KB with zero visible loss on any screen!
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li><strong>Full-width Hero Banners:</strong> Resize to 1920px width maximum.</li>
                <li><strong>Standard Blog / Article Body Images:</strong> Resize to 1000px–1200px width.</li>
                <li><strong>E-commerce Product Thumbnails:</strong> Resize to 600px–800px width.</li>
                <li><strong>Avatars &amp; Small Icons:</strong> Resize to 200px–400px width.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="comparing-images" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                7. How to Compare Original and Compressed Images
              </h2>
              <p className="mb-3">
                Before uploading compressed images to your live site, verify that fine details remain intact:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Areas to inspect carefully:</strong>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>Fine text, watermarks, or sharp typography.</li>
                    <li>Facial features, eye reflections, and hair details.</li>
                    <li>Smooth color gradients, like sunset skies (look for banding).</li>
                    <li>High-contrast edges where bright colors meet dark backgrounds.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Using the OptiPress Compare Tool:</strong>
                  <p className="text-slate-600">
                    Click the <Eye className="w-3.5 h-3.5 inline text-blue-600" /> <strong>Compare</strong> button on any compressed card in OptiPress. An interactive modal opens with a split slider, allowing you to slide back and forth across identical pixels in real time.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="common-mistakes" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                8. Common Mistakes That Reduce Image Quality
              </h2>
              <p className="mb-4">
                Avoid these frequent errors to ensure your images stay sharp and professional:
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 1: Repeated Multi-Generation Re-Compression
                    </strong>
                    <span className="text-slate-600">
                      Saving an already-compressed JPEG again and again causes &quot;generation loss&quot;. Each pass accumulates blocky artifacts. Always compress directly from your original uncompressed master source.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 2: Saving UI Screenshots or Text as Low-Quality JPEG
                    </strong>
                    <span className="text-slate-600">
                      JPEG is designed for continuous tone photography. When applied to text or UI screenshots, JPEG creates fuzzy &quot;mosquito noise&quot; around letters. Use PNG or lossless WebP for screenshots with text.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 3: Disabling Aspect Ratio Lock
                    </strong>
                    <span className="text-slate-600">
                      Manually typing width and height without maintaining proportions stretches or squashes faces and buildings. Always keep OptiPress’s padlock icon locked to maintain natural aspect ratios.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-red-200 bg-red-50/50 flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-red-900 block font-semibold mb-0.5">
                      Mistake 4: Not Checking on High-DPI Displays
                    </strong>
                    <span className="text-slate-600">
                      An image that looks acceptable on a 1080p desktop monitor might look blurry on a high-DPI smartphone or Retina screen. Serving images at 1.5× to 2× the CSS display container width prevents softness on modern devices.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="format-selection-guide" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                9. Choosing the Right Format for Different Image Types
              </h2>
              <p className="mb-4">
                Use this quick decision guide whenever you prepare new visual assets for your website:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-slate-900 block font-semibold text-sm">
                    📸 Camera Photos &amp; Hero Banners
                  </strong>
                  <p className="text-slate-600">
                    <strong>Recommended Format:</strong> WebP (or JPG fallback).
                  </p>
                  <p className="text-slate-600">
                    <strong>Settings:</strong> 72%–80% Quality. Resize width to max 1920px.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-slate-900 block font-semibold text-sm">
                    🎨 Logos, Badges &amp; Transparent Icons
                  </strong>
                  <p className="text-slate-600">
                    <strong>Recommended Format:</strong> PNG or WebP with transparency.
                  </p>
                  <p className="text-slate-600">
                    <strong>Settings:</strong> Maintain lossless transparency. Keep dimensions matching display target.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-slate-900 block font-semibold text-sm">
                    📊 Diagrams, Infographics &amp; Charts
                  </strong>
                  <p className="text-slate-600">
                    <strong>Recommended Format:</strong> PNG or high-quality WebP.
                  </p>
                  <p className="text-slate-600">
                    <strong>Settings:</strong> 85%–90% to keep numbers and text razor-sharp.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-slate-900 block font-semibold text-sm">
                    🛍️ E-Commerce Product Catalogs
                  </strong>
                  <p className="text-slate-600">
                    <strong>Recommended Format:</strong> WebP.
                  </p>
                  <p className="text-slate-600">
                    <strong>Settings:</strong> 75% Quality, 1000px × 1000px square or 4:3 ratio. Provides fast grid loading.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="frequently-asked-questions" className="scroll-mt-24 pt-4 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                10. Frequently Asked Questions
              </h2>
              <p className="mb-5 text-slate-600">
                Common questions answered for beginners and international website creators:
              </p>

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
              Ready to test these techniques on your images?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl mb-5 leading-relaxed">
              OptiPress is completely free, runs 100% locally in your web browser with zero server uploads, and lets you preview quality adjustments instantly.
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
