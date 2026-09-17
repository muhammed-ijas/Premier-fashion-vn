import Container from "../Container";
import Reveal from "../Reveal";
import Button from "../Button";
import ImageReveal from "../ImageReveal";
import { about, company } from "../../data/company";
import { about as aboutMedia } from "../../data/media";

export default function AboutPreview() {
  const yearsActive = new Date().getFullYear() - company.founded;

  return (
    <section className="surface-light py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal as="right" className="relative">
          <ImageReveal
            src={aboutMedia.overview}
            aspect="aspect-[5/4]"
            alt="Premier Fashion facility"
            label="Premier Fashion facility"
            className="border border-line"
          />

          {/* flat white stat block, green edge — matches the cards */}
          <div className="absolute -bottom-6 -right-6 hidden w-48 border border-line bg-white p-5 shadow-[0_12px_34px_-20px_rgba(11,115,181,0.35)] sm:block">
            <span className="absolute inset-x-0 top-0 h-[3px] bg-green" />
            <p className="text-3xl font-bold leading-none text-blue">{yearsActive}+</p>
            <p className="mt-2 text-[0.68rem] font-medium uppercase leading-snug tracking-[0.08em] text-fg-subtle">
              years of full-service apparel manufacturing
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal as="up">
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="section-title max-w-lg text-balance">
              Almost two decades of full-service apparel manufacturing
            </h2>
          </Reveal>

          <Reveal as="up" delay={0.12}>
            <p className="mt-6 max-w-lg text-[0.98rem] leading-[1.75] text-fg-muted">
              {about.intro}
            </p>
          </Reveal>

          <Reveal as="up" delay={0.18}>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.75] text-fg-muted">
              {about.today}
            </p>
          </Reveal>

          <Reveal
            as="up"
            delay={0.22}
            className="mt-8 flex items-center gap-4 border-t border-line pt-6"
          >
            <span className="icon-chip shrink-0 text-[0.8rem] font-semibold">
              {company.founder
                .split(" ")
                .filter((w) => w !== "Mr.")
                .map((w) => w[0])
                .join("")}
            </span>
            <p className="text-sm text-fg-muted">
              Founded by <span className="font-medium text-ink">{company.founder}</span>,{" "}
              {company.founderTitle}
            </p>
          </Reveal>

          <Reveal as="up" delay={0.28} className="mt-8">
            <Button to="/about" variant="outline">
              Read our full story
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}