import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Quote, MapPin, TrendingUp } from "lucide-react";
import PageHero from "../components/PageHero";
import clsx from "clsx";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
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
import { heroes, about as aboutMedia, brands } from "../data/media";


// "Our Brands" has no source names or artwork yet — placeholders only.
const brandSlots = Array.from({ length: 6 }, (_, i) => i + 1);

const marketShareCards = [
  { region: "Vietnam", point: marketShare.points[0] },
  { region: "India", point: marketShare.points[1] },
  { region: "Ethiopia", point: marketShare.points[2] },
];
const targetForecastPoint = marketShare.points[3];

const categories = [
  "Bottoms",
  "Jackets",
  "Tops",
  "T-Shirts",
  "Polo",
  "Shirts",
  "Dresses",
  "Denims",
];

export default function About() {
  const locationCount = offices.length + additionalPresence.length;

  // timeline line draws itself as the section scrolls through the viewport
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const stats = [
    { value: company.founded, label: "Founded" },
    { value: locationCount, label: "Locations" },
    { value: "18+", label: "Years" },
  ];

  return (
    <>
      <PageHero
        kicker="About Premier Fashion"
        title="Two decades of full-service apparel manufacturing"
        lede="From a single Hong Kong trading office in 2005 to a full-service vendor spanning design, sourcing and production across Asia."
        image={heroes.about}
        breadcrumb="About Us"
      />

      {/* 1 — WHO WE ARE */}
      <section className="surface-light py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal as="left" className="order-1 lg:order-2">
            <ImageReveal
              src={aboutMedia.overview}
              aspect="aspect-[5/4]"
              alt="Premier Fashion facility"
              label="Ho Chi Minh City head office / production floor"
              className="border border-line"
            />
          </Reveal>

          <div className="order-2 lg:order-1">
            <SectionHeading kicker="Who we are" title="A one-stop shop, built over two decades" />

            <Reveal as="up" delay={0.1}>
              <p className="mt-6 max-w-lg text-[0.9rem] leading-[1.8] text-fg-muted">
                {about.intro}
              </p>
            </Reveal>
            <Reveal as="up" delay={0.16}>
              <p className="mt-4 max-w-lg text-[0.9rem] leading-[1.8] text-fg-muted">
                {about.today}
              </p>
            </Reveal>

            {/* three across on every screen, including phones */}
            <Reveal as="up" delay={0.22}>
              <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-line pt-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-xl font-bold leading-none text-blue md:text-2xl">
                      {stat.value}
                    </dd>
                    <dt className="mt-2 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-fg-subtle md:text-[0.65rem]">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2 — CEO MESSAGE */}
      <section className="surface-blue py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <Reveal as="right" className="mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-[300px]">
            <ImageReveal
              src={aboutMedia.ceoPortrait}
              aspect="aspect-[4/5]"
              alt={`${company.founder}, ${company.founderTitle}`}
              label="Portrait — Founder & CEO"
              className="border border-line"
            />
          </Reveal>

          <div>
            <Quote className="h-7 w-7 text-green" strokeWidth={1.75} />
            <Reveal as="up" delay={0.08}>
              <p className="mt-5 text-balance text-[1.2rem] font-medium leading-[1.55] text-white md:text-[1.45rem]">
                {about.ceoMessage.body[0]}
              </p>
            </Reveal>
            <Reveal as="up" delay={0.16}>
              <div className="mt-7 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-green" />
                <div>
                  <p className="text-[0.9rem] font-semibold uppercase tracking-[0.06em] text-white">
                    {company.founder}
                  </p>
                  <p className="mt-1 text-[0.8rem] text-fg-muted">{company.founderTitle}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3 — FULL-SERVICE VENDOR */}
      <section className="surface-tint py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <Reveal as="right">
              <p className="eyebrow mb-4">A full-service vendor</p>
              <h2 className="section-title text-balance">
                Trusted for quality and value
              </h2>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-4xl font-bold leading-none text-green md:text-5xl">18+</span>
                <span className="max-w-[9rem] text-[0.72rem] font-medium uppercase leading-snug tracking-[0.08em] text-fg-subtle">
                  years in business
                </span>
              </div>
            </Reveal>

            <Reveal as="left" delay={0.1}>
              <blockquote className="relative border-l-2 border-green bg-white p-7 md:p-9">
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-green/25"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="relative text-[0.95rem] leading-[1.85] text-fg-muted md:text-[1.02rem]">
                  {about.ceoMessage.body[1]}
                </p>
              </blockquote>


            </Reveal>
          </div>
        </Container>
      </section>



      {/* 4 — HISTORY TIMELINE */}
      {/* 4 — HISTORY TIMELINE */}
      <section className="surface-light py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Our history"
            title="Two decades of continuous advancement"
            lede="From a single trading office in Hong Kong to a global network of design, sourcing and production facilities."
          />

          <div ref={timelineRef} className="relative mt-14">
            {/* wave that draws itself down the centre gap */}
            {/* phones: straight line down the left edge */}
            <div aria-hidden="true" className="absolute left-0 top-0 h-full w-[2px] bg-hairline md:hidden">
              <motion.span
                style={{ scaleY: lineScale }}
                className="absolute inset-0 block origin-top bg-green"
              />
            </div>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-16 -translate-x-1/2 md:block"
              viewBox="0 0 40 1000"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M20 0 C 2 90, 38 180, 20 270 S 2 450, 20 540 S 38 720, 20 810 S 2 950, 20 1000"
                stroke="var(--line)"
                strokeWidth="2"
                strokeDasharray="1 9"
                strokeLinecap="round"
              />
              <motion.path
                d="M20 0 C 2 90, 38 180, 20 270 S 2 450, 20 540 S 38 720, 20 810 S 2 950, 20 1000"
                stroke="#7CB715"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength: lineScale }}
              />
            </svg>

            <Stagger className="grid grid-cols-1 gap-x-24 gap-y-10 pl-6 md:grid-cols-2 md:pl-0">
              {history.map((entry, i) => (
                <Stagger.Item
                  key={entry.year}
                  as={i % 2 === 0 ? "right" : "left"}
                  className="relative"
                >
                  <p className="text-lg font-bold leading-none text-blue md:text-xl">
                    {entry.year}
                  </p>
                  <h3 className="card-title mt-2">{entry.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-[1.75] text-fg-muted">
                    {entry.description}
                  </p>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>



      {/* 5 — OUR BRANDS */}
      {/* 5 — OUR BRANDS */}
      <section className="surface-tint py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Our brands"
            title="Trusted brand partners"
            align="center"
            plainKicker
          />
        </Container>

        <Container className="mt-10">
          <div className="marquee">
            <div className="marquee-track">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand.logo}-${i}`}
                  className="mx-2.5 flex h-24 w-52 shrink-0 items-center justify-center border border-line bg-white px-6 transition-colors duration-300 hover:border-green md:h-28 md:w-60"
                >
                  <img
                    src={brand.logo}
                    alt={
                      brand.name === "Brand partner"
                        ? `Brand partner ${(i % brands.length) + 1}`
                        : brand.name
                    }
                    loading="lazy"
                    aria-hidden={i >= brands.length}
                    className="max-h-[70%] max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6 — CHINA SOURCING */}
      <section className="surface-blue py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="China — Sourcing"
              title="Fabric & trims, headquartered at the source"
              lede={mission.intro}
            />
            <Reveal as="up" delay={0.1} className="mt-8 border-t border-line pt-6">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.1em] text-fg-subtle">
                Lead time
              </p>
              <p className="mt-2 text-2xl font-bold text-white md:text-3xl">60–90 days</p>
            </Reveal>
          </div>

          <Stagger className="space-y-4">
            {mission.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="left"
                className="border-l-2 border-green pl-5 text-[0.82rem] leading-[1.8] text-fg-muted"
              >
                {point}
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>

        <Container className="mt-14">
          <Reveal as="up">
            <ImageReveal
              src={aboutMedia.chinaSourcing}
              aspect="aspect-[21/9]"
              alt="Premier Exim China — Keqiao, Shaoxing"
              label="Keqiao, Shaoxing fabric & trims sourcing"
              className="border border-line"
            />
          </Reveal>
        </Container>
      </section>

      {/* 7 — MISSION */}
      <section className="surface-light py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Our mission"
            title="Five commitments, held everywhere we operate"
          />
          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {mission.pillars.map((pillar, i) => (
              <Stagger.Item key={pillar.title} as="up" className="h-full">
                <article className="card h-full">
                  <span className="card-index">0{i + 1}</span>
                  <h3 className="card-title pr-8">{pillar.title}</h3>
                  <p className="mt-3 text-[0.82rem] leading-[1.75] text-fg-muted">
                    {pillar.description}
                  </p>
                </article>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 8 — DESIGN: KEY INITIATIVES */}
      <section className="surface-tint py-20 md:py-28">
        <Container>
          <SectionHeading kicker="Design" title="Key initiatives" />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal as="right" className="mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-none">
              <ImageReveal
                src={aboutMedia.designStudio}
                aspect="aspect-[4/5]"
                alt="Premier design studio"
                label="Design studio — US, Vietnam, India, China"
                className="border border-line"
              />
            </Reveal>

            <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {designInitiatives.points.map((point, i) => (
                <Stagger.Item key={i} as="up" className="h-full">
                  <article className="card h-full">
                    <span className="card-index">0{i + 1}</span>
                    <p className="pr-8 text-[0.82rem] leading-[1.8] text-fg-muted">{point}</p>
                  </article>
                </Stagger.Item>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* 9 — PRODUCT CATEGORY MIX */}
      <section className="surface-blue py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <SectionHeading
              kicker="Product category mix"
              title="A diverse range, made under one roof"
            />
            <Reveal as="up" delay={0.12} className="mt-8 border-t border-line pt-6">
              <p className="text-3xl font-bold leading-none text-green md:text-4xl">40%</p>
              <p className="mt-3 max-w-xs text-[0.82rem] leading-[1.75] text-fg-muted">
                of turnover is business booked on Premier&rsquo;s own design.
              </p>
            </Reveal>
          </div>

          <div>
            <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((cat) => (
                <Stagger.Item
                  key={cat}
                  as="scale"
                  className="border border-line px-3 py-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-white transition-colors duration-300 hover:border-green"
                >
                  {cat}
                </Stagger.Item>
              ))}
            </Stagger>

            <Stagger className="mt-8 space-y-4">
              {productCategoryMix.points
                .filter((p) => !p.includes("40%"))
                .map((point, i) => (
                  <Stagger.Item
                    key={i}
                    as="up"
                    className="text-[0.82rem] leading-[1.8] text-fg-muted"
                  >
                    {point}
                  </Stagger.Item>
                ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* 10 — GLOBAL CAPACITY */}
      <section className="surface-sky py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Global capacity"
            title="Expanding where the opportunity is"
            tone="ink"
          />

          <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {marketShareCards.map((card) => (
              <Stagger.Item key={card.region} as="up" className="h-full">
                <article className="card h-full">
                  <span className="icon-chip mb-5">
                    <MapPin size={18} strokeWidth={2} />
                  </span>
                  <h3 className="card-title">{card.region}</h3>
                  <p className="mt-3 text-[0.82rem] leading-[1.75] text-fg-muted">{card.point}</p>
                </article>
              </Stagger.Item>
            ))}
          </Stagger>

          <Reveal as="up" delay={0.1}>
            <div className="mt-10 flex flex-col gap-5 border-t border-line pt-10 md:flex-row md:items-start">
              <span className="icon-chip icon-chip-blue shrink-0">
                <TrendingUp size={18} strokeWidth={2} />
              </span>
              <div>
                <h3 className="card-title">Target forecast &amp; aim</h3>
                <p className="mt-3 max-w-2xl text-[0.85rem] leading-[1.8] text-fg-muted">
                  {targetForecastPoint} Our aim is to stay competitive with new strategies and
                  approaches, and to remain a competent, dependable partner to every client we
                  work with.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}