"use client";

import React from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { Card, CardTitle } from "@/src/shared/ui/card";
import Link from "next/link";
import { ArrowRight, Leaf, Flower2, Settings, ShieldCheck } from "lucide-react";
import { categories as mockCategories } from "@/src/mock/categories";

const categoryIcons: Record<string, React.ReactNode> = {
  flowers: <Flower2 className="h-7 w-7" />,
  leaves: <Leaf className="h-7 w-7" />,
  "seeds-roots": <Settings className="h-7 w-7" />,
  industrial: <ShieldCheck className="h-7 w-7" />,
};

export default function CategoriesPage() {
  const categories = mockCategories.map((cat) => ({
    ...cat,
    icon: categoryIcons[cat.id],
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 bg-background dark:bg-dark-background">
        <section className="bg-surface-dim dark:bg-dark-surface-dim py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent dark:from-accent/10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.span
                variants={fadeUp}
                className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wider uppercase mb-6 border border-accent/20 dark:border-accent/30"
              >
                Industrial Resource Center
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6"
              >
                Botanical Classifications
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl leading-relaxed"
              >
                Categorized by physical structure and industrial application, our portfolio meets the most demanding global quality and regulatory standards.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background dark:bg-dark-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {categories.map((category) => (
                <motion.div key={category.id} variants={fadeUp}>
                  <Card className="overflow-hidden flex flex-col bg-surface dark:bg-dark-surface">
                    <div className="relative h-60 overflow-hidden bg-surface-dim dark:bg-dark-surface-dim">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                          {category.icon}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-accent bg-accent/10 dark:bg-accent/20 px-3 py-1.5 rounded-full">
                          {category.count}
                        </span>
                      </div>
                      <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                      <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm leading-relaxed mb-5">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-7">
                        {category.items.map((item, idx) => (
                          <span key={idx} className="inline-flex items-center text-[11px] font-medium text-foreground/70 dark:text-dark-foreground/70 bg-surface-dim/60 dark:bg-dark-surface-dim/60 px-3 py-1.5 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-5 border-t border-outline-variant/10 dark:border-dark-outline-variant/20">
                        <Link
                          href={`/products?category=${category.id}`}
                          className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors gap-1.5 group/link"
                        >
                          Explore Classifications
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 flip-rtl" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
