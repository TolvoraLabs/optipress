import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs: FaqItem[] = [
    {
      question: 'Are my images uploaded to any remote server or stored anywhere?',
      answer:
        'No, never! Unlike other websites that transfer your photos to cloud servers, OptiPress performs 100% of all decoding, compression, and resizing directly inside your web browser using HTML5 Canvas and WebAssembly. Your photos never leave your device, ensuring complete privacy for personal, financial, and confidential documents.',
    },
    {
      question: 'What image file formats does OptiPress support?',
      answer:
        'OptiPress supports standard web image formats: JPG/JPEG, PNG, and WebP. You can upload any of these formats and choose to keep their original format or convert between them (for example, converting heavy PNG or JPG files to high-efficiency WebP).',
    },
    {
      question: 'How do I achieve the maximum file size savings?',
      answer:
        'For standard photographs, set the quality slider to 70–80% and select "WebP" as the output format. You can also resize images to appropriate web dimensions (e.g. 1920px width for desktop or 1200px width for mobile), which can shrink file sizes by up to 85–90% with minimal visible difference.',
    },
    {
      question: 'Why didn’t my PNG file shrink as much as a JPEG?',
      answer:
        'PNG is a lossless format designed for graphics with transparency and sharp lines rather than camera photos. Standard browser Canvas PNG export does not discard pixel data. To drastically reduce a PNG’s size while preserving clarity and transparency, choose "WebP" in the output format selector!',
    },
    {
      question: 'Does OptiPress work in India and other countries with slower internet?',
      answer:
        'Yes, exceptionally well! Because OptiPress does not upload large files to a remote server and then download them back, it saves significant cellular mobile data and battery. It works smoothly on 4G, 5G, and slower broadband connections worldwide.',
    },
    {
      question: 'Is there a limit on how many images I can compress or a fee?',
      answer:
        'OptiPress is completely free with no subscriptions, no account registration, and no daily upload caps. You can compress as many images as your device’s memory allows, and download them all at once via a single ZIP archive.',
    },
    {
      question: 'Will OptiPress place a watermark on my images?',
      answer:
        'No! OptiPress never adds any watermarks, stamps, or branding onto your compressed images. Your downloaded files remain clean and completely yours.',
    },
    {
      question: 'Can I maintain the aspect ratio when resizing width or height?',
      answer:
        'Yes! By default, the aspect ratio lock is enabled. When you adjust the width, the height adjusts proportionally automatically. You can also toggle the padlock icon to customize width and height independently if needed.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Everything you need to know about OptiPress, privacy, and image compression.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-blue-300 bg-blue-50/30 shadow-xs' : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-base focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
