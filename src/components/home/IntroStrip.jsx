import Container from "../Container";
import Stagger from "../Stagger";

const points = [
  {
    title: "One-stop solution",
    body: "Get everything you need made under one roof — saving time, money and effort from dealing with multiple suppliers.",
  },
  {
    title: "We make it easy",
    body: "Share your vision and ideas with us. We take care of bringing it to life, so you can focus on marketing and building your brand.",
  },
  {
    title: "Guaranteed quality",
    body: "Stricter than industry-standard quality checks, upheld consistently across every facility in our network.",
  },
];

export default function IntroStrip() {
  return (
    <section className="surface-tint py-20 md:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Why Premier Fashion</p>
          <h2 className="section-title">Everything under one roof</h2>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Stagger.Item key={p.title} as="up" className="h-full">
              <article className="card h-full">
                <span className="card-index">0{i + 1}</span>
                <h3 className="card-title pr-10">{p.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-[1.7] text-fg-muted">
                  {p.body}
                </p>
              </article>
            </Stagger.Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}