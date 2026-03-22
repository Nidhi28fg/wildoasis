'use client'
import React, {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import { useDarkMode } from "@/context/DarkModeContext";
import Box from "@mui/material/Box";

interface LogoProps{
  width?: number,
  height?: number
}

const Logo: FC<LogoProps> = ({width=112, height=80}) => {
  const {isDarkMode} = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png": "/logo-light.png"
  return (
    <Box component={Link} href="/" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: 80, position: 'relative' }}>
      <Image
        src={src}
        alt="logo"
        width={width}
        height={height}
      />
    </Box>
  );
};

export default Logo;
