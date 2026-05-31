"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { Card, CardTitle, CardImage } from "@/src/shared/ui/card";
import { Button } from "@/src/shared/ui/button";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { products } from "@/src/mock/products";

export function FeaturedProducts() {
  const { t } = useLanguage();
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-surface-dim dark:bg-dark-surface-dim">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-4">
              {t("home.featured.title")}
            </h2>
            <p className="text-muted-foreground dark:text-dark-muted-foreground max-w-xl leading-relaxed">
              {t("home.featured.subtitle")}
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" size="md">View All Products &rarr;</Button>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <Link href={`/products/${product.id}`} className="block h-full">
                <Card className="h-full flex flex-col overflow-hidden cursor-pointer bg-surface dark:bg-dark-surface">
                  <CardImage src={product.image} alt={product.name} className="h-48" />
                  <div className="p-5 flex-1 flex flex-col">
                    <CardTitle className="text-base mb-2">{product.name}</CardTitle>
                    <p className="text-muted-foreground dark:text-dark-muted-foreground text-xs leading-relaxed line-clamp-2 flex-1">
                      {product.description}
                    </p>
                    <span className="mt-4 text-[10px] font-semibold text-accent uppercase tracking-widest">
                      {product.price}
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
