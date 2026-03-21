"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar as toggleSidebarAction } from "@/store/uiSlice";

export const useGlobalContext = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.ui.isSidebarOpen);
  const toggleSidebar = () => dispatch(toggleSidebarAction());
  return { isSidebarOpen, toggleSidebar };
};
