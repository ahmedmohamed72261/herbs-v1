"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/src/shared/animations";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialKeys = [
  { textKey: "home.testimonials.1", authorKey: "home.testimonials.1.author", roleKey: "home.testimonials.1.role" },
  { textKey: "home.testimonials.2", authorKey: "home.testimonials.2.author", roleKey: "home.testimonials.2.role" },
  { textKey: "home.testimonials.3", authorKey: "home.testimonials.3.author", roleKey: "home.testimonials.3.role" },
];

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonialKeys.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonialKeys.length) % testimonialKeys.length);

  return (
    <section className="py-24 bg-surface-dim dark:bg-dark-surface-dim">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-4">
            {t("home.testimonials.title")}
          </h2>
          <p className="text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("home.testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-background dark:bg-dark-background rounded-2xl border border-outline-variant/10 dark:border-dark-outline-variant/20 p-10 md:p-14 shadow-sm"
            >
              <Quote className="w-10 h-10 text-accent/30 dark:text-accent/40 mx-auto mb-6" />
              <p className="text-base md:text-lg text-muted-foreground dark:text-dark-muted-foreground leading-relaxed mb-8 italic max-w-2xl mx-auto">
                &ldquo;{t(testimonialKeys[current].textKey)}&rdquo;
              </p>
              <div className="pt-6 border-t border-outline-variant/10 dark:border-dark-outline-variant/20 max-w-xs mx-auto">
                <p className="font-semibold text-primary dark:text-dark-foreground">
                  {t(testimonialKeys[current].authorKey)}
                </p>
                <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground mt-1">
                  {t(testimonialKeys[current].roleKey)}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 rounded-full bg-background dark:bg-dark-background border border-outline-variant/20 dark:border-dark-outline-variant/30 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 rounded-full bg-background dark:bg-dark-background border border-outline-variant/20 dark:border-dark-outline-variant/30 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialKeys.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === current ? "w-8 bg-accent" : "w-2 bg-outline-variant/40 hover:bg-outline-variant/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
