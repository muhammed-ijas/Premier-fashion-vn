import Container from "../Container";
import Reveal from "../Reveal";
import Button from "../Button";
import { offices } from "../../data/company";

export default function CTASection() {
  const headOffice = offices.find((o) => o.country === "Vietnam");

  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      {/* quiet gradient field, matching Hero — ties navy sections together site-wide */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full bg-premier-cyan/15 blur-[120px]" />
        <div className="absolute -right-16 top-0 h-[360px] w-[360px] rounded-full bg-premier-green/15 blur-[120px]" />
      </div>

      <Container className="relative flex flex-col items-start justify-between gap-10 border-t border-paper/15 pt-16 lg:flex-row lg:items-end">
        <Reveal as="up" className="max-w-xl">
          <h2 className="text-balance font-display text-[2.25rem] leading-[1.1] text-paper md:text-[2.75rem]">
            Ready to bring your next collection to life?
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-paper/65">
            Share your vision and our design, sourcing and production teams will take it
            from concept to shipment.
          </p>
        </Reveal>

        <Reveal as="up" delay={0.1} className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <Button to="/contact" variant="light">
            Start a conversation
          </Button>
          {headOffice?.email && (
            <a
              href={`mailto:${headOffice.email}`}
              className="text-[0.95rem] text-paper/60 underline-offset-4 transition-colors duration-300 hover:text-paper hover:underline"
            >
              {headOffice.email}
            </a>
          )}
        </Reveal>
      </Container>
    </section>
  );
}