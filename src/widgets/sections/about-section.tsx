"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { Leaf, Award, ShieldCheck, Truck } from "lucide-react";

const stats = [
  { icon: Leaf, value: "12+", key: "home.stats.projects" },
  { icon: Award, value: "20+", key: "home.stats.years" },
  { icon: ShieldCheck, value: "150+", key: "home.stats.clients" },
  { icon: Truck, value: "500+", key: "home.stats.shipments" },
];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 bg-background dark:bg-dark-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block py-0.5 px-2.5 rounded-full bg-accent/10 text-accent text-[10px] font-semibold tracking-wider uppercase mb-2.5 border border-accent/20">
              {t("home.about.title")}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-3">
              {t("home.about.subtitle")}
            </h2>
            <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm leading-relaxed mb-2.5">
              {t("home.about.p1")}
            </p>
            <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm leading-relaxed">
              {t("home.about.p2")}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="bg-surface-dim/50 dark:bg-dark-surface-dim/50 rounded-lg border border-outline-variant/10 dark:border-dark-outline-variant/20 p-4 text-center"
              >
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-1.5" />
                <span className="block font-display text-lg font-bold text-primary dark:text-dark-foreground">
                  {stat.value}
                </span>
                <span className="text-[11px] text-muted-foreground dark:text-dark-muted-foreground">
                  {t(stat.key)}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
