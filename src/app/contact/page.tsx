"use client";

import React from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { ContactForm } from "@/src/features/contact/contact-form";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/shared/animations";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-20 bg-background dark:bg-dark-background">
        <section className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wider uppercase mb-6 border border-accent/20">
                  Get in Touch
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6">
                  Enterprise Logistics & Inquiries
                </h1>
                <p className="text-lg text-muted-foreground dark:text-dark-muted-foreground mb-10 max-w-md leading-relaxed">
                  We partner with global pharmaceutical, wellness, and agricultural enterprises. Contact our logistics team to discuss bulk orders, certifications, and shipping requirements.
                </p>
                <div className="space-y-6 text-foreground dark:text-dark-foreground">
                  <div className="p-5 rounded-xl bg-surface dark:bg-dark-surface border border-outline-variant/10 dark:border-dark-outline-variant/20">
                    <h4 className="font-semibold mb-1 text-primary dark:text-dark-foreground">Global Headquarters</h4>
                    <p className="text-muted-foreground dark:text-dark-muted-foreground">123 Enterprise Way, Cairo, Egypt</p>
                  </div>
                  <div className="p-5 rounded-xl bg-surface dark:bg-dark-surface border border-outline-variant/10 dark:border-dark-outline-variant/20">
                    <h4 className="font-semibold mb-1 text-primary dark:text-dark-foreground">Direct Contact</h4>
                    <p className="text-muted-foreground dark:text-dark-muted-foreground">export@globalrawmaterials.com</p>
                    <p className="text-muted-foreground dark:text-dark-muted-foreground">+20 123 456 7890</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface dark:bg-dark-surface p-8 lg:p-12 rounded-xl border border-outline-variant/15 dark:border-dark-outline-variant/20 shadow-sm">
                <h3 className="font-display text-2xl font-semibold mb-8 text-primary dark:text-dark-foreground">Submit an Inquiry</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
