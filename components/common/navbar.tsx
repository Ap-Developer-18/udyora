"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavLinkItem {
  href: string;
  name: string;
}

const NavLinks: NavLinkItem[] = [
  { href: "/#about", name: "About" },
  { href: "/#forte", name: "Forte" },
  { href: "/#projects", name: "Projects" },
  { href: "/#why", name: "Value" },
  { href: "/#team", name: "Team" },
  { href: "/#connect", name: "Connect" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const desktopBreakpoints = 1024;

    const syncWithViewport = () => {
      setIsMenuOpen(window.innerWidth >= desktopBreakpoints);
    };

    syncWithViewport();
    window.addEventListener("resize", syncWithViewport);
    return () => window.removeEventListener("resize", syncWithViewport);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1;
      setIsScrolled(window.scrollY > threshold);

      const hashes = ["about", "forte", "why", "team", "projects", "connect"];
      for (const hash of hashes) {
        const element = document.getElementById(hash);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveHash(`#${hash}`);
            return;
          }
        }
      }
      if (window.scrollY < threshold) setActiveHash("/");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", () =>
      setActiveHash(window.location.hash || "/"),
    );
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 backdrop-blur-lg w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#122130]/20 shadow-lg"
            : "py-3 bg-[#122130]/50 border-b border-b-dark-70/10"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between relative h-12">
          <div className="flex items-center h-full z-50">
            <Link
              href="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveHash("/");
              }}
              className="flex items-center heading text-white text-5xl gap-2"
            >
              <img
                className="h-full w-12 object-contain rounded-md"
                src="/logo.svg"
                alt="udyora logo"
              />
              <span className="relative inline-block top-[3px] leading-[79%]">
                UDYORA
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4 h-full">
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 30, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:flex items-center gap-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-md px-6 py-2.5 shadow-xl h-full"
                >
                  {NavLinks.map((link, index) => {
                    const isActive = activeHash === link.href;
                    return (
                      <React.Fragment key={link.name}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveHash(link.href)}
                          className={`text-xs md:text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:text-white relative py-1 ${
                            isActive ? "text-white" : "text-white/60"
                          }`}
                        >
                          {link.name}
                          {isActive && (
                            <motion.span
                              layoutId="activeUnderline"
                              className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                        {index < NavLinks.length - 1 && (
                          <span className="text-white/10 text-xs select-none">
                            |
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-4 text-white transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-xl rounded-md px-4 py-2.5 shadow-xl h-full"
              aria-label="Toggle Menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between items-center">
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out absolute right-0 ${
                    isMenuOpen ? "w-5 rotate-45 top-[7px]" : "w-5 top-0"
                  }`}
                />
                <span
                  className={`h-0.5 bg-white rounded-full transition-all duration-200 ease-in-out absolute right-0 top-[7px] ${
                    isMenuOpen ? "w-0 opacity-0" : "w-4 group-hover:w-5"
                  }`}
                />
                <span
                  className={`h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out absolute right-0 ${
                    isMenuOpen
                      ? "w-5 -rotate-45 top-[7px]"
                      : "w-3 top-[14px] group-hover:w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              /* FIX: Spring hata kar fast & snappy easeOut tween lagaya hai */
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.25,
              }}
              /* Optimized with will-change-transform for smoother mobile execution */
              className="lg:hidden fixed top-[80px] bottom-0 right-0 w-64 bg-[#122130]/20 backdrop-blur-2xl border-l border-white/10 z-[100] p-6 flex flex-col justify-between shadow-2xl will-change-transform"
            >
              <div className="flex flex-col gap-1">
                {NavLinks.map((link) => {
                  const isActive = activeHash === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveHash(link.href);
                        setIsMenuOpen(false);
                      }}
                      className={`text-sm border-b border-white/10 font-medium text-end tracking-widest uppercase transition-all duration-300 py-3 flex items-center justify-between ${
                        isActive
                          ? "text-white font-semibold pl-3 border-l-2 border-white"
                          : "text-white/50 hover:text-white hover:pl-3"
                      }`}
                    >
                      <ArrowUp className="-rotate-45 w-4 h-4" /> {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="text-white/20 text-[10px] tracking-widest uppercase mt-auto">
                © {new Date().getFullYear()} Udyora Ventures
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
