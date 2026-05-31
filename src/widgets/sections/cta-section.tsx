"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/shared/animations";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { Button } from "@/src/shared/ui/button";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface-dim dark:bg-dark-surface-dim relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5 dark:from-accent/15 dark:via-transparent dark:to-accent/10 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">{t("home.cta.btn")}</Button>
            </Link>
            <Link href="/contact">
              <Button variant="accent" size="lg">{t("home.cta.btn2")}</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
