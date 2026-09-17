import { Mail, Phone, ArrowRight } from "lucide-react";
import Container from "../Container";
import Reveal from "../Reveal";
import Button from "../Button";
import { offices } from "../../data/company";

export default function CTASection() {
  const headOffice = offices.find((o) => o.country === "Vietnam");

  return (
    <section className="surface-light py-20 md:py-24">
      <Container>
        <Reveal
          as="up"
          className="flex flex-col items-start justify-between gap-10 border-t-2 border-green pt-12 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Get started</p>
            <h2 className="section-title text-balance">
              Ready to bring your next collection to life?
            </h2>
            <p className="mt-5 text-[0.98rem] leading-[1.75] text-fg-muted">
              Share your vision and our design, sourcing and production teams will take it
              from concept to shipment.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6">
            {/* the one green CTA on this page */}
            <Button to="/contact" variant="green">
              Start a conversation
              <ArrowRight size={15} strokeWidth={2} />
            </Button>

            <div className="space-y-2.5">
              {headOffice?.email && (
                <a
                  href={`mailto:${headOffice.email}`}
                  className="flex items-center gap-2.5 text-[0.9rem] text-fg-muted transition-colors duration-300 hover:text-blue"
                >
                  <Mail size={15} strokeWidth={1.9} className="shrink-0 text-green" />
                  {headOffice.email}
                </a>
              )}
              {headOffice?.phone && (
                <p className="flex items-center gap-2.5 text-[0.9rem] text-fg-muted">
                  <Phone size={15} strokeWidth={1.9} className="shrink-0 text-green" />
                  {headOffice.phone}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}