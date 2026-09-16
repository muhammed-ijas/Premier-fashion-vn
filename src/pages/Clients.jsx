import { Building2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/home/CTASection";
import { marketShare, productCategoryMix } from "../data/company";

// No client names or logos were present in the source material — placeholders
// only. Replace this array with real client names/logos once supplied by PFG.
const clientPlaceholders = Array.from({ length: 8 }, (_, i) => i);

export default function Clients() {
  return (
    <>
      <PageHero
        kicker="Clients"
        title="Trusted by international retail brands."
        lede="A showcase of the brands Premier Fashion partners with."
      />

      {/* Client logo wall — placeholder until real client names/logos supplied */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeading
            kicker="Our partners"
            title="Brands we work with."
            accent="green"
          />

          <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-3 lg:grid-cols-4">
            {clientPlaceholders.map((i) => (
              <Stagger.Item
                key={i}
                as="up"
                className="flex aspect-[3/2] flex-col items-center justify-center gap-2 bg-paper px-6 text-center"
              >
                <Building2 className="h-6 w-6 text-navy/25" strokeWidth={1.5} />
                <span className="text-xs tracking-wide text-navy/35">
                  Client logo placeholder
                </span>
              </Stagger.Item>
            ))}
          </Stagger>

          <p className="mt-8 text-sm text-charcoal/50">
            Client names and logos to be added once supplied.
          </p>
        </Container>
      </section>

      {/* Market reach — real sourced content */}
      <section className="bg-navy py-24 text-paper md:py-32">
        <Container>
          <SectionHeading
            kicker="Market share"
            title="A growing footprint across sourcing markets."
            accent="cyan"
            tone="light"
          />

          <Stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {marketShare.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="up"
                className="border-t-2 border-paper/20 pt-6 text-[1.02rem] leading-relaxed text-paper/75"
              >
                {point}
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* How we work with clients */}
      <section className="bg-paper-warm py-24 md:py-32">
        <Container>
          <SectionHeading
            kicker="Working together"
            title="Dedicated teams, from order to shipment."
            accent="burgundy"
          />

          <Stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {productCategoryMix.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="up"
                className="border-t-2 border-navy/15 pt-6 text-[1.02rem] leading-relaxed text-charcoal/80"
              >
                {point}
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}