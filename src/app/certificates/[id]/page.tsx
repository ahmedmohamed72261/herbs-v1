"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/src/widgets/navbar";
import { Footer } from "@/src/widgets/footer";
import { Button } from "@/src/shared/ui/button";
import { ArrowLeft, ShieldCheck, Download, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import { getCertificateById } from "@/src/mock/certificates";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/shared/animations";

export default function CertificateDetailPage() {
  const params = useParams();
  const id = params?.id as string | undefined;

  if (!id) {
    return <div className="p-12 text-center text-foreground dark:text-dark-foreground">Certificate ID missing</div>;
  }

  const cert = getCertificateById(id);

  if (!cert) {
    return <div className="p-12 text-center text-foreground dark:text-dark-foreground">Certificate not found</div>;
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
                <li><Link href="/certificates" className="hover:text-primary dark:hover:text-dark-foreground">Certifications</Link></li>
                <li>/</li>
                <li className="text-accent font-semibold">{cert.code}</li>
              </ol>
            </nav>
            <Link href="/certificates" className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4 mr-2 flip-rtl" /> Back to Compliance List
            </Link>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-[400px] rounded-xl border border-outline-variant/20 dark:border-dark-outline-variant/30 overflow-hidden shadow-sm">
                <img
                  src={cert.image}
                  alt={cert.code}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent dark:from-dark-primary/70 dark:via-dark-primary/20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="text-sm font-bold text-white/90 uppercase tracking-widest block mb-2">{cert.code}</span>
                  <h2 className="font-display text-3xl font-bold mb-2">{cert.title}</h2>
                  <div className="inline-flex items-center text-xs font-semibold bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5 mr-1" />
                    {cert.status}
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
                  Official Verification Page
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary dark:text-dark-foreground mb-6">
                  {cert.code} Compliance Validation
                </h1>
                <p className="text-muted-foreground dark:text-dark-muted-foreground text-lg mb-8 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" className="flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download Verified Certificate (PDF)
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
                  Verification Details
                </h2>
                <div className="bg-surface dark:bg-dark-surface border border-outline-variant/15 dark:border-dark-outline-variant/20 rounded-xl overflow-hidden shadow-sm">
                  <div className="divide-y divide-outline-variant/10 dark:divide-dark-outline-variant/20 text-foreground dark:text-dark-foreground">
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Certified Standards Body</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{cert.issuer}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Audit Scope</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground leading-relaxed">{cert.scope}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">License Serial Number</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground font-mono text-xs">{cert.serial}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Issuance Registry Status</span>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">{cert.status}</span>
                    </div>
                    <div className="grid grid-cols-2 p-6">
                      <span className="font-semibold text-muted-foreground dark:text-dark-muted-foreground">Next Scheduled Re-Audit</span>
                      <span className="font-semibold text-primary dark:text-dark-foreground">{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-accent/5 dark:bg-accent/10 border border-accent/20 dark:border-accent/30 rounded-xl flex gap-4">
                  <ShieldCheck className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary dark:text-dark-foreground mb-1">Secured Compliance Registry</h4>
                    <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">
                      Registration details are synchronized directly with the global accreditation authority databases. Copies can be verified by entering the license serial number on the respective registry websites.
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
