import { Briefcase, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import Button from "../components/Button";
import CTASection from "../components/home/CTASection";
import { careers } from "../data/company";

export default function Careers() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Life at Premier Fashion Group."
        lede="Open roles across merchandising, production, QA and business development."
      />

      {/* Life at PFG */}
      <section className="py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal as="right">
            <ImageReveal
              aspect="aspect-[5/4]"
              label="Life at Premier Fashion Group"
              className="border border-navy/10"
            />
          </Reveal>

          <div>
            <SectionHeading
              kicker="Life at PFG"
              title="A family-run business, over 15 years strong."
              accent="green"
            />
            <Reveal as="up" delay={0.12}>
              <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-charcoal/80">
                {careers.lifeAtPFG}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why work with us */}
      <section className="bg-navy py-24 text-paper md:py-32">
        <Container>
          <SectionHeading
            kicker="Why Premier"
            title="We add human value at every level."
            accent="cyan"
            tone="light"
          />

          <Stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {careers.internationalAssignment.map((point, i) => (
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

      {/* Open vacancies */}
      <section className="bg-paper-warm py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              kicker="Open roles"
              title="Current vacancies."
              accent="burgundy"
            />
          </div>

          <Stagger className="mt-16 divide-y divide-navy/15 border-t border-navy/15">
            {careers.vacancies.map((role) => (
              <Stagger.Item key={role} as="up">
                <a
                  href="mailto:info@premierfashionvn.com?subject=Application%20—%20{role}"
                  className="group flex items-center justify-between gap-6 py-7 transition-colors duration-300 hover:text-premier-green"
                >
                  <div className="flex items-center gap-4">
                    <Briefcase
                      className="h-5 w-5 shrink-0 text-premier-green"
                      strokeWidth={1.75}
                    />
                    <span className="font-display text-xl text-navy transition-colors duration-300 group-hover:text-premier-green md:text-[1.4rem]">
                      {role}
                    </span>
                  </div>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-navy/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-premier-green"
                    strokeWidth={1.75}
                  />
                </a>
              </Stagger.Item>
            ))}
          </Stagger>

          <Reveal as="up" delay={0.1} className="mt-12">
            <p className="max-w-lg text-[0.95rem] leading-relaxed text-charcoal/70">
              Don't see a role that fits? We're always glad to hear from people who share
              our standard of quality and service.
            </p>
            <div className="mt-6">
              <Button href="mailto:info@premierfashionvn.com" variant="secondary">
                Get in touch
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}