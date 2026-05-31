"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { ShieldCheck, TreeDeciduous, Globe, FileCheck } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, key: "home.why.quality", descKey: "home.why.quality.desc" },
  { icon: TreeDeciduous, key: "home.why.trace", descKey: "home.why.trace.desc" },
  { icon: Globe, key: "home.why.export", descKey: "home.why.export.desc" },
  { icon: FileCheck, key: "home.why.cert", descKey: "home.why.cert.desc" },
];

export function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background dark:bg-dark-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-4">
            {t("home.why.title")}
          </h2>
          <p className="text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("home.why.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.key}
              variants={fadeUp}
              className="relative p-8 rounded-xl border border-outline-variant/10 dark:border-dark-outline-variant/20 bg-surface dark:bg-dark-surface hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-lg hover:shadow-accent/5 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors">
                <reason.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary dark:text-dark-foreground mb-3">
                {t(reason.key)}
              </h3>
              <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground leading-relaxed">
                {t(reason.descKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
