"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/src/shared/i18n/language-provider";
import { ArrowRight, ShieldCheck } from "lucide-react";

type Slide = { src: string; type: "image" | "video" };

const slides: Slide[] = [
  { src: "/slide/intro1.mp4", type: "video" },
  { src: "/slide/hero0.jpg", type: "image" },
  { src: "/slide/intro2.mp4", type: "video" },
  { src: "/slide/hero3.jpg", type: "image" },
  { src: "/slide/intro3.mp4", type: "video" },
];

export function Hero() {
  const { t, dir } = useLanguage();
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideo = slides[current].type === "video";

  useEffect(() => {
    if (videoRef.current) videoRef.current.load();
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {isVideo ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={slides[current].src} type="video/mp4" />
            </video>
          ) : (
            <motion.img
              src={slides[current].src}
              alt=""
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-500 cursor-pointer ${
              idx === current
                ? "w-10 h-2 bg-accent shadow-lg shadow-accent/30"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative max-w-xl"
        >
          <div className={`absolute top-0 ${dir === "ltr" ? "left-0" : "right-0"} w-1 h-20 bg-accent rounded-full hidden md:block`} />

          <div className={`${dir === "ltr" ? "md:pl-8" : "md:pr-8"}`}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold text-sm tracking-[0.2em] uppercase">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2 leading-[1.1]"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-accent">{t("hero.title.accent")}</span>
              <span className="text-white/60 ml-3">{t("hero.title.rest")}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-white/70 mb-10 max-w-lg leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                {t("hero.btn.products")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/certificates"
                className="inline-flex items-center justify-center h-14 px-8 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm"
              >
                {t("hero.btn.certificates")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
