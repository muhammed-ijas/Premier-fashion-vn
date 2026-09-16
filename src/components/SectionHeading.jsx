import clsx from "clsx";
import Reveal from "./Reveal";

const accentColor = {
  green: "bg-premier-green",
  cyan: "bg-premier-cyan",
  burgundy: "bg-burgundy",
};

/**
 * SectionHeading
 * kicker: short line-of-context set beside a colored rule (sentence case, not all-caps)
 * title: serif display headline
 * lede: optional supporting paragraph
 * align: "left" | "center"
 * accent: "green" | "cyan" | "burgundy"
 */
export default function SectionHeading({
  kicker,
  title,
  lede,
  align = "left",
  accent = "green",
  tone = "dark",
  titleClassName,
  className,
}) {
  const isCenter = align === "center";
  const light = tone === "light";

  return (
    <div className={clsx("max-w-2xl", isCenter && "mx-auto text-center", className)}>
      {kicker && (
        <Reveal as="fade" duration={0.5}>
          <div
            className={clsx(
              "mb-5 flex items-center gap-3 text-sm",
              light ? "text-paper/60" : "text-charcoal/70",
              isCenter && "justify-center"
            )}
          >
            <span className={clsx("h-px w-8", accentColor[accent])} />
            {kicker}
          </div>
        </Reveal>
      )}
      <Reveal as="up" delay={0.05}>
        <h2
          className={clsx(
            "text-balance text-[2.25rem] leading-[1.1] md:text-[2.75rem]",
            light ? "text-paper" : "text-navy",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal as="up" delay={0.1}>
          <p
            className={clsx(
              "mt-5 text-[1.05rem] leading-relaxed",
              light ? "text-paper/70" : "text-charcoal/80"
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
