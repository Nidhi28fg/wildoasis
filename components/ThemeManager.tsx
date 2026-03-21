"use client";
import React, { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDarkMode } from "@/store/uiSlice";

export default function ThemeManager({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedValue = localStorage.getItem("theme");
    if (storedValue !== null) {
      dispatch(setDarkMode(JSON.parse(storedValue)));
    } else {
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      dispatch(setDarkMode(isSystemDark));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!mounted) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(isDarkMode));
    }
  }, [isDarkMode, mounted]);

  return (
    <SkeletonTheme
      baseColor={!isDarkMode ? "#efefef" : "#18212f"}
      highlightColor={!isDarkMode ? "#f3f4f6" : "#1f2937"}
    >
      {children}
    </SkeletonTheme>
  );
}
