import clsx from "clsx";

/**
 * Logo
 * Typographic wordmark for Premier Fashion / Premier Group. No brand logo
 * file was supplied in the source material, so this renders a deliberate
 * typographic mark rather than fabricating a graphic. Swap in a real mark
 * via an <img> here once artwork is provided.
 */
export default function Logo({ light = false, className }) {
  return (
    <span
      className={clsx(
        "flex items-baseline gap-2 font-display text-xl leading-none select-none",
        light ? "text-paper" : "text-navy",
        className
      )}
    >
      <span
        className={clsx(
          "flex h-7 w-7 items-center justify-center text-[0.95rem] font-medium",
          light ? "bg-paper text-navy" : "bg-navy text-paper"
        )}
      >
        P
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[1.05rem]">Premier Fashion</span>
      </span>
    </span>
  );
}
