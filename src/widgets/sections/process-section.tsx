"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { Search, Settings, TestTube, Package } from "lucide-react";

const steps = [
  { icon: Search, key: "home.process.step1", descKey: "home.process.step1.desc", step: "01" },
  { icon: Settings, key: "home.process.step2", descKey: "home.process.step2.desc", step: "02" },
  { icon: TestTube, key: "home.process.step3", descKey: "home.process.step3.desc", step: "03" },
  { icon: Package, key: "home.process.step4", descKey: "home.process.step4.desc", step: "04" },
];

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-surface-dim dark:bg-dark-surface-dim relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-transparent dark:from-accent/10 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-4">
            {t("home.process.title")}
          </h2>
          <p className="text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("home.process.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.step} variants={fadeUp} className="relative">
              <div className="bg-background dark:bg-dark-background rounded-xl border border-outline-variant/10 dark:border-dark-outline-variant/20 p-8 hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-accent/5 group">
                <span className="font-display text-5xl font-bold text-accent/15 dark:text-accent/25 absolute top-4 right-4 leading-none">
                  {step.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors relative z-10">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary dark:text-dark-foreground mb-3 relative z-10">
                  {t(step.key)}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground leading-relaxed relative z-10">
                  {t(step.descKey)}
                </p>
              </div>
              {step.step !== "04" && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-accent/30 dark:bg-accent/40" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
