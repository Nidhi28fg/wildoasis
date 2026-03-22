"use client";
import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "@/context/DarkModeContext";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = useTheme();

  // In standard MUI without custom theme, primary.main is #1976d2
  // We'll use a color close to indigo-600 (#4f46e5)
  const iconColor = "#4f46e5";

  return (
    <IconButton
      onClick={toggleDarkMode}
      sx={{
        p: 1.5,
        borderRadius: 1,
        transition: '0.2s',
        '&:hover': {
          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
        }
      }}
    >
      {isDarkMode ? (
        <HiOutlineSun size={20} color={iconColor} />
      ) : (
        <HiOutlineMoon size={20} color={iconColor} />
      )}
    </IconButton>
  );
};

export default DarkModeToggle;
