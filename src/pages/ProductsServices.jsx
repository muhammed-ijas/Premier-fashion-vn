import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/home/CTASection";
import {
  products,
  services,
  productCategoryMix,
  designInitiatives,
  mission,
} from "../data/company";
import {
  heroes,
  products as productMedia,
  services as serviceMedia,
} from "../data/media";

export default function ProductsServices() {
  return (
    <>
      <PageHero
        kicker="Products & Services"
        title="What we make, and how we make it"
        lede="Men's, Women's and Kids' wear, backed by design, sampling, manufacturing and fabric sourcing under one roof."
        image={heroes.products}
        breadcrumb="Products & Services"
      />

      {/* ---------- PRODUCTS ---------- */}
      <section className="surface-light py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Products"
            title="Our product categories"
            lede="A diverse range across Men's, Women's and Kids' wear — bottoms, jackets, tops, t-shirts, polos, shirts, dresses and denim."
          />

          <Stagger className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {products
              .filter((p) => p.slug !== "product-photography")
              .map((product, i) => (
                <Stagger.Item key={product.slug} as="up" id={product.slug}>
                  <article className="group">
                    <ImageReveal
                      src={productMedia[product.slug]}
                      aspect="aspect-[4/5]"
                      alt={product.name}
                      label={product.name}
                      className="border border-line"
                    />
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-[0.65rem] font-medium text-fg-subtle">
                        0{i + 1}
                      </span>
                      <h3 className="card-title">{product.name}</h3>
                    </div>
                  </article>
                </Stagger.Item>
              ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- CATEGORY MIX ---------- */}
      <section className="surface-tint py-14 md:py-16">
        <Container>
          <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

      {/* ---------- SERVICES ---------- */}
      <section className="surface-light py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Services"
            title="Four integrated capabilities"
            lede="From a sketch on a napkin to a shipped order — design, sampling, manufacturing and fabric sourcing."
          />

          <div className="mt-12 space-y-14 md:space-y-16">
            {services.map((service, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <Reveal
                    as={reversed ? "left" : "right"}
                    className={reversed ? "lg:order-2" : ""}
                  >
                    <ImageReveal
                      src={serviceMedia[service.slug]}
                      aspect="aspect-[5/4]"
                      alt={service.name}
                      label={service.name}
                      className="border border-line"
                    />
                  </Reveal>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <span className="text-[0.65rem] font-medium tracking-[0.1em] text-fg-subtle">
                      0{i + 1}
                    </span>
                    <h3 className="section-title mt-2 !text-[1.25rem] md:!text-[1.5rem]">
                      {service.name}
                    </h3>
                    <p className="mt-3 max-w-lg text-[0.85rem] leading-[1.8] text-fg-muted">
                      {service.summary}
                    </p>

                    {service.items.length > 0 && (
                      <Stagger className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <Stagger.Item
                            key={item}
                            as="up"
                            className="flex items-center gap-2.5 text-[0.82rem] text-fg-muted"
                          >
                            <CheckCircle2
                              className="h-3.5 w-3.5 shrink-0 text-green"
                              strokeWidth={2}
                            />
                            {item}
                          </Stagger.Item>
                        ))}
                      </Stagger>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- DESIGN NETWORK ---------- */}
      <section className="surface-blue py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="Design network"
            title="Intelligence from both the West and the East"
          />

          <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {designInitiatives.points.map((point, i) => (
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

      {/* ---------- COMMITMENTS ---------- */}
      <section className="surface-sky py-16 md:py-20">
        <Container>
          <SectionHeading
            kicker="What drives us"
            title="Five commitments behind every order"
            tone="ink"
          />

          <Stagger className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {mission.pillars.map((pillar, i) => (
              <Stagger.Item key={pillar.title} as="up" className="h-full">
                <article className="card h-full">
                  <span className="card-index">0{i + 1}</span>
                  <h3 className="card-title pr-6">{pillar.title}</h3>
                  <p className="mt-2.5 text-[0.8rem] leading-[1.75] text-fg-muted">
                    {pillar.description}
                  </p>
                </article>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}