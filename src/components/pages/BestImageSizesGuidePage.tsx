import React, { useState } from 'react';
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Zap,
  Sliders,
  Maximize2,
  FileImage,
  Sparkles,
  Info,
  Clock,
  ChevronDown,
  Layers,
  Layout,
  ShoppingBag,
  Image as ImageIcon,
  Crop,
  ShieldCheck,
  Scale,
} from 'lucide-react';

interface BestImageSizesGuidePageProps {
  onGoToCompressor?: () => void;
  onNavigateToGuides?: () => void;
  onNavigateToCompressGuide?: () => void;
  onNavigateToFormatGuide?: () => void;
  onNavigateToContact?: () => void;
}

export const BestImageSizesGuidePage: React.FC<BestImageSizesGuidePageProps> = ({
  onGoToCompressor,
  onNavigateToGuides,
  onNavigateToCompressGuide,
  onNavigateToFormatGuide,
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
    { id: 'dimensions-vs-filesize', title: '1. Dimensions vs. File Size: Why Both Matter' },
    { id: 'recommended-dimensions', title: '2. Recommended Image Dimensions by Use Case' },
    { id: 'comparison-table', title: '3. Quick Reference Comparison Table' },
    { id: 'understanding-aspect-ratios', title: '4. Understanding Aspect Ratios Simply' },
    { id: 'how-to-resize', title: '5. How to Resize Images Without Blurring' },
    { id: 'practical-examples', title: '6. Practical Real-World Examples' },
    { id: 'frequently-asked-questions', title: '7. Frequently Asked Questions' },
    { id: 'related-resources', title: '8. Next Steps & Related Optimization Guides' },
  ];

  const guideFaqs = [
    {
      q: 'Is there a single universal image size that works for every website?',
      a: 'No. Every website theme, content management system (CMS), and layout differs. A full-bleed hero banner needs far more pixel width than a sidebar product thumbnail. Rather than seeking one magic number, match your image dimensions to the actual maximum container width on your website.',
    },
    {
      q: 'What happens if my image dimensions are too small?',
      a: 'If you upload an image with fewer pixels than the container where it displays (for example, putting a 400px wide image into a 1200px wide hero space), modern web browsers will stretch the image to fill the space. This stretching causes noticeable pixelation, jagged edges, and blurriness.',
    },
    {
      q: 'What is a high-DPI / Retina screen, and should I double my image sizes?',
      a: 'Modern smartphones, tablets, and laptops have Retina or high-DPI displays with double the pixel density of standard monitors. To ensure photos look razor-sharp on these displays, exporting images at 1.5× to 2× the standard display width (e.g. 1600px width for an 800px column) is common practice. When doing so, be sure to compress the image with OptiPress so the extra pixels do not bloat file size.',
    },
    {
      q: 'Should I resize images before uploading or let WordPress/Shopify resize them?',
      a: 'Always resize your master image before uploading whenever possible. While modern CMS platforms automatically generate smaller intermediate thumbnails, uploading raw 20 MB camera files consumes excessive server storage, exhausts PHP memory limits, and risks serving oversized original files if a theme template is misconfigured.',
    },
    {
      q: 'How can OptiPress help me resize and compress my images?',
      a: 'OptiPress includes built-in dimension scaling (e.g. 75%, 50%, or 25% of original width and height) alongside custom lossy and lossless quality compression. You can drag and drop your photos, scale down their dimensions, and compress them in real time directly inside your browser—with zero server uploads and complete privacy.',
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
            Best Image Sizes for Websites
          </span>
        </nav>

        {/* Section Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-emerald-700" />
              Website Sizing &amp; Dimensions Guide
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 8 min read
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500">Updated November 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Best Image Sizes for Websites: A Beginner&apos;s Guide
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Uploading images that are too large slows your website down, while images that are too small appear blurry and unappealing. Here is a practical, beginner-friendly guide to choosing the ideal image dimensions, pixel resolutions, and aspect ratios for modern websites.
          </p>

          {/* Quick Internal CTA banner */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                Need to scale down large camera photos and optimize file weight? <strong>OptiPress</strong> resizes and compresses images directly inside your browser.
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
            <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold text-sm">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Table of Contents</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToAnchor(item.id)}
                  className="text-left text-slate-600 hover:text-blue-600 hover:underline py-1 transition cursor-pointer"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </nav>

          {/* Section 1 */}
          <section id="dimensions-vs-filesize" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Dimensions vs. File Size: Why Both Matter
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When beginners talk about image &quot;size,&quot; they often confuse two separate technical measurements that work hand-in-hand: <strong>pixel dimensions</strong> and <strong>file weight</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 inline-block mb-2">
                  Pixel Dimensions (Width × Height)
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Measured in Pixels (e.g. 1920 × 1080 px)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dimensions define the physical width and height of the image canvas. A smartphone photo might be 4032 × 3024 pixels (over 12 million individual pixels). This dictates how much space the image occupies on a display screen.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200 inline-block mb-2">
                  File Weight (Storage Size)
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  Measured in KB or MB (e.g. 150 KB or 4.5 MB)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  File weight measures the amount of digital data required to transmit and store the image. Visitors with mobile data plans or slower cellular connections must download every single kilobyte before the browser can render your page.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>The Core Web Vitals &amp; SEO Impact</span>
              </div>
              <p className="leading-relaxed">
                Google uses <strong>Largest Contentful Paint (LCP)</strong> as a primary ranking signal for page speed. If your main hero image takes 4 seconds to download over a mobile 4G connection because it is a raw 6 MB camera photo, your search visibility, visitor bounce rates, and conversion numbers will suffer.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="recommended-dimensions" className="scroll-mt-24 pt-8 border-t border-slate-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Recommended Image Dimensions by Use Case
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Below are industry-standard starting dimensions for the most common website areas. Treat these as practical guidelines, and adjust slightly to match your specific website theme or layout.
            </p>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Hero images */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <Layout className="w-4 h-4 text-blue-600" />
                  <h3>Website Hero &amp; Banner Images</h3>
                </div>
                <div className="text-xs text-blue-600 font-semibold mb-2">
                  Starting Point: 1920 × 1080 px (16:9) or 1600 × 600 px (Panoramic) • Target: Under 250 KB
                </div>
                <p className="text-slate-600 leading-relaxed mb-2">
                  Hero banners span across the top of your homepage or landing page. Because full-width banners stretch across desktop displays (many of which are 1920px wide Full HD), <strong>1920px width</strong> provides crisp rendering without creating a massive download file.
                </p>
                <div className="text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200/80">
                  <strong>Pro Tip:</strong> For boxed hero sections that do not span the entire browser edge, you can safely scale dimensions down to <strong>1200 × 630 px</strong>.
                </div>
              </div>

              {/* Blog Featured */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <ImageIcon className="w-4 h-4 text-indigo-600" />
                  <h3>Blog Featured Images (Article Headers &amp; Social Cards)</h3>
                </div>
                <div className="text-xs text-indigo-600 font-semibold mb-2">
                  Starting Point: 1200 × 630 px (1.91:1) or 1200 × 675 px (16:9) • Target: Under 150 KB
                </div>
                <p className="text-slate-600 leading-relaxed mb-2">
                  Featured images serve a dual purpose: they head your blog post and are displayed when links are shared on Twitter/X, Facebook, LinkedIn, or messaging apps (OpenGraph cards). <strong>1200 × 630 px</strong> is the universally recommended standard for social cards, ensuring your link previews never appear cropped or distorted.
                </p>
              </div>

              {/* Blog Content Images */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <h3>Blog Body &amp; Content Images</h3>
                </div>
                <div className="text-xs text-emerald-600 font-semibold mb-2">
                  Starting Point: 800 × 600 px (4:3) or 1000 × 562 px (16:9) • Target: Under 100 KB
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Most modern blog content columns are between 680px and 800px wide for optimal typography reading comfort. Uploading images wider than <strong>1000px</strong> inside a blog article is usually wasteful because the reader&apos;s browser will simply shrink it to fit the column.
                </p>
              </div>

              {/* Product Images */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <ShoppingBag className="w-4 h-4 text-purple-600" />
                  <h3>E-Commerce Product Images</h3>
                </div>
                <div className="text-xs text-purple-600 font-semibold mb-2">
                  Starting Point: 800 × 800 px (1:1 Square) or 1000 × 1000 px • Target: Under 120 KB
                </div>
                <p className="text-slate-600 leading-relaxed mb-2">
                  Online store catalogs look most professional when every product image shares an identical square aspect ratio. <strong>800 × 800 px</strong> strikes an ideal balance between detail and speed. If your storefront supports an optical zoom loupe on hover, increase to <strong>1200 × 1200 px</strong> and compress with WebP.
                </p>
              </div>

              {/* Small Thumbnails */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-1">
                  <Crop className="w-4 h-4 text-slate-700" />
                  <h3>Thumbnails, Avatars &amp; Category Badges</h3>
                </div>
                <div className="text-xs text-slate-700 font-semibold mb-2">
                  Starting Point: 150 × 150 px or 300 × 300 px (Retina) • Target: Under 30 KB
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Thumbnails appear in sidebar widgets, related post lists, author bios, and search results. Because dozens of thumbnails often appear on a single page, keeping each file under <strong>30 KB</strong> prevents total page load delays.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="comparison-table" className="scroll-mt-24 pt-8 border-t border-slate-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Quick Reference Comparison Table
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Use this handy cheatsheet as a starting point when preparing graphics and photographs for your website:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-4 shadow-2xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="py-3 px-3 sm:px-4">Image Type</th>
                    <th className="py-3 px-3 sm:px-4">Starting Dimensions</th>
                    <th className="py-3 px-3 sm:px-4">Ratio</th>
                    <th className="py-3 px-3 sm:px-4">Target File Size</th>
                    <th className="py-3 px-3 sm:px-4">Best Format</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">Full-Width Hero / Banner</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">1920 × 1080 px</td>
                    <td className="py-3 px-3 sm:px-4">16:9</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 250 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP or JPG</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">Boxed Header / Banner</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">1200 × 600 px</td>
                    <td className="py-3 px-3 sm:px-4">2:1</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 180 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP or JPG</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">Blog Featured / Social Card</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">1200 × 630 px</td>
                    <td className="py-3 px-3 sm:px-4">1.91:1</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 150 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP or JPG</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">Standard Blog Body Image</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">800 × 600 px</td>
                    <td className="py-3 px-3 sm:px-4">4:3</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 100 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP or JPG</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">E-Commerce Product (Catalog)</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">800 × 800 px</td>
                    <td className="py-3 px-3 sm:px-4">1:1</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 120 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP (or PNG for cutout)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">E-Commerce Product (with Zoom)</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">1200 × 1200 px</td>
                    <td className="py-3 px-3 sm:px-4">1:1</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 200 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="py-3 px-3 sm:px-4 font-semibold text-slate-900">Thumbnails &amp; Avatars</td>
                    <td className="py-3 px-3 sm:px-4 font-mono text-xs">150 × 150 px</td>
                    <td className="py-3 px-3 sm:px-4">1:1</td>
                    <td className="py-3 px-3 sm:px-4 text-emerald-700 font-medium">&lt; 30 KB</td>
                    <td className="py-3 px-3 sm:px-4">WebP, PNG, or JPG</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              Note: These figures are practical starting recommendations rather than rigid universal rules. If your site design or CMS theme explicitly requires specific aspect ratios, always prioritize your theme&apos;s design system.
            </p>
          </section>

          {/* Section 4 */}
          <section id="understanding-aspect-ratios" className="scroll-mt-24 pt-8 border-t border-slate-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Understanding Aspect Ratios in Simple Language
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              An <strong>aspect ratio</strong> is simply the proportional relationship between an image&apos;s width and its height. It is written as two numbers separated by a colon (e.g. 16:9), regardless of the actual pixel size.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              For example, an image measuring <strong>1920 × 1080 px</strong>, an image measuring <strong>1280 × 720 px</strong>, and an image measuring <strong>640 × 360 px</strong> all share the exact same <strong>16:9</strong> aspect ratio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block mb-1 flex items-center gap-1.5 font-bold">
                  <span className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px]">16:9</span>
                  Widescreen (Banners, Video)
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  The standard shape of computer monitors, televisions, and YouTube videos. Excellent for expansive landscape photographs, hero sliders, and modern video thumbnails.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block mb-1 flex items-center gap-1.5 font-bold">
                  <span className="w-5 h-5 rounded-md bg-indigo-600 text-white flex items-center justify-center text-[10px]">4:3</span>
                  Traditional Landscape
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  The classic standard for computer tablets and standard digital cameras. Taller than 16:9, making it ideal for editorial blog posts and instructional diagrams.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block mb-1 flex items-center gap-1.5 font-bold">
                  <span className="w-5 h-5 rounded-md bg-purple-600 text-white flex items-center justify-center text-[10px]">1:1</span>
                  Square (E-Commerce, Social)
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Equal width and height. Ideal for product grids, user avatar headshots, customer testimonials, and Instagram-style portfolio galleries.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <strong className="text-slate-900 block mb-1 flex items-center gap-1.5 font-bold">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-[10px]">3:2</span>
                  Classic 35mm Photography
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  The native output of most DSLR and mirrorless digital camera sensors. Perfect for documentary photography and artistic portfolio showcases.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900 block font-semibold mb-1">
                Why consistent aspect ratios prevent layout shifting (CLS):
              </strong>
              <p className="leading-relaxed">
                If your blog archive displays cards with inconsistent image aspect ratios (some tall vertical, some wide landscape), the grid will look uneven and jagged. Worse, as images load on slow mobile connections, content jumps up and down—triggering poor <strong>Cumulative Layout Shift (CLS)</strong> scores in Google Search Console. Setting a consistent aspect ratio across your website keeps your design stable and professional.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="how-to-resize" className="scroll-mt-24 pt-8 border-t border-slate-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. How to Resize Images Without Unnecessarily Reducing Quality
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Resizing should never make your photos look blurry. Follow these essential golden rules to maintain pristine clarity:
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rule 1: Always Scale Down, Never Stretch Up</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  When you scale down a 4000px photo to 1200px, image processing algorithms average nearby pixels together, resulting in crisp edges and sharp detail. Conversely, stretching a 400px image up to 1200px forces the browser to invent pixels that do not exist, leading to immediately noticeable fuzziness and pixelation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rule 2: Lock Aspect Ratio During Resizing</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Always ensure your image editor or optimization tool locks proportional scaling. Changing width without proportionally altering height squashes or stretches people and objects into unnatural shapes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rule 3: Use the Two-Step Optimization Workflow</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  High-performance websites use a 2-step approach:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1 text-slate-600">
                  <li><strong>Step 1 (Dimension Resizing):</strong> Reduce the physical pixel canvas to match your site layout container (e.g. from 5000px down to 1200px).</li>
                  <li><strong>Step 2 (Byte Compression):</strong> Run the resized image through <strong>OptiPress</strong> with quality set to 75%–80% to remove redundant color data without visible blurring.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="practical-examples" className="scroll-mt-24 pt-8 border-t border-slate-100 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Practical Real-World Walkthroughs
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  Example A: High-Resolution Camera Photo to Fast Blog Header
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 text-xs">
                  <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl">
                    <span className="font-bold text-red-900 block">Original Camera Shot:</span>
                    <span className="text-slate-600 block">Dimensions: 6000 × 4000 px</span>
                    <span className="text-slate-600 block">File Size: 8.4 MB (Raw JPEG)</span>
                    <span className="text-red-700 font-medium block mt-1">Result: 4.8s mobile download time</span>
                  </div>
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                    <span className="font-bold text-emerald-900 block">Optimized with OptiPress:</span>
                    <span className="text-slate-600 block">Dimensions: 1200 × 800 px (3:2)</span>
                    <span className="text-slate-600 block">File Size: 112 KB (WebP, 75% quality)</span>
                    <span className="text-emerald-700 font-medium block mt-1">Result: 0.1s instant render (98.6% savings!)</span>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  On desktop screens and high-density mobile screens alike, the optimized 1200px WebP image looks virtually indistinguishable from the 8.4 MB original, while saving massive amounts of mobile bandwidth for your readers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                  Example B: Standardizing an E-Commerce Product Catalog
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Imagine an online boutique where vendors submit photos in mixed sizes: some horizontal 1920×1080px, some tall 1080×1920px smartphone portraits. When placed side-by-side, the product grid looks chaotic.
                </p>
                <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs space-y-1.5 text-slate-700">
                  <p><strong>The Fix:</strong> Crop all products to a uniform <strong>1:1 square ratio (1000 × 1000 px)</strong> with a neutral white or transparent background.</p>
                  <p><strong>The Compression:</strong> Export as WebP at 78% quality using OptiPress. Each product card now downloads in approximately 85 KB, allowing visitors to scroll smoothly through 40 products without lagging.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="frequently-asked-questions" className="scroll-mt-24 pt-8 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Frequently Asked Questions
              </h2>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              Clear answers to the most common questions about website image sizing and optimization:
            </p>

            <div className="space-y-3">
              {guideFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/80 transition flex items-center justify-between gap-3 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 8: Related Resources */}
          <section id="related-resources" className="scroll-mt-24 pt-8 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              8. Next Steps &amp; Related Optimization Guides
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Now that you know the ideal pixel dimensions for your website, explore our companion tutorials to master compression sliders and image format selection:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {onNavigateToCompressGuide && (
                <div
                  onClick={onNavigateToCompressGuide}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/20 transition cursor-pointer group shadow-2xs"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    Companion Guide
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition flex items-center justify-between">
                    <span>Compress Images Without Blur</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Learn how the 70%–80% compression sweet spot reduces byte weight by up to 80% without noticeable blurring.
                  </p>
                </div>
              )}

              {onNavigateToFormatGuide && (
                <div
                  onClick={onNavigateToFormatGuide}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 bg-white hover:bg-indigo-50/20 transition cursor-pointer group shadow-2xs"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                    Companion Guide
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition flex items-center justify-between">
                    <span>WebP vs JPG vs PNG Comparison</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Understand transparency support, file size trade-offs, and when to pick WebP, JPG, or PNG.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Interactive OptiPress Call-to-Action */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-5 h-5 text-blue-200" />
                <span className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
                  100% Client-Side Privacy
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1.5">
                Ready to resize and compress your website images?
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm max-w-lg leading-relaxed">
                Try OptiPress today. Scale down dimensions, adjust compression quality in real time, and download optimized WebP, JPG, and PNG files instantly. Free, private, and zero server uploads.
              </p>
            </div>
            {onGoToCompressor && (
              <button
                type="button"
                onClick={onGoToCompressor}
                className="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs hover:bg-blue-50 transition active:scale-95 shadow-xs shrink-0 cursor-pointer"
              >
                Launch Compressor
              </button>
            )}
          </div>
        </article>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-4">
            {onGoToCompressor && (
              <button
                type="button"
                onClick={onGoToCompressor}
                className="hover:text-blue-600 transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Image Compressor
              </button>
            )}
            {onNavigateToGuides && (
              <button
                type="button"
                onClick={onNavigateToGuides}
                className="hover:text-blue-600 transition flex items-center gap-1.5 cursor-pointer"
              >
                All Guides &amp; Resources
              </button>
            )}
          </div>

          {onNavigateToContact && (
            <button
              type="button"
              onClick={onNavigateToContact}
              className="hover:text-blue-600 transition cursor-pointer"
            >
              Have feedback or a guide topic idea? Contact Us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
