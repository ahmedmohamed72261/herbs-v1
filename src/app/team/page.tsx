"use client";

import React from "react";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/shared/animations";
import { Card, CardTitle } from "@/src/shared/ui/card";
import { ShieldCheck, Mail, Globe, Linkedin } from "lucide-react";
import { teamMembers } from "@/src/mock/team";

export default function TeamPage() {
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
                Leadership & Excellence
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6"
              >
                Our Leadership Team
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-lg text-muted-foreground dark:text-dark-muted-foreground max-w-2xl leading-relaxed"
              >
                Guided by experienced specialists in agricultural sciences, chemical analysis, international trade legislation, and custom packaging logistics.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <Card className="overflow-hidden bg-surface dark:bg-dark-surface flex flex-col h-full p-0">
                    <div className="relative h-72 overflow-hidden bg-surface-dim dark:bg-dark-surface-dim">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/90 text-white text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                          {member.department}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                      <p className="text-accent text-xs uppercase tracking-[0.15em] font-semibold mb-4">{member.role}</p>
                      <p className="text-muted-foreground dark:text-dark-muted-foreground text-sm leading-relaxed flex-1">
                        {member.bio}
                      </p>
                      <div className="flex items-center gap-3 pt-5 mt-5 border-t border-outline-variant/10 dark:border-dark-outline-variant/20">
                        <a href="#" className="w-9 h-9 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300">
                          <Mail className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300">
                          <Globe className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-surface-dim dark:bg-dark-surface-dim border-t border-outline-variant/10 dark:border-dark-outline-variant/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary dark:text-dark-foreground mb-6">
                  A Heritage Built on Quality Infrastructure
                </h3>
                <p className="text-muted-foreground dark:text-dark-muted-foreground leading-relaxed mb-6">
                  With processing centers situated near primary harvest regions, we supervise the raw materials from direct cultivation down to sealed container packaging.
                </p>
                <p className="text-muted-foreground dark:text-dark-muted-foreground leading-relaxed">
                  Our lab technicians perform triple-stage chromatography audits for essential oil concentrations, purity, and microbial standards, satisfying strict pharmaceutical benchmarks.
                </p>
              </div>
              <div className="bg-background dark:bg-dark-background border border-outline-variant/15 dark:border-dark-outline-variant/20 p-8 rounded-2xl space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/15 dark:bg-accent/25 rounded-xl shrink-0">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-dark-foreground mb-1">Guaranteed Sourcing Purity</h4>
                    <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">Zero pesticide policy and strict physical screening parameters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/15 dark:bg-accent/25 rounded-xl shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-dark-foreground mb-1">Enterprise Grade Logistics</h4>
                    <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">End-to-end container tracking with optimized export handling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
