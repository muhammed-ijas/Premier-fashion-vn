import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Stagger from "../components/Stagger";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { offices } from "../data/company";

export default function Contact() {
  const headOffice = offices.find((o) => o.country === "Vietnam");
  const otherOffices = offices.filter((o) => o.country !== "Vietnam");

  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Let's talk about your next collection."
        lede="Reach Premier Fashion's head office in Vietnam or any of our global locations."
      />

      {/* Head office + enquiry form */}
      <section className="py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal as="right">
            <div className="border border-navy/10 bg-paper-warm p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3 text-sm text-charcoal/60">
                <span className="h-px w-8 bg-premier-green" />
                {headOffice?.label}
              </div>
              <h2 className="font-display text-2xl text-navy md:text-[1.75rem]">
                {headOffice?.entity}
              </h2>

              <div className="mt-8 space-y-5 text-[0.95rem] text-charcoal/80">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-premier-green" strokeWidth={1.75} />
                  <span>{headOffice?.address}</span>
                </div>
                {headOffice?.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-premier-green" strokeWidth={1.75} />
                    <span>{headOffice.phone}</span>
                  </div>
                )}
                {headOffice?.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-premier-green" strokeWidth={1.75} />
                    <a
                      href={`mailto:${headOffice.email}`}
                      className="transition-colors duration-300 hover:text-navy"
                    >
                      {headOffice.email}
                    </a>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-premier-green" strokeWidth={1.75} />
                  <span>{headOffice?.function}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="up" delay={0.1}>
            <SectionHeading
              kicker="Send an enquiry"
              title="Tell us about your next order."
              accent="cyan"
            />

            <form className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="name" className="text-sm text-charcoal/70">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="border border-navy/20 bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors duration-300 focus:border-premier-cyan"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="company" className="text-sm text-charcoal/70">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="border border-navy/20 bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors duration-300 focus:border-premier-cyan"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="email" className="text-sm text-charcoal/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="border border-navy/20 bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors duration-300 focus:border-premier-cyan"
                />
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-sm text-charcoal/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="resize-none border border-navy/20 bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors duration-300 focus:border-premier-cyan"
                />
              </div>

              <div className="sm:col-span-2">
                <Button as="button" type="submit" variant="primary">
                  Send message
                </Button>
              </div>
            </form>
          </Reveal>
        </Container>
      </section>

      {/* Other global offices */}
      <section className="bg-paper-warm py-24 md:py-32">
        <Container>
          <SectionHeading
            kicker="Global offices"
            title="Our network around the world."
            accent="burgundy"
          />

          <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {otherOffices.map((office) => (
              <Stagger.Item
                key={office.country}
                as="up"
                className="flex h-full flex-col bg-paper-warm p-7"
              >
                <div className="mb-4 flex items-center gap-3 text-sm text-charcoal/60">
                  <span className="h-px w-8 bg-premier-cyan" />
                  {office.label}
                </div>
                <h3 className="font-display text-lg text-navy">{office.country}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{office.entity}</p>

                <div className="mt-5 space-y-3 text-sm text-charcoal/75">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-premier-cyan" strokeWidth={1.75} />
                    <span>{office.address}</span>
                  </div>
                  {office.phone && (
                    <div className="flex items-start gap-2.5">
                      <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-premier-cyan" strokeWidth={1.75} />
                      <span>{office.phone}</span>
                    </div>
                  )}
                  {office.email && (
                    <div className="flex items-start gap-2.5">
                      <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-premier-cyan" strokeWidth={1.75} />
                      <a
                        href={`mailto:${office.email}`}
                        className="transition-colors duration-300 hover:text-navy"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}
                </div>
              </Stagger.Item>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}