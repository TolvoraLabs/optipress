import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Navbar,
  ActivePage,
} from './components/Navbar';
import { Footer } from './components/Footer';
import { ImageUploader } from './components/ImageUploader';
import { CompressionControls } from './components/CompressionControls';
import { ImageCard } from './components/ImageCard';
import { ComparisonModal } from './components/ComparisonModal';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { FaqSection } from './components/FaqSection';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { DisclaimerPage } from './components/pages/DisclaimerPage';
import { GuidesPage } from './components/pages/GuidesPage';
import { CompressImagesGuidePage } from './components/pages/CompressImagesGuidePage';
import { WebpVsJpgVsPngGuidePage } from './components/pages/WebpVsJpgVsPngGuidePage';
import {
  CompressedItem,
  ImageProcessingOptions,
  compressImage,
  createSampleDemoImage,
  loadImageFromFile,
} from './utils/compressor';
import { calculateSavings, detectMimeType } from './utils/formatters';
import { downloadAllAsZip } from './utils/zip';
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const DEFAULT_OPTIONS: ImageProcessingOptions = {
  quality: 0.75, // 75% default
  outputFormat: 'auto',
  maintainAspectRatio: true,
  scalePercent: 100,
};

const PAGE_SEO_METADATA: Record<ActivePage, { title: string; description: string }> = {
  home: {
    title: 'Free Online Image Compressor - OptiPress',
    description:
      'Compress JPG, PNG, and WebP images online for free with OptiPress. Fast, private, client-side image compression directly in your browser with zero server uploads.',
  },
  about: {
    title: 'About Us - OptiPress',
    description:
      'Learn about OptiPress, a free browser-based image compressor designed to make reducing image file sizes fast, private, and accessible worldwide.',
  },
  privacy: {
    title: 'Privacy Policy - OptiPress',
    description:
      'OptiPress Privacy Policy. Learn how our client-side image compressor processes images entirely in your browser with zero server uploads, and view our analytics disclosures.',
  },
  terms: {
    title: 'Terms of Use - OptiPress',
    description:
      'OptiPress Terms of Use. Read the guidelines, conditions, and fair use terms for using our free online image compression utility.',
  },
  contact: {
    title: 'Contact Us - OptiPress',
    description:
      'Get in touch with the OptiPress team. Share your feedback, suggest improvements, or report issues regarding our free image compression tool.',
  },
  disclaimer: {
    title: 'Disclaimer - OptiPress',
    description:
      'OptiPress Disclaimer. Read our official disclosures regarding client-side image compression, results variability, service availability, and reasonable limitations of liability.',
  },
  guides: {
    title: 'Image Compression Guides & Resources - OptiPress',
    description:
      'Learn how to compress images for the web without making them look blurry. Practical guides on JPG, PNG, and WebP optimization, resizing, and web performance.',
  },
  'guide-compress-web': {
    title: 'How to Compress Images for Web Without Blur - OptiPress Guide',
    description:
      'Comprehensive step-by-step tutorial on compressing JPG, PNG, and WebP images for the web without blurriness. Learn ideal quality settings, resizing, and format choice.',
  },
  'guide-webp-jpg-png': {
    title: 'WebP vs JPG vs PNG: Which Image Format Should You Choose? - OptiPress',
    description:
      'Detailed comparison of WebP, JPG, and PNG image formats for websites. Understand transparency, compression quality, browser support, and when to choose each format.',
  },
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [items, setItems] = useState<CompressedItem[]>([]);
  const [globalOptions, setGlobalOptions] = useState<ImageProcessingOptions>(DEFAULT_OPTIONS);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [comparisonItem, setComparisonItem] = useState<CompressedItem | null>(null);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Refs for tracking in-flight batch compression to prevent race conditions and outdated results
  const itemsRef = useRef<CompressedItem[]>(items);
  itemsRef.current = items;
  const batchVersionRef = useRef<number>(0);
  const isInitialLoad = useRef<boolean>(true);

  // Sync pathname and hash routing so both /about and #about, etc. resolve correctly
  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (
        path === 'guides/compress-images-for-web' ||
        path === 'guides/compress-images-for-web.html' ||
        hash === 'guides/compress-images-for-web' ||
        hash === 'compress-images-for-web' ||
        hash === 'guide-compress-web'
      ) {
        setActivePage('guide-compress-web');
        return;
      }
      if (
        path === 'guides/webp-vs-jpg-vs-png' ||
        path === 'guides/webp-vs-jpg-vs-png.html' ||
        hash === 'guides/webp-vs-jpg-vs-png' ||
        hash === 'webp-vs-jpg-vs-png' ||
        hash === 'guide-webp-jpg-png'
      ) {
        setActivePage('guide-webp-jpg-png');
        return;
      }
      const validPages: ActivePage[] = ['about', 'contact', 'privacy', 'terms', 'disclaimer', 'guides'];
      if (validPages.includes(path as ActivePage)) {
        setActivePage(path as ActivePage);
      } else if (validPages.includes(hash as ActivePage)) {
        setActivePage(hash as ActivePage);
      } else {
        setActivePage('home');
      }
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  // Update dynamic page SEO titles, canonical links, and meta descriptions as the user navigates
  useEffect(() => {
    const seo = PAGE_SEO_METADATA[activePage] || PAGE_SEO_METADATA.home;
    document.title = seo.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    const baseUrl = 'https://optipress-free-online-image-compressor.ai.studio';
    let pagePath = '/';
    if (activePage === 'home') {
      pagePath = '/';
    } else if (activePage === 'guide-compress-web') {
      pagePath = '/guides/compress-images-for-web';
    } else if (activePage === 'guide-webp-jpg-png') {
      pagePath = '/guides/webp-vs-jpg-vs-png';
    } else {
      pagePath = `/${activePage}`;
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `${baseUrl}${pagePath}`);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `${baseUrl}${pagePath}`);
    }

    // Report page_view to Google Analytics 4 if available
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'page_view', {
        page_title: seo.title,
        page_location: `${baseUrl}${pagePath}`,
        page_path: pagePath,
      });
    }
  }, [activePage]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage((cur) => (cur?.text === text ? null : cur));
    }, 3500);
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    let targetPath = '/';
    if (page === 'home') {
      targetPath = '/';
    } else if (page === 'guide-compress-web') {
      targetPath = '/guides/compress-images-for-web';
    } else if (page === 'guide-webp-jpg-png') {
      targetPath = '/guides/webp-vs-jpg-vs-png';
    } else {
      targetPath = `/${page}`;
    }
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Run compression on a single item using explicit options passed in
   */
  const executeItemCompression = async (
    item: CompressedItem,
    targetOptions: ImageProcessingOptions
  ): Promise<boolean> => {
    try {
      const result = await compressImage(
        {
          file: item.originalFile,
          name: item.name,
          originalWidth: item.originalWidth,
          originalHeight: item.originalHeight,
        },
        targetOptions
      );

      const savings = calculateSavings(item.originalSize, result.blob.size);
      const compressedUrl = URL.createObjectURL(result.blob);

      // Clean up previous blob URL
      if (item.compressedUrl) {
        URL.revokeObjectURL(item.compressedUrl);
      }

      setItems((prev) =>
        prev.map((it) => {
          if (it.id !== item.id) return it;
          return {
            ...it,
            options: targetOptions,
            status: 'success',
            compressedBlob: result.blob,
            compressedUrl,
            compressedSize: result.blob.size,
            compressedWidth: result.width,
            compressedHeight: result.height,
            outputMimeType: result.outputMime,
            downloadFilename: result.downloadFilename,
            savingsResult: savings,
            isPngLosslessNotice: result.isPngLosslessNotice,
            isWebpConversion: result.isWebpConversion,
            errorMessage: undefined,
          };
        })
      );
      return true;
    } catch (err) {
      setItems((prev) =>
        prev.map((it) => {
          if (it.id !== item.id) return it;
          return {
            ...it,
            options: targetOptions,
            status: 'error',
            errorMessage: err instanceof Error ? err.message : 'Compression failed.',
          };
        })
      );
      return false;
    }
  };

  /**
   * Automatic Live Recompression on globalOptions change (quality, format, scale)
   * Debounced ~350ms so dragging the slider does not freeze or over-trigger.
   * Cancels stale in-flight compressions if settings change before completion.
   */
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    const currentItems = itemsRef.current;
    if (currentItems.length === 0) return;

    // Increment batch version so any prior in-flight batch is discarded
    const currentBatchId = ++batchVersionRef.current;
    setIsProcessing(true);

    // Mark all items as compressing
    setItems((prev) =>
      prev.map((it) => ({
        ...it,
        status: 'compressing' as const,
      }))
    );

    const timer = setTimeout(async () => {
      const targetOptions = { ...globalOptions };

      for (const item of itemsRef.current) {
        // If user changed settings again, discard this stale batch!
        if (batchVersionRef.current !== currentBatchId) {
          return;
        }

        try {
          const result = await compressImage(
            {
              file: item.originalFile,
              name: item.name,
              originalWidth: item.originalWidth,
              originalHeight: item.originalHeight,
            },
            targetOptions
          );

          // Check again if batch is still active
          if (batchVersionRef.current !== currentBatchId) {
            return;
          }

          const savings = calculateSavings(item.originalSize, result.blob.size);
          const compressedUrl = URL.createObjectURL(result.blob);

          setItems((prev) =>
            prev.map((it) => {
              if (it.id !== item.id) return it;
              if (it.compressedUrl) URL.revokeObjectURL(it.compressedUrl);
              return {
                ...it,
                options: targetOptions,
                status: 'success',
                compressedBlob: result.blob,
                compressedUrl,
                compressedSize: result.blob.size,
                compressedWidth: result.width,
                compressedHeight: result.height,
                outputMimeType: result.outputMime,
                downloadFilename: result.downloadFilename,
                savingsResult: savings,
                isPngLosslessNotice: result.isPngLosslessNotice,
                isWebpConversion: result.isWebpConversion,
                errorMessage: undefined,
              };
            })
          );
        } catch (err) {
          if (batchVersionRef.current !== currentBatchId) return;
          setItems((prev) =>
            prev.map((it) =>
              it.id === item.id
                ? {
                    ...it,
                    options: targetOptions,
                    status: 'error',
                    errorMessage: err instanceof Error ? err.message : 'Compression failed.',
                  }
                : it
            )
          );
        }

        // Yield to browser main thread so UI stays 100% smooth and non-blocking
        await new Promise((r) => setTimeout(r, 12));
      }

      // Finish only if this batch is still current
      if (batchVersionRef.current === currentBatchId) {
        setIsProcessing(false);
      }
    }, 350); // 350ms debounce

    return () => clearTimeout(timer);
  }, [
    globalOptions.quality,
    globalOptions.outputFormat,
    globalOptions.scalePercent,
    globalOptions.maintainAspectRatio,
  ]);

  /**
   * Process a list of incoming raw files
   */
  const handleFilesSelected = async (files: File[]) => {
    if (files.length === 0) return;

    setIsProcessing(true);
    // Invalidate any ongoing global batch
    batchVersionRef.current++;

    const newItems: CompressedItem[] = [];

    for (const file of files) {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const originalUrl = URL.createObjectURL(file);
      const mime = detectMimeType(file);

      try {
        const img = await loadImageFromFile(file);
        const origW = img.naturalWidth || img.width;
        const origH = img.naturalHeight || img.height;

        const newItem: CompressedItem = {
          id,
          originalFile: file,
          name: file.name,
          originalSize: file.size,
          originalWidth: origW,
          originalHeight: origH,
          originalUrl,
          originalMimeType: mime,
          status: 'compressing',
          compressedBlob: null,
          compressedUrl: null,
          compressedSize: 0,
          compressedWidth: origW,
          compressedHeight: origH,
          outputMimeType: mime,
          downloadFilename: file.name,
          savingsResult: calculateSavings(file.size, file.size),
          isPngLosslessNotice: mime === 'image/png',
          isWebpConversion: false,
          options: { ...globalOptions },
        };

        newItems.push(newItem);
      } catch (err) {
        newItems.push({
          id,
          originalFile: file,
          name: file.name,
          originalSize: file.size,
          originalWidth: 0,
          originalHeight: 0,
          originalUrl,
          originalMimeType: mime,
          status: 'error',
          errorMessage: err instanceof Error ? err.message : 'Invalid image file',
          compressedBlob: null,
          compressedUrl: null,
          compressedSize: 0,
          compressedWidth: 0,
          compressedHeight: 0,
          outputMimeType: mime,
          downloadFilename: file.name,
          savingsResult: calculateSavings(file.size, file.size),
          isPngLosslessNotice: false,
          isWebpConversion: false,
          options: { ...globalOptions },
        });
      }
    }

    setItems((prev) => [...prev, ...newItems]);

    // Compress each newly added item with non-blocking yields
    for (const item of newItems) {
      if (item.status === 'compressing') {
        await executeItemCompression(item, item.options);
        await new Promise((r) => setTimeout(r, 10));
      }
    }

    setIsProcessing(false);
    showToast(`Added ${files.length} ${files.length === 1 ? 'image' : 'images'} successfully!`, 'success');
  };

  /**
   * Try with sample demo image
   */
  const handleLoadSample = async () => {
    try {
      showToast('Generating high-resolution sample photo...', 'info');
      const sampleFile = await createSampleDemoImage();
      await handleFilesSelected([sampleFile]);
    } catch (err) {
      showToast('Could not load sample image', 'error');
    }
  };

  /**
   * Re-compress a single item with updated settings directly
   */
  const handleRecompressWithSettings = async (
    id: string,
    newSettings: Partial<ImageProcessingOptions>
  ) => {
    const targetItem = items.find((it) => it.id === id);
    if (!targetItem) return;

    const mergedOptions: ImageProcessingOptions = {
      ...targetItem.options,
      ...newSettings,
    };

    // Update state to compressing with new options immediately
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, options: mergedOptions, status: 'compressing' } : it
      )
    );

    await executeItemCompression(targetItem, mergedOptions);
  };

  /**
   * Remove single image
   */
  const handleRemoveItem = (id: string) => {
    setItems((prev) => {
      const target = prev.find((it) => it.id === id);
      if (target?.compressedUrl) URL.revokeObjectURL(target.compressedUrl);
      if (target?.originalUrl) URL.revokeObjectURL(target.originalUrl);
      return prev.filter((it) => it.id !== id);
    });
  };

  /**
   * Clear all images
   */
  const handleClearAll = () => {
    batchVersionRef.current++;
    items.forEach((it) => {
      if (it.compressedUrl) URL.revokeObjectURL(it.compressedUrl);
      if (it.originalUrl) URL.revokeObjectURL(it.originalUrl);
    });
    setItems([]);
    setIsProcessing(false);
    showToast('All images cleared.', 'info');
  };

  /**
   * Download all as ZIP
   */
  const handleDownloadAllZip = async () => {
    const result = await downloadAllAsZip(items);
    if (result.success) {
      showToast(`ZIP created! Downloaded ${result.count} images.`, 'success');
    } else {
      showToast(result.error || 'Failed to generate ZIP.', 'error');
    }
  };

  // Compute aggregate stats using raw byte counts
  const successfulItems = items.filter((it) => it.status === 'success' && it.compressedSize > 0);
  const totalOriginalSize = items.reduce((acc, it) => acc + (it.originalSize || 0), 0);
  const totalCompressedSize = items.reduce(
    (acc, it) => acc + (it.status === 'success' ? it.compressedSize : it.originalSize),
    0
  );
  const aggregateSavings = calculateSavings(totalOriginalSize, totalCompressedSize);
  const hasPngItems = items.some(
    (it) => it.originalMimeType === 'image/png' || it.outputMimeType === 'image/png'
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div
            className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl text-xs font-semibold border ${
              toastMessage.type === 'success'
                ? 'bg-emerald-900 text-emerald-100 border-emerald-700'
                : toastMessage.type === 'error'
                ? 'bg-red-900 text-red-100 border-red-700'
                : 'bg-slate-900 text-white border-slate-700'
            }`}
          >
            {toastMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            {toastMessage.type === 'error' && <AlertCircle className="w-4 h-4 text-red-400" />}
            {toastMessage.type === 'info' && <Sparkles className="w-4 h-4 text-blue-400" />}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50">
              {/* Background ambient accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-300/20 via-purple-300/20 to-transparent blur-3xl pointer-events-none"></div>

              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Privacy Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80 mb-6 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>100% In-Browser Compression • Zero Server Uploads</span>
                </div>

                {/* Main Hero Title */}
                <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
                  Free Online Image Compressor
                  <span className="block text-2xl sm:text-4xl font-extrabold mt-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Compress Smarter. Save More.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                  Reduce image file sizes by up to <strong>90%</strong> without sacrificing visual quality. Automatic, live in-browser image optimization for JPG, PNG, and WebP.
                </p>

                {/* Main Compressor Container Card */}
                <div id="compressor-tool" className="max-w-4xl mx-auto scroll-mt-24">
                  {/* Dropzone Uploader */}
                  <ImageUploader
                    onFilesSelected={handleFilesSelected}
                    onLoadSample={handleLoadSample}
                    isProcessing={isProcessing}
                  />

                  {/* Batch Controls Bar (Visible when items exist) */}
                  {items.length > 0 && (
                    <div className="mt-8 animate-fadeIn">
                      <CompressionControls
                        totalOriginalSize={totalOriginalSize}
                        totalCompressedSize={totalCompressedSize}
                        aggregateSavings={aggregateSavings}
                        totalCount={items.length}
                        successCount={successfulItems.length}
                        hasPngItems={hasPngItems}
                        isProcessing={isProcessing}
                        globalOptions={globalOptions}
                        onChangeGlobalOptions={(opts) => setGlobalOptions((prev) => ({ ...prev, ...opts }))}
                        onDownloadAllZip={handleDownloadAllZip}
                        onClearAll={handleClearAll}
                      />

                      {/* Image List Items */}
                      <div className="space-y-3.5 text-left">
                        {items.map((item) => (
                          <ImageCard
                            key={item.id}
                            item={item}
                            onRecompressWithSettings={handleRecompressWithSettings}
                            onRemove={handleRemoveItem}
                            onOpenCompare={(target) => setComparisonItem(target)}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <HowItWorks />

            {/* Benefits Section */}
            <Benefits />

            {/* FAQ Section */}
            <FaqSection />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage onGoToCompressor={() => handleNavigate('home')} />
        )}

        {activePage === 'contact' && (
          <ContactPage onGoToCompressor={() => handleNavigate('home')} />
        )}

        {activePage === 'privacy' && (
          <PrivacyPage
            onGoToCompressor={() => handleNavigate('home')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {activePage === 'terms' && (
          <TermsPage onGoToCompressor={() => handleNavigate('home')} />
        )}

        {activePage === 'disclaimer' && (
          <DisclaimerPage
            onGoToCompressor={() => handleNavigate('home')}
            onNavigateToContact={() => handleNavigate('contact')}
            onNavigateToPrivacy={() => handleNavigate('privacy')}
          />
        )}

        {activePage === 'guides' && (
          <GuidesPage
            onGoToCompressor={() => handleNavigate('home')}
            onNavigateToCompressGuide={() => handleNavigate('guide-compress-web')}
            onNavigateToFormatGuide={() => handleNavigate('guide-webp-jpg-png')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {activePage === 'guide-compress-web' && (
          <CompressImagesGuidePage
            onGoToCompressor={() => handleNavigate('home')}
            onNavigateToGuides={() => handleNavigate('guides')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {activePage === 'guide-webp-jpg-png' && (
          <WebpVsJpgVsPngGuidePage
            onGoToCompressor={() => handleNavigate('home')}
            onNavigateToGuides={() => handleNavigate('guides')}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}
      </main>

      {/* Comparison Modal */}
      {comparisonItem && (
        <ComparisonModal
          item={comparisonItem}
          onClose={() => setComparisonItem(null)}
        />
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}
