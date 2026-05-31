"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { Card, CardTitle } from "@/src/shared/ui/card";
import { Button } from "@/src/shared/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { certificates } from "@/src/mock/certificates";

export default function CertificatesPage() {
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
                Compliance & Quality Assurance
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6"
              >
                Global Certifications
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl leading-relaxed"
              >
                We maintain the highest standards of safety, quality control, and regulatory compliance. Every export shipment is accompanied by complete batch documentation.
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {certificates.map((cert) => (
                <motion.div key={cert.id} variants={fadeUp}>
                  <Link href={`/certificates/${cert.id}`} className="block h-full">
                    <Card className="h-full flex flex-col overflow-hidden cursor-pointer bg-surface dark:bg-dark-surface p-0">
                      <div className="relative h-60 overflow-hidden bg-surface-dim dark:bg-dark-surface-dim">
                        <img
                          src={cert.image}
                          alt={cert.code}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center text-[11px] font-semibold text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-900/70 border border-emerald-200/50 dark:border-emerald-700/50 px-2.5 py-1.5 rounded-full backdrop-blur-sm shadow-xs">
                            <CheckCircle className="w-3 h-3 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                            {cert.status}
                          </span>
                        </div>
                      </div>
                      <div className="p-7 flex-1 flex flex-col">
                        <span className="text-[11px] font-bold text-accent uppercase tracking-[0.15em] block mb-2">
                          {cert.code}
                        </span>
                        <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                        <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                          {cert.description}
                        </p>
                        <div className="pt-5 border-t border-outline-variant/10 dark:border-dark-outline-variant/20 flex items-center justify-between">
                          <span className="text-xs text-muted-foreground dark:text-dark-muted-foreground font-medium">
                            {cert.date}
                          </span>
                          <span className="inline-flex items-center text-sm font-semibold text-accent gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                            View Details <ArrowRight className="w-4 h-4 flip-rtl" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-surface-dim dark:bg-dark-surface-dim border-t border-outline-variant/10 dark:border-dark-outline-variant/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent dark:from-accent/10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary dark:text-dark-foreground mb-4">
              Need Batch-Specific Technical Sheets?
            </h3>
            <p className="text-muted-foreground dark:text-dark-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              We provide Phytosanitary Certificates, Certificate of Analysis (CoA), and custom lab reports upon request for all enterprise raw material shipments.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request Document Access
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
