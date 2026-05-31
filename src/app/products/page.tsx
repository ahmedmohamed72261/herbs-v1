"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { Card, CardTitle, CardImage } from "@/src/shared/ui/card";
import { Button } from "@/src/shared/ui/button";
import { Input } from "@/src/shared/ui/input";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { products, productCategories } from "@/src/mock/products";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
                Enterprise Catalog
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6"
              >
                Agricultural & Botanical Sourcing
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl leading-relaxed"
              >
                Browse our premium quality botanical extracts and dried raw materials, complete with chemical specifications and standardized shipping formats.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="py-8 bg-surface dark:bg-dark-surface border-y border-outline-variant/10 dark:border-dark-outline-variant/20 sticky top-20 z-40 backdrop-blur-md bg-surface/90 dark:bg-dark-surface/90">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-accent text-white border-accent shadow-sm"
                        : "bg-background dark:bg-dark-background text-foreground/80 dark:text-dark-foreground/80 border-outline-variant/30 dark:border-dark-outline-variant/30 hover:border-accent/40 hover:text-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-dark-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search technical catalog..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 w-full h-11 bg-background dark:bg-dark-background border-outline-variant/30 dark:border-dark-outline-variant/30"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background dark:bg-dark-background flex-grow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-outline-variant/40 dark:border-dark-outline-variant/40 rounded-2xl">
                <SlidersHorizontal className="h-12 w-12 mx-auto text-muted-foreground dark:text-dark-muted-foreground mb-4" />
                <h3 className="font-display text-xl font-bold text-primary dark:text-dark-foreground mb-2">No matching products found</h3>
                <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm">Try adjusting your filters or search keywords.</p>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={product.id}
                    >
                      <Link href={`/products/${product.id}`} className="block h-full">
                        <Card className="h-full flex flex-col overflow-hidden cursor-pointer bg-surface dark:bg-dark-surface">
                          <CardImage src={product.image} alt={product.name} />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="inline-block py-1.5 px-3 rounded-full bg-white/90 dark:bg-surface/90 backdrop-blur-sm text-foreground dark:text-dark-foreground text-[10px] font-bold tracking-wider uppercase shadow-xs">
                              {product.category}
                            </span>
                          </div>
                          <div className="p-7 flex-1 flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <CardTitle className="text-lg leading-snug flex-1">{product.name}</CardTitle>
                              <ArrowUpRight className="w-4 h-4 text-accent shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm leading-relaxed line-clamp-2">
                              {product.description}
                            </p>
                            <div className="mt-auto pt-5 flex items-center justify-between border-t border-outline-variant/10 dark:border-dark-outline-variant/20">
                              <span className="text-[11px] font-semibold text-accent uppercase tracking-widest">
                                {product.price}
                              </span>
                              <span className="text-xs font-medium text-foreground/50 dark:text-dark-foreground/50 group-hover:text-accent transition-colors">
                                View specs &rarr;
                              </span>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
