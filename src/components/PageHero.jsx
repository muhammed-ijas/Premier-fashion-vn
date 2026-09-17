import { Link } from "react-router-dom";
import clsx from "clsx";
import Container from "./Container";
import Reveal from "./Reveal";
import { hasMedia } from "../data/media";

/**
 * PageHero — interior page header.
 * Photograph with a flat dark overlay, uppercase white title, breadcrumb.
 * Pass the image from data/media.js: image={heroes.about}
 * compact: shorter than the full-screen home hero (default true for
 * interior pages — they carry content, not a landing statement).
 */
export default function PageHero({
  kicker,
  title,
  lede,
  image,
  breadcrumb,
  compact = false,
}) {
  return (
    <section
      className={clsx(
        "surface-media page-header overflow-hidden",
        compact && "page-header-compact",
        !hasMedia(image) && "no-media"
      )}
      style={hasMedia(image) ? { backgroundImage: `url(${image})` } : undefined}
    >
      <Container className="w-full">
        {kicker && (
          <Reveal as="fade">
            <p className="eyebrow mb-5">{kicker}</p>
          </Reveal>
        )}

        <Reveal as="up" delay={0.05}>
          <h1 className="hero-title max-w-3xl text-balance">{title}</h1>
        </Reveal>

        {lede && (
          <Reveal as="up" delay={0.1}>
            <p className="mt-5 max-w-xl text-[0.92rem] leading-[1.7] text-fg-muted">
              {lede}
            </p>
          </Reveal>
        )}

        {breadcrumb && (
          <Reveal as="up" delay={0.15}>
            <nav aria-label="Breadcrumb" className="breadcrumb mt-6">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{breadcrumb}</span>
            </nav>
          </Reveal>
        )}
      </Container>
    </section>
  );
}