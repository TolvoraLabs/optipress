import React from 'react';
import { Scale, CheckCircle2, AlertTriangle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            Terms of Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            OptiPress Terms of Use
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">
            Status: Draft for Review • Last Updated: [Date to be inserted upon deployment / Current Year]
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to OptiPress. By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the service.
          </p>

          <h2 className="text-xl font-bold text-slate-900">1. Description of the Service</h2>
          <p>
            OptiPress provides a web-based image compression and format conversion interface. All image processing operations occur entirely on the client side inside the user's web browser using standard Web APIs.
          </p>

          <h2 className="text-xl font-bold text-slate-900">2. User Ownership & Intellectual Property</h2>
          <p>
            You retain 100% full ownership, copyright, and all intellectual property rights to any images you process through OptiPress. Because OptiPress does not upload or store your images on any server, OptiPress claims no ownership, license, or right over your content.
          </p>

          <h2 className="text-xl font-bold text-slate-900">3. Acceptable Use</h2>
          <p>
            You agree to use OptiPress only for lawful purposes. You represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
            <li>You hold the legal right or permission to process and compress the images you introduce.</li>
            <li>You will not attempt to reverse engineer, disrupt, or introduce malicious payloads into the website infrastructure.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">4. Disclaimer of Warranties</h2>
          <p className="text-xs sm:text-sm bg-slate-50 border border-slate-200 p-4 rounded-xl">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WHILE WE STRIVE FOR OPTIMAL COMPRESSION FIDELITY, OPTIPRESS DOES NOT GUARANTEE THAT THE SERVICE WILL BE COMPLETELY ERROR-FREE OR THAT OUTPUT SIZES WILL MEET SPECIFIC TARGETS FOR EVERY IMAGE TYPE.
          </p>

          <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
          <p className="text-xs sm:text-sm">
            To the maximum extent permitted by applicable law, in no event shall the operators of OptiPress be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use the service. Always retain your original master copies before compressing files.
          </p>

          <h2 className="text-xl font-bold text-slate-900">6. Governing Law & Placeholder Legal Identification</h2>
          <p className="text-xs sm:text-sm">
            These terms shall be governed in accordance with the laws of [Governing Legal Jurisdiction to be specified].
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-mono space-y-1">
            <div>Website Operator: [OptiPress Project / Designated Entity Name]</div>
            <div>Official Legal Contact: [legal@optipress.example.com]</div>
            <div>Business Address: [Physical business address to be finalized upon registration]</div>
          </div>
        </div>
      </div>
    </div>
  );
};
