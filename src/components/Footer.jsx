import { Link } from "react-router-dom";
import Container from "./Container";
import { navigation, services, offices } from "../data/company";

export default function Footer() {
  const headOffice = offices.find((o) => o.country === "Vietnam");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-paper/80">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:gap-8 lg:py-20">
        <div className="max-w-sm">
          <img
            src="/PGLogo.png"
            alt="Premier Fashion"
            className="h-16 w-auto object-contain"
          />

          <p className="mt-5 text-[0.95rem] leading-relaxed text-paper/60">
            A one-stop apparel sourcing, design, product development and manufacturing
            partner, operating across Vietnam, China, India, Bangladesh, Nepal and beyond.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-display text-base text-paper">Navigate</h3>
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-[0.92rem] text-paper/60 transition-colors duration-300 hover:text-paper"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-base text-paper">Services</h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  className="text-[0.92rem] text-paper/60 transition-colors duration-300 hover:text-paper"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-display text-base text-paper">Head office</h3>
          <address className="space-y-2 text-[0.92rem] not-italic leading-relaxed text-paper/60">
            <p>{headOffice?.address}</p>
            <p>{headOffice?.phone}</p>
            <a
              href={`mailto:${headOffice?.email}`}
              className="inline-block transition-colors duration-300 hover:text-paper"
            >
              {headOffice?.email}
            </a>
          </address>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/40 md:flex-row">
          <p>© {year} Premier Fashion Co., Ltd. All rights reserved.</p>
          <p>Part of Premier Group</p>
        </Container>
      </div>
    </footer>
  );
}
