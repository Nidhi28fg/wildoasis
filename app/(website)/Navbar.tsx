"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const theme = useTheme();

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Our Cabins", href: "/explore" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <AppBar
                position="fixed"
                component="nav"
                elevation={isScrolled ? 4 : 0}
                sx={{
                    bgcolor: theme.palette.mode === "dark" ? "rgba(3, 7, 18, 0.95)" : "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(12px)",
                    transition: "all 0.5s ease",
                    py: isScrolled ? 0.5 : 1,
                    color: theme.palette.text.primary,
                    zIndex: 100
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', color: 'inherit', zIndex: 110 }}>
                            <Box sx={{ flexShrink: 0 }}>
                                <Logo width={40} height={28} />
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: '-0.025em',
                                    display: { xs: 'none', sm: 'block' }
                                }}
                            >
                                The Wild Oasis
                            </Typography>
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                            {navLinks.map((link) => (
                                <Typography
                                    key={link.href}
                                    component={Link}
                                    href={link.href}
                                    sx={{
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        textDecoration: 'none',
                                        transition: 'color 0.3s ease',
                                        color: pathname === link.href 
                                            ? 'primary.main' 
                                            : 'text.secondary',
                                        '&:hover': {
                                            color: 'primary.light',
                                        }
                                    }}
                                >
                                    {link.label}
                                </Typography>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
                            <DarkModeToggle />

                            <Button 
                                component={Link} 
                                href="/explore"
                                variant="contained"
                                color="primary"
                                sx={{ 
                                    display: { xs: 'none', sm: 'inline-flex' },
                                    borderRadius: '9999px',
                                    px: { xs: 2, md: 3 },
                                    py: { xs: 0.75, md: 1 },
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    boxShadow: 2,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Book Now
                            </Button>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={() => setIsMenuOpen(true)}
                                sx={{ display: { md: 'none' }, zIndex: 110 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            
            <Drawer
                anchor="top"
                open={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: '100%', 
                        bgcolor: 'background.default',
                        backgroundImage: 'none',
                        height: '100vh',
                        pt: 10
                    },
                }}
            >
                <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                    <IconButton size="large" onClick={() => setIsMenuOpen(false)} sx={{ color: 'text.primary' }}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
                <Box
                    sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}
                    role="presentation"
                    onClick={() => setIsMenuOpen(false)}
                    onKeyDown={() => setIsMenuOpen(false)}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mb: 4, alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <Typography
                                key={link.href}
                                component={Link}
                                href={link.href}
                                sx={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    color: pathname === link.href ? 'primary.main' : 'text.primary'
                                }}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Box>
                    
                    <Divider sx={{ mb: 4, width: '60px', borderWidth: 1, borderColor: 'text.primary' }} />
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, width: '100%', maxWidth: '280px', px: 3 }}>
                        <Typography 
                            component={Link} 
                            href="/login" 
                            sx={{ 
                                fontSize: '0.875rem', 
                                fontWeight: 500, 
                                color: 'text.secondary',
                                textDecoration: 'none'
                            }}
                        >
                            Admin Login
                        </Typography>

                        <Button 
                            component={Link} 
                            href="/explore"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                py: 1.5,
                                borderRadius: '9999px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textTransform: 'none',
                                boxShadow: 4
                            }}
                        >
                            Book Your Stay
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
