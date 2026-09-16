import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/home/CTASection";
import { products, productCategoryMix } from "../data/company";

const accentBySlug = {
  "mens-wear": "green",
  "womens-wear": "burgundy",
  "kids-wear": "cyan",
  caps: "green",
  "product-photography": "cyan",
};

export default function Products() {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Men's, Women's and Kids' wear, made to spec."
        lede="A premium editorial look at Premier Fashion's product categories."
      />

      {/* Category-by-category breakdown */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {products.map((product, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={product.slug}
                  id={product.slug}
                  className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
                >
                  <Reveal as={reversed ? "left" : "right"} className={reversed ? "lg:order-2" : ""}>
                    <ImageReveal
                      aspect="aspect-[5/4]"
                      label={product.name}
                      className="border border-navy/10"
                    />
                  </Reveal>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <SectionHeading
                      kicker={`0${i + 1} — Product category`}
                      title={product.name}
                      accent={accentBySlug[product.slug] ?? "green"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Product category mix — real sourced content */}
      <section className="bg-navy py-24 text-paper md:py-32">
        <Container>
          <SectionHeading
            kicker="Category mix"
            title="Diverse product ranges, built with care."
            accent="cyan"
            tone="light"
          />

          <Stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {productCategoryMix.points.map((point, i) => (
              <Stagger.Item
                key={i}
                as="up"
                className="border-t-2 border-paper/20 pt-6 text-[1.02rem] leading-relaxed text-paper/75"
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