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
        solid
          ? "border-b border-hairline bg-white/95 backdrop-blur"
          : "nav-over-media bg-transparent"
      )}
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link to="/" aria-label="Premier Fashion home">
          <img
            src="/PGLogo.png"
            alt="Premier Fashion"
            className="h-11 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  clsx("nav-link", isActive && "is-active")
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* green CTA on every state, as on the Group sites */}
        <div className="hidden lg:block">
          <Button to="/contact" variant="green">
            Get in touch
          </Button>
        </div>

        <button
          className={clsx(
            "flex h-10 w-10 items-center justify-center transition-colors lg:hidden",
            solid ? "text-ink" : "text-white"
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
            className="overflow-hidden border-t border-hairline bg-white lg:hidden"
          >
            <ul className="flex flex-col px-6 pb-8 pt-2">
              {navigation.map((item, i) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: EASE }}
                  className="border-b border-hairline"
                >
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      clsx(
                        "block py-4 text-[0.95rem] font-medium transition-colors",
                        isActive ? "text-green" : "text-ink hover:text-green"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pb-8">
              <Button to="/contact" variant="green" className="w-full">
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}