import { motion } from "framer-motion";
import clsx from "clsx";
import { ImageOff } from "lucide-react";
import { DURATION, EASE } from "../lib/motion";

/**
 * ImageReveal
 * Settles into place on viewport entry. With no src it renders a clearly
 * marked placeholder rather than a fabricated image — real photography
 * is dropped in through data/media.js.
 */
export default function ImageReveal({
  src,
  alt = "",
  label,
  aspect = "aspect-[4/5]",
  className,
  imgClassName,
  priority = false,
}) {
  return (
    <div className={clsx("relative overflow-hidden bg-page", aspect, className)}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={clsx("h-full w-full object-cover", imgClassName)}
          initial={{ scale: 1.06, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: DURATION.slow, ease: EASE }}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-line-strong bg-page px-6 text-center"
          role="img"
          aria-label={label ? `Placeholder image: ${label}` : "Placeholder image"}
        >
          <ImageOff className="h-6 w-6 text-fg-subtle" strokeWidth={1.5} />
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-fg-subtle">
            Image placeholder{label ? ` — ${label}` : ""}
          </span>
        </div>
      )}
    </div>
  );
}