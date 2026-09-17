import { motion } from "framer-motion";
import clsx from "clsx";
import Container from "../Container";
import Button from "../Button";
import { EASE } from "../../lib/motion";
import { company } from "../../data/company";
import { heroes, hasMedia } from "../../data/media";

const line = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const image = heroes.home;

  return (
    <section
      className={clsx(
        "surface-media page-header overflow-hidden",
        !hasMedia(image) && "no-media"
      )}
      style={hasMedia(image) ? { backgroundImage: `url(${image})` } : undefined}
    >
      <Container className="w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: EASE }}
          variants={line}
          className="eyebrow mb-6"
        >
          Established {company.founded} · {company.group}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          variants={line}
          className="hero-title max-w-3xl text-balance"
        >
          A one-stop partner in global apparel making
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          variants={line}
          className="mt-5 max-w-xl text-[1rem] leading-[1.7] text-fg-muted"
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
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          {/* on surface-media, btn-solid is Premier Green */}
          <Button to="/about" variant="primary">
            About Us
          </Button>
          <Button to="/contact" variant="secondary">
            Get in touch
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}