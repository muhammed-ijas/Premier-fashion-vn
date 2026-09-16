import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Stagger from "../Stagger";
import Button from "../Button";
import { offices, additionalPresence } from "../../data/company";

export default function GlobalPresence() {
  const totalLocations = offices.length + additionalPresence.length;

  return (
    <section className="bg-paper-warm py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              kicker="Global operations"
              title="A network built across Asia, Africa and the US."
              accent="burgundy"
              lede="Design, sourcing, and production span Premier's facilities and marketing offices worldwide."
            />
            <p className="mt-8 font-display text-5xl text-navy">
              {totalLocations}
              <span className="ml-3 align-top text-sm font-sans font-normal text-charcoal/50">
                countries
              </span>
            </p>
            <div className="mt-9">
              <Button to="/contact" variant="secondary">
                View all offices
              </Button>
            </div>
          </div>

          <div className="space-y-10">
            <Stagger className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {offices.map((office) => (
                <Stagger.Item
                  key={office.country}
                  as="up"
                  className="border-b border-navy/15 pb-4"
                >
                  <p className="font-display text-lg text-navy">{office.country}</p>
                  <p className="mt-1 text-xs tracking-wide text-charcoal/50">
                    {office.function}
                  </p>
                </Stagger.Item>
              ))}
            </Stagger>

            {additionalPresence.length > 0 && (
              <div>
                <p className="mb-4 text-xs tracking-wide text-charcoal/45">
                  Additional presence
                </p>
                <Stagger className="flex flex-wrap gap-x-8 gap-y-3">
                  {additionalPresence.map((country) => (
                    <Stagger.Item
                      key={country}
                      as="fade"
                      className="font-display text-base text-navy/70"
                    >
                      {country}
                    </Stagger.Item>
                  ))}
                </Stagger>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}