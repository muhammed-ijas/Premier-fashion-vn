import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/home/CTASection";
import { marketShare, productCategoryMix } from "../data/company";
import { heroes, clientLogos } from "../data/media";

export default function Clients() {
  return (
    <>
      <PageHero
        kicker="Clients"
        title="Trusted by international retail brands"
        lede="Premier Fashion supplies design, sampling, manufacturing and sourcing to brands across global retail markets."
        image={heroes.clients}
        breadcrumb="Clients"
      />

      {/* ---------- LOGO WALL ---------- */}
      <section className="surface-light py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Our partners"
            title="Brands we work with"
            align="center"
            plainKicker
          />

          {clientLogos.length > 0 ? (
                       <Stagger className="mt-10 grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {clientLogos.map((client, i) => (
                <Stagger.Item key={client.logo} as="scale">
                                   <div className="flex aspect-[5/3] items-center justify-center border border-line bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-[0_14px_30px_-20px_rgba(11,115,181,0.45)]">
                    <img
                      src={client.logo}
                      alt={client.name === "Client" ? `Client ${i + 1}` : client.name}
                      loading="lazy"
                      className="max-h-[72%] max-w-[85%] object-contain"
                    />
                  </div>
                </Stagger.Item>
              ))}
            </Stagger>
          ) : (
            <p className="mt-8 text-center text-[0.85rem] text-fg-subtle">
              Client logos to be added.
            </p>
          )}
        </Container>
      </section>

      {/* ---------- MARKET REACH ---------- */}
      <section className="surface-blue py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Market share"
            title="A growing footprint across sourcing markets"
          />

          <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {marketShare.points.map((point, i) => (
              <Stagger.Item key={i} as="up" className="h-full">
                <article className="card h-full">
                  <span className="card-index">0{i + 1}</span>
                  <p className="pr-8 text-[0.82rem] leading-[1.8] text-fg-muted">{point}</p>
                </article>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- HOW WE WORK ---------- */}
      <section className="surface-tint py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Working together"
            title="Dedicated teams, from order to shipment"
            tone="ink"
          />

          <Stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {productCategoryMix.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="up"
                className="border-t-2 border-hairline pt-4 text-[0.82rem] leading-[1.8] text-fg-muted transition-colors duration-300 hover:border-green"
              >
                {point}
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}