"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
    const theme = useTheme();

    return (
        <Box 
            component="footer" 
            sx={{ 
                bgcolor: 'background.paper', 
                borderTop: '1px solid', 
                borderColor: 'divider', 
                pt: 10, 
                pb: 5 
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} sx={{ mb: 8 }}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Logo width={40} height={28} />
                                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                                    The Wild Oasis
                                </Typography>
                            </Box>
                            <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '300px' }}>
                                Experience the tranquility of nature in our curated selection of
                                luxury cabins. A home away from home, nestled in the heart of the wild.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={2}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'text.primary', mb: 3 }}>
                            Navigation
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {['Home', 'Our Cabins', 'About Us', 'Contact'].map((item, i) => (
                                <Typography 
                                    key={i} 
                                    component={Link} 
                                    href={i === 0 ? '/' : i === 1 ? '/explore' : i === 2 ? '/about' : '/contact'} 
                                    sx={{ 
                                        color: 'text.secondary', 
                                        fontSize: '0.875rem', 
                                        textDecoration: 'none', 
                                        fontWeight: 500,
                                        transition: 'color 0.2s',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={2}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'text.primary', mb: 3 }}>
                            Legal
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {[
                                { name: 'Privacy Policy', path: '/privacy' }, 
                                { name: 'Terms of Service', path: '/terms' }
                            ].map((item, i) => (
                                <Typography 
                                    key={i} 
                                    component={Link} 
                                    href={item.path} 
                                    sx={{ 
                                        color: 'text.secondary', 
                                        fontSize: '0.875rem', 
                                        textDecoration: 'none', 
                                        fontWeight: 500,
                                        transition: 'color 0.2s',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                        <Box sx={{ 
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.02)' : 'grey.50', 
                            p: 4, 
                            borderRadius: '24px', 
                            border: '1px solid', 
                            borderColor: 'divider' 
                        }}>
                            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'text.primary', mb: 2 }}>
                                Newsletter
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', mb: 3 }}>
                                Subscribe for exclusive offers and mountain updates.
                            </Typography>
                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                <TextField 
                                    variant="outlined"
                                    placeholder="Email address"
                                    type="email"
                                    size="small"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: 'background.paper',
                                            borderRadius: '12px',
                                        }
                                    }}
                                />
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    disableElevation
                                    sx={{ 
                                        py: 1.5, 
                                        borderRadius: '12px', 
                                        fontWeight: 700,
                                        textTransform: 'none',
                                        boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.2)'
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ 
                    borderTop: '1px solid', 
                    borderColor: 'divider', 
                    pt: 5, 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    gap: 4 
                }}>
                    <Typography sx={{ 
                        color: 'text.secondary', 
                        fontSize: { xs: '10px', md: '0.75rem' }, 
                        fontWeight: 500, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.1em',
                        textAlign: { xs: 'center', md: 'left' } 
                    }}>
                        &copy; {new Date().getFullYear()} The Wild Oasis. Crafted with heart in the mountains.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        {['Instagram', 'Twitter', 'Facebook'].map((social, i) => (
                            <Typography 
                                key={i}
                                component="span"
                                sx={{ 
                                    color: 'text.secondary', 
                                    fontSize: '0.75rem', 
                                    fontWeight: 700, 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s',
                                    '&:hover': { color: 'primary.main' }
                                }}
                            >
                                {social}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
