import { Link } from "react-router-dom";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Stagger from "../Stagger";
import { services } from "../../data/company";

export default function ServicesPreview() {
  return (
    <section className="bg-navy py-24 text-paper md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            kicker="What we do"
            title="Four capabilities, one integrated process."
            accent="cyan"
            tone="light"
          />
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-paper/10 bg-paper/10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Stagger.Item key={service.slug} as="up">
              <Link
                to="/services"
                className="group flex h-full flex-col justify-between bg-navy p-8 transition-colors duration-300 hover:bg-navy-mid"
              >
                <div>
                  <h3 className="font-display text-lg leading-snug text-paper">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    {service.summary}
                  </p>
                </div>
                <span className="mt-8 inline-block h-px w-8 bg-premier-cyan transition-all duration-300 group-hover:w-14" />
              </Link>
            </Stagger.Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
