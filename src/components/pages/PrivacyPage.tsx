import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            Privacy First
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            OptiPress Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Status: Draft for Review • Effective Date: [Date to be inserted upon deployment / Current Year]
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-emerald-950 text-base mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Core Privacy Guarantee: Zero Image Data Collection
            </h3>
            <p className="text-emerald-900 text-xs sm:text-sm">
              OptiPress operates entirely within your web browser (client-side). When you drop or select photos for compression, <strong>your files are never transmitted to, processed on, or stored on any external server or cloud database</strong>. All computation takes place in your device's memory.
            </p>
          </div>

          <h2 className="text-xl font-bold text-slate-900">1. Information We Do NOT Collect</h2>
          <p>
            Because OptiPress is an in-browser utility, we do not require account creation, logins, passwords, credit card numbers, or personal identity details.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm">
            <li><strong>Your Images:</strong> Never sent over the internet or accessible by us.</li>
            <li><strong>Image Metadata / EXIF:</strong> EXIF metadata (such as GPS coordinates, camera serial numbers, and timestamps) is stripped locally by your browser during re-encoding and is never stored anywhere.</li>
            <li><strong>User Profiles:</strong> No accounts, usernames, or passwords exist on OptiPress.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">2. Technical & Analytics Information</h2>
          <p>
            Like virtually all web hosts, standard web server access logs may temporarily record non-personally identifiable technical information (such as your browser type, operating system, and IP address) solely for network reliability and DDoS mitigation.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Cookies & Local Storage</h2>
          <p>
            OptiPress does not use tracking cookies, cross-site trackers, or third-party marketing beacons. Temporary preferences (such as your selected compression quality setting) may be retained in your browser's local storage solely to improve your user experience across sessions.
          </p>

          <h2 className="text-xl font-bold text-slate-900">4. Third-Party Services</h2>
          <p>
            OptiPress is self-contained. We do not use third-party image processing APIs or external computer vision providers. All compression libraries execute natively in browser JavaScript and WebAssembly.
          </p>

          <h2 className="text-xl font-bold text-slate-900">5. Children’s Privacy</h2>
          <p>
            Because we collect no personal information or photos, our service does not knowingly collect or solicit data from children under the age of 13.
          </p>

          <h2 className="text-xl font-bold text-slate-900">6. Entity Details & Contact Information</h2>
          <p className="text-xs sm:text-sm">
            For questions regarding this Draft Privacy Policy, please contact our administrative team:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono space-y-1">
            <div>Operator / Website: [OptiPress Project / Operator Name To Be Confirmed]</div>
            <div>Contact Email: [privacy@optipress.example.com]</div>
            <div>Mailing Address: [Physical mailing address to be registered upon formal incorporation]</div>
            <div>Governing Jurisdiction: [Applicable State / Country Jurisdiction]</div>
          </div>
        </div>
      </div>
    </div>
  );
};
