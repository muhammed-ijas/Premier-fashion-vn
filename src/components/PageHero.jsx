import Container from "./Container";
import Reveal from "./Reveal";
import clsx from "clsx";

const accentClass = {
  green: "bg-premier-green",
  cyan: "bg-premier-cyan",
  burgundy: "bg-burgundy",
};

/**
 * PageHero
 * Shared interior-page header: dark navy field, kicker + large serif title,
 * optional supporting line. Keeps every non-Home page tied to one system.
 */
export default function PageHero({ kicker, title, lede, accent = "green" }) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-40 md:pb-28 md:pt-48">
      <div
        className={clsx(
          "pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.15] blur-3xl",
          accentClass[accent]
        )}
      />
      <Container className="relative">
        {kicker && (
          <Reveal as="fade">
            <div className="mb-5 flex items-center gap-3 text-sm text-paper/60">
              <span className="h-px w-8 bg-premier-cyan" />
              {kicker}
            </div>
          </Reveal>
        )}
        <Reveal as="up" delay={0.05}>
          <h1 className="max-w-3xl text-balance font-display text-[2.75rem] leading-[1.05] text-paper md:text-[4rem]">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal as="up" delay={0.1}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-paper/70">{lede}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
