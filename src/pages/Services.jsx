import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import Button from "../components/Button";
import CTASection from "../components/home/CTASection";
import { services, mission, designInitiatives } from "../data/company";

const accentBySlug = {
  "design-development": "green",
  sampling: "cyan",
  manufacturing: "burgundy",
  "fabric-sourcing": "green",
};

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Design, sampling, manufacturing, fabric sourcing."
        lede="Four integrated capabilities that take a concept from sketch to shipment."
      />

      {/* Service-by-service breakdown */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {services.map((service, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
                >
                  <Reveal as={reversed ? "left" : "right"} className={reversed ? "lg:order-2" : ""}>
                    <ImageReveal
                      aspect="aspect-[5/4]"
                      label={service.name}
                      className="border border-navy/10"
                    />
                  </Reveal>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <SectionHeading
                      kicker={`0${i + 1} — ${service.name}`}
                      title={service.name}
                      lede={service.summary}
                      accent={accentBySlug[service.slug] ?? "green"}
                    />

                    {service.items.length > 0 && (
                      <Stagger className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <Stagger.Item
                            key={item}
                            as="up"
                            className="flex items-center gap-2.5 text-[0.95rem] text-charcoal/80"
                          >
                            <CheckCircle2
                              className="h-4 w-4 shrink-0 text-premier-green"
                              strokeWidth={1.75}
                            />
                            {item}
                          </Stagger.Item>
                        ))}
                      </Stagger>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Design & product development initiatives */}
      <section className="bg-paper-warm py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            kicker="Design network"
            title="Design intelligence from both the West and the East."
            accent="cyan"
          />
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {designInitiatives.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="up"
                className="border-t-2 border-navy/15 pt-5 text-[0.95rem] leading-relaxed text-charcoal/80"
              >
                {point}
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Mission pillars */}
      <section className="bg-navy py-24 text-paper md:py-32">
        <Container>
          <SectionHeading
            kicker="What drives us"
            title="Five commitments behind every order."
            accent="cyan"
            tone="light"
          />
          <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-5">
            {mission.pillars.map((pillar) => (
              <Stagger.Item
                key={pillar.title}
                as="up"
                className="flex h-full flex-col justify-between bg-navy p-7"
              >
                <h3 className="font-display text-lg leading-snug text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">
                  {pillar.description}
                </p>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}