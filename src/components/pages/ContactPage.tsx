import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  onGoToCompressor?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onGoToCompressor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [preparedForEmail, setPreparedForEmail] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showManualText, setShowManualText] = useState(false);

  const formatMessagePayload = () => {
    return `Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Subject: ${formData.subject.trim() || 'General Inquiry'}

Message:
${formData.message.trim()}

---
Sent regarding OptiPress (Online Image Compressor)`;
  };

  const handleCopyEmailAddress = async () => {
    const emailToCopy = 'hello.optipress@gmail.com';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 3000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = emailToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 3000);
    }
  };

  const handleOpenEmailClient = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please write a message before sending.');
      return;
    }

    const emailSubject = encodeURIComponent(
      formData.subject.trim()
        ? `[OptiPress Inquiry] ${formData.subject.trim()}`
        : `[OptiPress Inquiry] from ${formData.name.trim()}`
    );
    const emailBody = encodeURIComponent(formatMessagePayload());

    // Launch user's default email client pre-addressed to hello.optipress@gmail.com
    window.location.href = `mailto:hello.optipress@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    setPreparedForEmail(true);
  };

  const handleCopyToClipboard = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill in your name, email, and message to copy the formatted text.');
      return;
    }
    setValidationError(null);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(formatMessagePayload());
        setCopied(true);
        setShowManualText(false);
        setTimeout(() => setCopied(false), 3000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      // Fallback using temporary textarea
      try {
        const textArea = document.createElement('textarea');
        textArea.value = formatMessagePayload();
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopied(true);
          setShowManualText(false);
          setTimeout(() => setCopied(false), 3000);
        } else {
          setShowManualText(true);
          setValidationError('Clipboard access was blocked by your browser. Please select and copy your message text from the box below.');
        }
      } catch {
        setShowManualText(true);
        setValidationError('Clipboard access was blocked by your browser. Please select and copy your message text from the box below.');
      }
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
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Contact OptiPress
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            Have questions, feedback, privacy inquiries, or suggestions? Reach out directly to OptiPress.
          </p>
        </div>

        {/* Official Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Official Public Email */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-blue-100 text-blue-700">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Official Public Email
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mb-1">
                Direct Email Communication
              </h2>
              <p className="text-xs text-slate-600 mb-3">
                Click below to launch your email client or copy our official address:
              </p>

              <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-2 mb-4">
                <a
                  href="mailto:hello.optipress@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-bold text-xs sm:text-sm underline break-all"
                >
                  hello.optipress@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmailAddress}
                  className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 shrink-0 transition cursor-pointer"
                >
                  {emailCopied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <strong className="text-slate-900 block text-xs font-semibold mb-1">We use this address for:</strong>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Privacy enquiries & data rights (GDPR, DPDP, CCPA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Customer support & technical troubleshooting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>User feedback, bug reports & compression ideas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>General business & partnership enquiries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Postal Address Guidance */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-purple-100 text-purple-700">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  Postal Inquiries
                </span>
              </div>
              <h2 className="text-base font-bold text-slate-900 mb-1">
                Where a Postal Address Is Requested
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                OptiPress operates as a free, independent digital web utility without a physical reception desk, walk-in office, or telephone call center.
              </p>
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed mb-3">
                If you require a postal address for correspondence, formal notices, or regulatory communications, visitors are requested to contact us directly by email at{' '}
                <a
                  href="mailto:hello.optipress@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  hello.optipress@gmail.com
                </a>
                .
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Contact us at{' '}
                <a
                  href="mailto:hello.optipress@gmail.com"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  hello.optipress@gmail.com
                </a>{' '}
                for privacy enquiries, customer support, feedback, and general business enquiries. We aim to respond as soon as reasonably possible.
              </p>
            </div>
          </div>
        </div>

        {/* Transparent Communication Notice */}
        <div className="mb-8 p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs text-slate-700 flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-900 block font-semibold mb-0.5">How this contact method works:</strong>
            OptiPress is a client-side web utility that runs inside your browser without backend databases. Because of this, messages are not stored on an OptiPress server. Submitting the interactive form below prepares your message and launches your device's email client addressed directly to <span className="font-semibold text-blue-700">hello.optipress@gmail.com</span>, or you can copy the text to send through any webmail platform.
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs">
          {validationError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{validationError}</span>
            </div>
          )}

          {preparedForEmail && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Email Client Opened!</strong>
                Your default email application was opened addressed to <strong className="underline">hello.optipress@gmail.com</strong> with your message pre-filled. If it didn't open automatically, use the "Copy Formatted Message" button below to copy and paste your text into an email to <strong className="underline">hello.optipress@gmail.com</strong>.
              </div>
            </div>
          )}

          <form onSubmit={handleOpenEmailClient} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Subject (Optional)
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Question on WebP conversion, privacy enquiry, or feature suggestion"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={6}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your question, suggestion, privacy inquiry, or feedback here..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden"
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition active:scale-95 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in Email App</span>
              </button>

              <button
                type="button"
                onClick={handleCopyToClipboard}
                className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied Message!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Formatted Message</span>
                  </>
                )}
              </button>
            </div>

            {showManualText && (
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-700">Your Formatted Message:</span>
                  <span className="text-[11px] text-slate-500">Recipient: hello.optipress@gmail.com</span>
                </div>
                <textarea
                  readOnly
                  rows={6}
                  value={formatMessagePayload()}
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  className="w-full p-2.5 rounded-lg border border-slate-300 bg-white font-mono text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </form>
        </div>

        {/* Additional honest clarity */}
        <div className="mt-8 text-center text-xs text-slate-500">
          OptiPress is an independent free web project. Contact us at{' '}
          <a
            href="mailto:hello.optipress@gmail.com"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            hello.optipress@gmail.com
          </a>{' '}
          for privacy enquiries, customer support, feedback, and general business enquiries. We aim to respond as soon as reasonably possible.
        </div>
      </div>
    </div>
  );
};
