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
    <section className="border-b border-navy/10 bg-paper py-20 md:py-28">
      <Container>
        <Stagger className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {points.map((p, i) => (
            <Stagger.Item key={p.title} as="up" className="border-t-2 border-navy/15 pt-6">
              <span className="text-xs tracking-wide text-charcoal/40">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-display text-xl text-navy">{p.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-charcoal/75">{p.body}</p>
            </Stagger.Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}