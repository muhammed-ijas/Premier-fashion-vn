import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import Stagger from "../Stagger";
import Button from "../Button";
import Reveal from "../Reveal";
import { services } from "../../data/company";

export default function ServicesPreview() {
  return (
    <section className="surface-blue py-20 md:py-28">
      <Container>
        <Reveal
          as="up"
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">What we do</p>
            <h2 className="section-title text-balance">
              Four capabilities, one integrated process
            </h2>
          </div>

          <Button to="/services" variant="outline">
            All services
            <ArrowRight size={15} strokeWidth={2} />
          </Button>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Stagger.Item key={service.slug} as="up" className="h-full">
              <Link
                to="/services"
                className="group flex h-full flex-col justify-between border border-line p-7 transition-colors duration-300 hover:border-green"
              >
                <div>
                  <span className="text-[0.7rem] font-medium tracking-[0.1em] text-fg-subtle">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-[0.95rem] font-semibold uppercase leading-snug tracking-[0.06em] text-white">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-[0.88rem] leading-[1.7] text-fg-muted">
                    {service.summary}
                  </p>
                </div>

                <span className="mt-8 flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-green transition-all duration-300 group-hover:w-12" />
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="text-green opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </span>
              </Link>
            </Stagger.Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}