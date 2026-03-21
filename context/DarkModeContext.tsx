"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleDarkMode as toggleDarkModeAction } from "@/store/uiSlice";

export const useDarkMode = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.ui.isDarkMode);
  const toggleDarkMode = () => dispatch(toggleDarkModeAction());
  return { isDarkMode, toggleDarkMode };
};
