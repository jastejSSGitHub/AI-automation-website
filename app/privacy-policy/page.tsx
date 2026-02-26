import type { Metadata } from "next";
import Link from "next/link";
import LegalNavbar from "@/components/LegalNavbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LoopSuit collects, uses, and protects personal information.",
  alternates: {
    canonical: "https://loopsuitai.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-32 pb-16">
      <LegalNavbar />
      <section className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">LoopSuit Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">Privacy Policy</h1>
          <p className="text-slate-400 mt-4 max-w-2xl">
            Last updated: February 25, 2026
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed">
            This Privacy Policy explains what information we collect, why we collect it, and how we use and
            protect it when you visit LoopSuit or work with us on automation and design services.
          </p>
        </div>

        <div className="space-y-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="text-slate-300 leading-relaxed">
              We may collect personal information you provide directly, including your name, email address,
              company details, and any project information you share through contact forms, strategy call booking,
              or direct communication with our team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Information</h2>
            <p className="text-slate-300 leading-relaxed">
              We use this information to respond to inquiries, provide requested services, improve our website,
              share relevant updates, and fulfill legal obligations. We do not sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Cookies and Analytics</h2>
            <p className="text-slate-300 leading-relaxed">
              We may use cookies and analytics tools to understand site usage and improve performance. You can
              manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p className="text-slate-300 leading-relaxed">
              We may share data with trusted service providers (such as scheduling, analytics, or hosting
              platforms) only as needed to operate our services. These providers are required to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Your Rights (GDPR / CCPA)</h2>
            <p className="text-slate-300 leading-relaxed">
              Depending on your location, you may have rights to access, correct, delete, or restrict use of your
              personal information, and to request details about data processing. To make a request, contact us at{" "}
              <a href="mailto:support@loopsuitai.com" className="text-cyan-400 hover:text-cyan-300">
                support@loopsuitai.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Data Retention and Security</h2>
            <p className="text-slate-300 leading-relaxed">
              We keep personal information only for as long as needed to provide services, fulfill contracts, and
              meet legal requirements. We use reasonable administrative and technical safeguards to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              For privacy questions, email{" "}
              <a href="mailto:support@loopsuitai.com" className="text-cyan-400 hover:text-cyan-300">
                support@loopsuitai.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
            ← Back to LoopSuit home
          </Link>
        </div>
      </section>
    </main>
  );
}
