import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing LoopSuit services and website usage.",
  alternates: {
    canonical: "https://loopsuitai.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 pt-24 pb-16">
      <section className="max-w-4xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">LoopSuit Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">Terms of Service</h1>
          <p className="text-slate-400 mt-4 max-w-2xl">
            Last updated: February 25, 2026
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed">
            These Terms of Service govern your use of the LoopSuit website and any services we provide, including
            AI automation, product design, and implementation support.
          </p>
        </div>

        <div className="space-y-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p className="text-slate-300 leading-relaxed">
              By accessing this website or engaging LoopSuit services, you agree to these terms and all applicable
              laws. If you do not agree, you should not use our site or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">2. Scope of Services</h2>
            <p className="text-slate-300 leading-relaxed">
              Project scope, timelines, deliverables, and fees are defined in your proposal, statement of work, or
              service agreement. Any out-of-scope work requires written approval.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">3. Client Responsibilities</h2>
            <p className="text-slate-300 leading-relaxed">
              You agree to provide accurate information, timely approvals, and required access to systems, content,
              and stakeholders needed to complete the engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">4. Payments and Refunds</h2>
            <p className="text-slate-300 leading-relaxed">
              Fees, payment schedules, and any refund terms are set in your signed agreement. Unless otherwise stated
              in writing, payments for completed milestones are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p className="text-slate-300 leading-relaxed">
              Upon full payment, ownership of final approved deliverables transfers as defined in your agreement.
              LoopSuit retains rights to pre-existing tools, frameworks, and know-how used during delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">6. Warranties and Liability</h2>
            <p className="text-slate-300 leading-relaxed">
              Services are provided on a commercially reasonable basis. To the extent permitted by law, LoopSuit is
              not liable for indirect, incidental, or consequential damages arising from use of our site or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">7. Termination</h2>
            <p className="text-slate-300 leading-relaxed">
              Either party may terminate an engagement as described in the applicable agreement. You remain
              responsible for payment of work completed up to termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">8. Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              Questions about these terms can be sent to{" "}
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
