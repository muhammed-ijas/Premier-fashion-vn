import { motion } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { DURATION, EASE } from "../lib/motion";

/**
 * Button
 * Carries no colour. The .btn-* classes read their values from the
 * surrounding surface (see index.css), so the same button is dark-on-light
 * inside surface-light and light-on-dark inside surface-dark.
 *
 * variant: "primary" | "secondary" | "ghost"
 *   "light" is kept as an alias of "primary" so existing pages still work —
 *   on a dark surface, primary already inverts on its own.
 */
const variants = {
  primary: "btn btn-solid",
  light: "btn btn-solid",
  secondary: "btn btn-outline",
  ghost: "btn btn-ghost",
};

export default function Button({
  as,
  to,
  href,
  variant = "primary",
  className,
  children,
  ...rest
}) {
  const classes = clsx(variants[variant] ?? variants.primary, className);

  const content =
    variant === "ghost" ? (
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-300 group-hover:scale-x-0" />
      </span>
    ) : (
      children
    );

  const motionProps = {
    whileHover: variant === "ghost" ? undefined : { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: DURATION.fast, ease: EASE },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="group inline-block">
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="group inline-block">
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {content}
        </a>
      </motion.div>
    );
  }

  const Tag = as ?? "button";
  return (
    <motion.div {...motionProps} className="group inline-block">
      <Tag className={classes} {...rest}>
        {content}
      </Tag>
    </motion.div>
  );
}