import { motion } from "framer-motion";
import Container from "../Container";
import Button from "../Button";
import ImageReveal from "../ImageReveal";
import { EASE } from "../../lib/motion";
import { company, offices, additionalPresence } from "../../data/company";

const line = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const locationCount = offices.length + additionalPresence.length;
  const countryList = [...offices.map((o) => o.country), ...additionalPresence];

  return (
    // No colour in this file. surface-dark supplies the gradient, the grain,
    // and the values behind text-fg / border-line / rule / btn.
    // To make the hero light, change this one class to surface-light.
    <section className="surface-dark overflow-hidden pb-24 pt-36 md:pt-44">
      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: EASE }}
            variants={line}
            className="mb-7 flex items-center gap-3 text-sm text-fg-muted"
          >
            <span className="rule h-px w-8" />
            Established {company.founded} · {company.group}
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            variants={line}
            className="max-w-2xl text-balance font-display text-[2.75rem] leading-[1.06] sm:text-[3.4rem] md:text-[4.2rem]"
          >
            A one-stop partner in global apparel making.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            variants={line}
            className="mt-7 max-w-md text-[1.08rem] leading-relaxed text-fg-muted"
          >
            {company.name} designs, develops and manufactures Men's, Women's and Kids'
            apparel from facilities across Vietnam, China, India, Bangladesh and Nepal —
            everything made under one roof.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
            variants={line}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button to="/about" variant="primary">
              About {company.name}
            </Button>
            <Button to="/contact" variant="secondary">
              Start a conversation
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative"
        >
          <ImageReveal
            aspect="aspect-[4/5]"
            label={`editorial photography — ${company.name}`}
            className="border border-line"
          />

          {/* panel-invert flips out of whichever surface it sits on */}
          <div
            className="panel-invert absolute -bottom-6 -left-6 hidden w-48 p-5 sm:block"
            title={countryList.join(", ")}
          >
            <p className="font-display text-2xl">{locationCount}</p>
            <p className="mt-1 text-xs leading-snug text-fg-muted">
              locations across {company.group}'s design, sourcing and production network
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}