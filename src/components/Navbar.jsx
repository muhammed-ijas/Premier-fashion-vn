import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Button from "./Button";
import { navigation } from "../data/company";
import { EASE } from "../lib/motion";

export default function Navbar({ transparentOnTop = true }) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !transparentOnTop;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-paper/95 shadow-[0_1px_0_0] shadow-navy/10 backdrop-blur" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link to="/" aria-label="Premier Fashion home">
          <img
            src="/PGLogo.png"
            alt="Premier Fashion"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    "relative py-1 text-[0.95rem] transition-colors duration-300",
                    solid ? "text-charcoal hover:text-navy" : "text-paper/85 hover:text-paper",
                    isActive && (solid ? "text-navy" : "text-paper")
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className={clsx(
                          "absolute -bottom-1.5 left-0 h-px w-full",
                          solid ? "bg-premier-green" : "bg-paper"
                        )}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" variant={solid ? "primary" : "light"} className="!px-6 !py-3">
            Get in touch
          </Button>
        </div>

        <button
          className={clsx(
            "flex h-10 w-10 items-center justify-center lg:hidden",
            solid ? "text-navy" : "text-paper"
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {navigation.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                  className="border-b border-navy/10"
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      clsx(
                        "block py-4 text-lg text-charcoal",
                        isActive && "text-navy"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pb-8">
              <Button to="/contact" variant="primary" className="w-full">
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
