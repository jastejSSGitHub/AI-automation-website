import ChallengeSection from "@/components/ChallengeSection";
import Testimonials from "@/components/ui/testimonials";
import FAQ from "@/components/Faq";
import Pricing from "@/components/Pricing";
import GlobeFeatureSection from "@/components/ui/globe-feature-section";
import MissionStatement from "@/components/MissionStatement";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <GlobeFeatureSection />

      {/* Mission Statement */}
      <MissionStatement />

      {/* Challenge Section with Flip Cards */}
      <ChallengeSection />

      {/* Social Proof / Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Pricing Section */}
      <Pricing />

      <Process />
    </main>
  );
}
