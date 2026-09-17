import { MapPin } from "lucide-react";
import Container from "../Container";
import Stagger from "../Stagger";
import Reveal from "../Reveal";
import Button from "../Button";
import { offices, additionalPresence, company } from "../../data/company";

export default function GlobalPresence() {
  const totalLocations = offices.length + additionalPresence.length;

  const stats = [
    { value: totalLocations, label: "Countries" },
    { value: offices.length, label: "Offices & facilities" },
    { value: company.founded, label: "Established" },
  ];

  return (
    <section className="surface-sky py-20 md:py-28">
      <Container>
        <Reveal as="up" className="mx-auto max-w-2xl text-center">
          <p className="eyebrow eyebrow-plain mb-4">Worldwide reach</p>
          <h2 className="section-title-dark text-balance">Global presence</h2>
          <p className="mt-5 text-[0.98rem] leading-[1.75] text-fg-muted">
            Design, sourcing and production span Premier&rsquo;s facilities and marketing
            offices worldwide.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Stagger.Item key={stat.label} as="up" className="text-center">
              <p className="text-3xl font-bold leading-none text-blue md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-fg-subtle">
                {stat.label}
              </p>
            </Stagger.Item>
          ))}
        </Stagger>

        <Stagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office) => (
            <Stagger.Item key={office.country} as="up" className="h-full">
              <article className="card h-full">
                <span className="icon-chip mb-5">
                  <MapPin size={18} strokeWidth={2} />
                </span>
                <h3 className="card-title">{office.country}</h3>
                <p className="mt-2 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-blue">
                  {office.label}
                </p>
                <p className="mt-3 text-[0.9rem] leading-[1.7] text-fg-muted">
                  {office.function}
                </p>
              </article>
            </Stagger.Item>
          ))}
        </Stagger>

        {additionalPresence.length > 0 && (
          <Reveal as="up" className="mt-12 border-t border-line pt-8 text-center">
            <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-fg-subtle">
              Additional presence
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              {additionalPresence.map((country) => (
                <li
                  key={country}
                  className="text-[0.95rem] font-medium uppercase tracking-[0.06em] text-ink"
                >
                  {country}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <Reveal as="up" className="mt-12 text-center">
          <Button to="/contact" variant="outline">
            View all offices
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}