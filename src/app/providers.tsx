"use client";

import React, { useEffect } from "react";
import { LanguageProvider } from "@/src/shared/i18n/language-provider";
import { useThemeStore } from "@/src/shared/store/theme-store";

function ThemeInit({ children }: { children: React.ReactNode }) {
  const setTheme = useThemeStore((s) => s.setTheme);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeInit>{children}</ThemeInit>
    </LanguageProvider>
  );
}
