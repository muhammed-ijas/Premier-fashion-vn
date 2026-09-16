import { motion } from "framer-motion";
import { DURATION, EASE, revealVariants } from "../lib/motion";

/**
 * Reveal
 * Wraps children in a viewport-triggered entrance animation.
 *
 * Props:
 *  - as: "up" | "left" | "right" | "fade" | "scale"   (default "up")
 *  - delay: number (seconds)
 *  - duration: number (seconds) — defaults to a fast, professional settle
 *  - once: replay on re-entry? default true (plays once)
 *  - className, ...rest passed through to motion.div
 */
export default function Reveal({
  as = "up",
  delay = 0,
  duration = DURATION.base,
  once = true,
  amount = 0.3,
  className,
  children,
  ...rest
}) {
  const variant = revealVariants[as] ?? revealVariants.up;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variant}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
