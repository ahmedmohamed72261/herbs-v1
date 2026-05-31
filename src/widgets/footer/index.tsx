"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary dark:bg-dark-primary text-primary-foreground relative border-t border-accent/10">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 right-8 w-10 h-10 bg-accent hover:bg-accent/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="block mb-4">
              <img src="/logo-light.png" alt={t("site.name")} className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-surface-dim/70 leading-relaxed max-w-xs mb-6">
              {t("site.tagline")}
            </p>
            <div className="space-y-2 text-sm text-surface-dim/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>123 Enterprise Way, Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>export@globalrawmaterials.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-accent">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li><Link href="/team" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.about")}</Link></li>
              <li><Link href="/certificates" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.certificates")}</Link></li>
              <li><Link href="/contact" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-accent">{t("footer.products.title")}</h4>
            <ul className="space-y-3">
              <li><Link href="/products?category=flowers" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.products.flowers")}</Link></li>
              <li><Link href="/products?category=leaves" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.products.leaves")}</Link></li>
              <li><Link href="/products?category=seeds" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.products.seeds")}</Link></li>
              <li><Link href="/products" className="text-sm text-surface-dim/70 hover:text-surface transition-colors duration-300">{t("footer.products.catalog")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5 text-accent">{t("footer.office")}</h4>
            <div className="space-y-3 text-sm text-surface-dim/70">
              <p>123 Enterprise Way</p>
              <p>Cairo, Egypt</p>
              <p className="pt-2">export@globalrawmaterials.com</p>
              <p>+20 123 456 7890</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-surface-dim/50">
            &copy; {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-surface-dim/50 hover:text-surface transition-colors duration-300">{t("footer.privacy")}</Link>
            <Link href="/terms" className="text-xs text-surface-dim/50 hover:text-surface transition-colors duration-300">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
