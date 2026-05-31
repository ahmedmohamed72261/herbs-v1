"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { Button } from "@/src/shared/ui/button";
import { ArrowLeft, Download, Shield } from "lucide-react";
import Link from "next/link";
import { getProductById } from "@/src/mock/products";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/shared/animations";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;

  if (!id) {
    return <div className="p-12 text-center text-foreground dark:text-dark-foreground">Product ID missing</div>;
  }

  const product = getProductById(id);

  if (!product) {
    return <div className="p-12 text-center text-foreground dark:text-dark-foreground">Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 bg-background dark:bg-dark-background">
        <section className="py-12 bg-surface-dim dark:bg-dark-surface-dim">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="text-sm mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-muted-foreground dark:text-dark-muted-foreground">
                <li><Link href="/" className="hover:text-primary dark:hover:text-dark-foreground">Home</Link></li>
                <li>/</li>
                <li><Link href="/products" className="hover:text-primary dark:hover:text-dark-foreground">Products</Link></li>
                <li>/</li>
                <li className="text-accent font-semibold">{product.name}</li>
              </ol>
            </nav>
            <Link href="/products" className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2 flip-rtl" /> Back to Catalog
            </Link>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[450px] overflow-hidden rounded-xl bg-surface dark:bg-dark-surface border border-outline-variant/20 dark:border-dark-outline-variant/30 shadow-sm">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
                  {product.category}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6">
                  {product.name}
                </h1>
                <p className="text-muted-foreground dark:text-dark-muted-foreground text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact"><Button variant="primary" size="lg">Request Quotation & Samples</Button></Link>
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download Spec Sheet (PDF)
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background dark:bg-dark-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="font-display text-3xl font-bold text-primary dark:text-dark-foreground mb-8 pb-4 border-b border-outline-variant/20 dark:border-dark-outline-variant/30">
                  Technical Quality Parameters
                </h2>
                <div className="bg-surface dark:bg-dark-surface border border-outline-variant/15 dark:border-dark-outline-variant/20 rounded-xl overflow-hidden shadow-sm">
                  <div className="divide-y divide-outline-variant/10 dark:divide-dark-outline-variant/20 text-foreground dark:text-dark-foreground">
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Botanical Classification</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.category}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Purity Guarantee</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.specifications.purity}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Maximum Moisture Content</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.specifications.moisture}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Total Ash Limit</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.specifications.ashContent}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Minimum Essential Oil Content</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.specifications.essentialOil}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Standardized Packaging</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.specifications.packaging}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Storage & Shelf Life</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{product.specifications.shelfLife}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-accent/5 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 rounded-xl flex gap-4">
                  <Shield className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-dark-foreground mb-1">Standard Triple-Lab Verification</h4>
                    <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">
                      Every export batch is analyzed by independent certified laboratories. Certificates of Analysis (CoA) and Phytosanitary declarations are issued automatically per shipping manifest.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
