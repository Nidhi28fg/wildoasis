"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

const SidebarToggleButton = () => {
  const { toggleSidebar } = useGlobalContext();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleSidebar}
      sx={{
        mr: 'auto',
        p: 0.75,
        borderRadius: 1,
        transition: '0.2s',
        '&:hover': {
          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
        }
      }}
    >
      <AiOutlineMenu size={20} color="#4f46e5" />
    </IconButton>
  );
};

export default SidebarToggleButton;
