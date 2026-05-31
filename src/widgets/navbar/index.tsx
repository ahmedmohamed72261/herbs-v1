"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { useThemeStore } from "@/src/shared/store/theme-store";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/shared/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/products", key: "nav.products" },
  { href: "/categories", key: "nav.categories" },
  { href: "/certificates", key: "nav.certificates" },
  { href: "/team", key: "nav.team" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const { theme } = useThemeStore();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-dark-surface/90 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt={t("site.name") + " – " + t("site.tagline")}
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 dark:text-dark-foreground/70 hover:text-accent dark:hover:text-accent transition-colors duration-300 rounded-lg hover:bg-accent/5"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/contact">
              <Button variant="accent" size="sm">{t("nav.inquire")}</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground dark:text-dark-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-outline-variant/10 bg-surface dark:bg-dark-surface overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-foreground/70 dark:text-dark-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-3 border-t border-outline-variant/10">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="accent" className="w-full">{t("nav.inquire")}</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
