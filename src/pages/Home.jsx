import Hero from "../components/home/Hero";
import IntroStrip from "../components/home/IntroStrip";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import GlobalPresence from "../components/home/GlobalPresence";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <AboutPreview />
      <ServicesPreview />
      <GlobalPresence />
      <CTASection />
    </>
  );
}
