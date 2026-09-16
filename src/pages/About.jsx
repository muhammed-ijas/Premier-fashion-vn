import { Quote, MapPin, Award, TrendingUp } from "lucide-react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import Button from "../components/Button";
import CTASection from "../components/home/CTASection";
import {
  about,
  history,
  mission,
  designInitiatives,
  productCategoryMix,
  marketShare,
  offices,
  additionalPresence,
  company,
} from "../data/company";

// "Our Brands" has no source assets/names yet — do not invent brand names.
// Replace this array with real logo imports (e.g. import logo from "/brands/x.svg")
// once the client supplies brand marks.
const brandSlots = Array.from({ length: 6 }, (_, i) => i + 1);

const marketShareCards = [
  { region: "Vietnam", point: marketShare.points[0] },
  { region: "India", point: marketShare.points[1] },
  { region: "Ethiopia", point: marketShare.points[2] },
];
const targetForecastPoint = marketShare.points[3];

export default function About() {
  const locationCount = offices.length + additionalPresence.length;

  return (
    <>
      <PageHero
        kicker="About Premier Fashion"
        title="Two decades of full-service apparel manufacturing."
        lede="From a single Hong Kong trading office in 2005 to a full-service vendor spanning design, sourcing and production across Asia."
      />

      {/* 1 — WHO WE ARE */}
      <section className="bg-paper py-24 md:py-32">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal as="right">
            <ImageReveal
              aspect="aspect-[5/4]"
              label="Premier Fashion — Ho Chi Minh City head office / production floor"
              className="border border-navy/10"
            />
          </Reveal>
          <div>
            <SectionHeading kicker="Who we are" title="A one-stop shop, built over two decades." accent="green" />
            <Reveal as="up" delay={0.1}>
              <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-charcoal/80">{about.intro}</p>
            </Reveal>
            <Reveal as="up" delay={0.16}>
              <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-charcoal/80">{about.today}</p>
            </Reveal>

            <Reveal as="up" delay={0.22}>
              <div className="mt-10 flex flex-wrap gap-10 border-t border-navy/10 pt-8">
                <div>
                  <p className="font-display text-4xl text-navy">{company.founded}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/50">Founded</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-navy">{locationCount}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/50">
                    Locations worldwide
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl text-navy">18+</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/50">
                    Years in business
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — CEO MESSAGE */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-premier-cyan/15 blur-3xl" />
        <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal as="right">
            <ImageReveal
              aspect="aspect-[4/5]"
              label="Portrait — Mr. Mohammad Jamaluddin, Founder & CEO"
              className="border border-paper/10"
            />
          </Reveal>
          <div>
            <Quote className="h-9 w-9 text-premier-cyan" strokeWidth={1.5} />
            <Reveal as="up" delay={0.08}>
              <p className="mt-6 text-balance font-display text-[1.7rem] leading-[1.3] text-paper md:text-[2.1rem]">
                {about.ceoMessage.body[0]}
              </p>
            </Reveal>
            <Reveal as="up" delay={0.16}>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-premier-cyan" />
                <div>
                  <p className="font-display text-lg text-paper">{company.founder}</p>
                  <p className="text-sm text-paper/55">{company.founderTitle}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3 — PREMIER FASHION GROUP */}
      <section className="bg-paper-warm py-24 md:py-32">
        <Container>
          <Reveal as="up" className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3 text-sm text-charcoal/60">
              <span className="h-px w-8 bg-premier-green" />
              A full-service vendor
              <span className="h-px w-8 bg-premier-green" />
            </div>
            <p className="text-balance font-display text-[1.6rem] leading-[1.45] text-navy md:text-[1.95rem]">
              {about.ceoMessage.body[1]}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* 4 — HISTORY TIMELINE */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            kicker="Our history"
            title="Two decades of continuous advancement."
            accent="cyan"
            lede="From a single trading office in Hong Kong to a global network of design, sourcing and production facilities."
          />

          <Stagger className="mt-16 border-t border-navy/10">
            {history.map((entry) => (
              <Stagger.Item
                key={entry.year}
                as="up"
                className="grid grid-cols-1 gap-4 border-b border-navy/10 py-8 md:grid-cols-[140px_1fr]"
              >
                <p className="font-display text-3xl text-premier-green md:text-4xl">{entry.year}</p>
                <div>
                  <h3 className="font-display text-xl text-navy">{entry.title}</h3>
                  <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-charcoal/75">
                    {entry.description}
                  </p>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 5 — OUR BRANDS */}
      <section className="border-y border-navy/10 bg-paper-warm py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Our brands"
            title="Trusted brand partners."
            accent="burgundy"
            align="center"
          />
          <Reveal as="fade" delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm text-charcoal/50">
              Brand logo placeholders below — replace each with the actual client/brand
              logo once artwork is supplied. Do not populate with invented brand names.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {brandSlots.map((slot) => (
              <Stagger.Item key={slot} as="scale">
                <ImageReveal
                  aspect="aspect-[3/2]"
                  label={`Brand logo ${slot}`}
                  className="border border-navy/10 bg-paper"
                />
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 6 — CHINA SOURCING */}
      <section className="relative overflow-hidden bg-navy py-24 text-paper md:py-32">
        <div className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-premier-green/15 blur-3xl" />
        <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              kicker="China — Sourcing"
              title="Fabric & trims, headquartered at the source."
              accent="cyan"
              tone="light"
              lede={mission.intro}
            />
            <Reveal as="up" delay={0.1}>
              <p className="mt-6 text-sm uppercase tracking-wide text-paper/50">Lead time</p>
              <p className="font-display text-3xl text-paper">60–90 days</p>
            </Reveal>
          </div>

          <Stagger className="space-y-4">
            {mission.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="left"
                className="border-l-2 border-premier-cyan/50 pl-5 text-[0.98rem] leading-relaxed text-paper/75"
              >
                {point}
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>

        <Container className="relative mt-16">
          <Reveal as="up">
            <ImageReveal
              aspect="aspect-[21/9]"
              label="Premier Exim China — Keqiao, Shaoxing fabric & trims sourcing office"
              className="border border-paper/10"
            />
          </Reveal>
        </Container>
      </section>

      {/* 7 — MISSION */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading kicker="Our mission" title="Five commitments, held everywhere we operate." accent="green" />
          <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-5">
            {mission.pillars.map((pillar) => (
              <Stagger.Item key={pillar.title} as="up" className="bg-paper p-7">
                <h3 className="font-display text-lg text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{pillar.description}</p>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 8 — DESIGN: KEY INITIATIVES */}
      <section className="bg-paper-warm py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal as="right" className="order-2 lg:order-1">
            <ImageReveal
              aspect="aspect-[4/5]"
              label="Premier design studio — West/East collaboration (US, Vietnam, India, China)"
              className="border border-navy/10"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading kicker="Design" title="Key initiatives." accent="burgundy" />
            <Stagger className="mt-8 space-y-6">
              {designInitiatives.points.map((point, i) => (
                <Stagger.Item key={i} as="up" className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                  <p className="text-[0.98rem] leading-relaxed text-charcoal/80">{point}</p>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* 9 — PRODUCT CATEGORY MIX */}
      <section className="bg-navy py-24 text-paper md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                kicker="Product category mix"
                title="A diverse range, made under one roof."
                accent="cyan"
                tone="light"
              />
              <Reveal as="up" delay={0.12} className="mt-10 border-t border-paper/15 pt-8">
                <p className="font-display text-5xl text-paper">40%</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper/60">
                  of turnover is business booked on Premier&rsquo;s own design.
                </p>
              </Reveal>
            </div>

            <div>
              <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {["Bottoms", "Jackets", "Tops", "T-Shirts", "Polo", "Shirts", "Dresses", "Denims"].map(
                  (cat) => (
                    <Stagger.Item
                      key={cat}
                      as="scale"
                      className="border border-paper/15 px-4 py-6 text-center font-display text-base text-paper/85"
                    >
                      {cat}
                    </Stagger.Item>
                  )
                )}
              </Stagger>

              <Stagger className="mt-8 space-y-4">
                {productCategoryMix.points
                  .filter((p) => !p.includes("40%"))
                  .map((point, i) => (
                    <Stagger.Item key={i} as="up" className="text-[0.95rem] leading-relaxed text-paper/65">
                      {point}
                    </Stagger.Item>
                  ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      {/* 10 — MARKET SHARE / GLOBAL CAPACITY */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading
            kicker="Global capacity"
            title="Expanding where the opportunity is."
            accent="green"
          />

          <Stagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-navy/10 bg-navy/10 md:grid-cols-3">
            {marketShareCards.map((card) => (
              <Stagger.Item key={card.region} as="up" className="bg-paper p-8">
                <div className="mb-4 flex items-center gap-2 text-premier-green">
                  <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  <h3 className="font-display text-lg text-navy">{card.region}</h3>
                </div>
                <p className="text-sm leading-relaxed text-charcoal/75">{card.point}</p>
              </Stagger.Item>
            ))}
          </Stagger>

          <Reveal as="up" delay={0.1}>
            <div className="mt-10 flex flex-col gap-6 border-t border-navy/10 pt-10 md:flex-row md:items-start">
              <TrendingUp className="h-6 w-6 shrink-0 text-premier-cyan" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-lg text-navy">Target forecast &amp; aim</h3>
                <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-charcoal/75">
                  {targetForecastPoint} Our aim is to stay competitive with new strategies and
                  approaches, and to remain a competent, dependable partner to every client we work
                  with.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 11 — 15 YEARS OF QUALITY */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-premier-green/15 blur-3xl" />
        <Container className="relative flex flex-col items-center text-center">
          <Award className="h-9 w-9 text-premier-cyan" strokeWidth={1.5} />
          <Reveal as="up" delay={0.08}>
            <p className="mt-6 font-display text-[5rem] leading-none text-paper md:text-[7rem]">15</p>
          </Reveal>
          <Reveal as="up" delay={0.14}>
            <h2 className="mt-4 font-display text-2xl text-paper md:text-3xl">Years of Quality</h2>
          </Reveal>
          <Reveal as="up" delay={0.2}>
            <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-paper/60">
              Placeholder section — replace with the original &ldquo;15 Years of Quality&rdquo;
              copy and visual concept from the existing premierfashionvn.com site. Keep the
              figure as 15; do not update it to a newer number.
            </p>
          </Reveal>
          <Reveal as="up" delay={0.26} className="mt-10 w-full max-w-3xl">
            <ImageReveal
              aspect="aspect-[16/6]"
              label="15 Years of Quality — badge / certification visual from existing site"
              className="border border-paper/10"
            />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}