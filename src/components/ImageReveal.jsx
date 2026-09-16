import { motion } from "framer-motion";
import clsx from "clsx";
import { ImageOff } from "lucide-react";
import { DURATION, EASE } from "../lib/motion";

/**
 * ImageReveal
 * Premium image treatment: subtle scale-settle on viewport entry inside a
 * clipped frame. When no `src` is available, renders an explicitly labeled
 * placeholder rather than a fabricated image — real photography from the
 * client should be dropped in via `src` later.
 *
 * aspect: tailwind aspect-ratio class, e.g. "aspect-[4/5]"
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
    <div className={clsx("relative overflow-hidden bg-navy/5", aspect, className)}>
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={clsx("h-full w-full object-cover", imgClassName)}
          initial={{ scale: 1.08, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: DURATION.slow, ease: EASE }}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-navy/20 bg-[repeating-linear-gradient(135deg,color-mix(in_srgb,var(--color-navy)_4%,transparent)_0px,color-mix(in_srgb,var(--color-navy)_4%,transparent)_1px,transparent_1px,transparent_14px)] px-6 text-center"
          role="img"
          aria-label={label ? `Placeholder image: ${label}` : "Placeholder image"}
        >
          <ImageOff className="h-6 w-6 text-navy/30" strokeWidth={1.5} />
          <span className="text-xs tracking-wide text-navy/40">
            Image placeholder{label ? ` — ${label}` : ""}
          </span>
        </div>
      )}
    </div>
  );
}
