import Container from "../Container";
import Reveal from "../Reveal";
import Button from "../Button";
import ImageReveal from "../ImageReveal";
import SectionHeading from "../SectionHeading";
import { about, company } from "../../data/company";

export default function AboutPreview() {
  const yearsActive = new Date().getFullYear() - company.founded;

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal as="right" className="relative">
          <ImageReveal
            aspect="aspect-[5/4]"
            label="Premier Fashion facility"
            className="border border-navy/10"
          />
          <div className="absolute -bottom-6 -right-6 hidden w-48 border border-navy/10 bg-paper p-5 shadow-[0_8px_30px_-12px_rgba(12,33,56,0.25)] sm:block">
            <p className="font-display text-3xl text-navy">{yearsActive}+</p>
            <p className="mt-1 text-xs leading-snug text-charcoal/60">
              years of full-service apparel manufacturing, since {company.founded}
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            kicker="Who we are"
            title="Almost two decades of full-service apparel manufacturing."
            accent="green"
          />
          <Reveal as="up" delay={0.12}>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-charcoal/80">
              {about.intro}
            </p>
          </Reveal>
          <Reveal as="up" delay={0.18}>
            <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-charcoal/80">
              {about.today}
            </p>
          </Reveal>

          <Reveal as="up" delay={0.22} className="mt-8 flex items-center gap-3 border-t border-navy/10 pt-6">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-navy/5 font-display text-sm text-navy">
              {company.founder
                .split(" ")
                .filter((w) => w !== "Mr.")
                .map((w) => w[0])
                .join("")}
            </span>
            <p className="text-sm text-charcoal/60">
              Founded by <span className="text-navy">{company.founder}</span>, {company.founderTitle}
            </p>
          </Reveal>

          <Reveal as="up" delay={0.28} className="mt-8">
            <Button to="/about" variant="ghost" className="!px-0">
              Read our full story
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}