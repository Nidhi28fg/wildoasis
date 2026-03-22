"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiShieldCheck, HiStar, HiSun } from "react-icons/hi2";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/system";

export default function HomePage() {
    const theme = useTheme();

    return (
        <Box sx={{ overflow: "hidden" }}>
             {/* Hero Section */}
             <Box component="section" sx={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", pt: 10, px: { xs: 2, md: 0 } }}>
                <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                        alt="Mountains"
                        fill
                        style={{ objectFit: 'cover', filter: theme.palette.mode === 'dark' ? 'brightness(0.4)' : 'brightness(0.6)' }}
                        priority
                    />
                    <Box sx={{ position: "absolute", inset: 0, background: theme.palette.mode === 'dark' ? 'linear-gradient(to bottom, transparent, transparent, #030712)' : 'linear-gradient(to bottom, transparent, transparent, #f8fafc)' }} />
                </Box>

                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center", mt: 6 }}>
                    <Box sx={{ 
                        display: "inline-block", 
                        px: 2, 
                        py: 0.75, 
                        bgcolor: "rgba(255,255,255,0.1)", 
                        backdropFilter: "blur(12px)", 
                        borderRadius: "9999px",
                        color: "#fff",
                        fontSize: { xs: "10px", md: "0.75rem" },
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        mb: { xs: 3, md: 4 },
                        border: "1px solid rgba(255,255,255,0.2)"
                    }}>
                        Luxury Boutique Hotel
                    </Box>
                    <Typography variant="h1" sx={{ 
                        fontSize: { xs: "2.25rem", md: "4.5rem" }, 
                        fontWeight: 700, 
                        color: "#fff", 
                        mb: { xs: 3, md: 4 }, 
                        letterSpacing: "-0.025em",
                        lineHeight: { xs: 1.2, md: 1.1 },
                        maxWidth: "800px",
                        mx: "auto"
                    }}>
                        Escape to the Heart of the <Box component="span" sx={{ color: theme.palette.primary.light, fontStyle: "italic" }}>Wilderness</Box>
                    </Typography>
                    <Typography sx={{ 
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        color: "grey.200",
                        mb: { xs: 5, md: 6 },
                        maxWidth: "600px",
                        mx: "auto",
                        fontWeight: 300,
                        lineHeight: 1.6
                    }}>
                        Discover a unique blend of untamed nature and modern luxury at our secluded boutique resort. Your sanctuary awaits.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "center", gap: { xs: 2, md: 3 } }}>
                        <Button 
                            component={Link}
                            href="/explore"
                            variant="contained"
                            color="primary"
                            endIcon={<HiArrowRight />}
                            sx={{
                                width: { xs: "100%", sm: "auto" },
                                px: 4,
                                py: 2,
                                borderRadius: "9999px",
                                fontWeight: 700,
                                fontSize: { xs: "0.875rem", md: "1rem" },
                                textTransform: "none",
                                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.3)",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)",
                                }
                            }}
                        >
                            Explore Our Cabins
                        </Button>
                        <Button 
                            component={Link}
                            href="/about"
                            sx={{
                                width: { xs: "100%", sm: "auto" },
                                px: 4,
                                py: 2,
                                bgcolor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.3)",
                                color: "#fff",
                                borderRadius: "9999px",
                                fontWeight: 700,
                                fontSize: { xs: "0.875rem", md: "1rem" },
                                textTransform: "none",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    bgcolor: "rgba(255,255,255,0.2)",
                                }
                            }}
                        >
                            Learn More
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Features Section */}
            <Container component="section" maxWidth="lg" sx={{ py: 16, px: { xs: 3, md: 0 } }}>
                <Box sx={{ textAlign: "center", mb: 10 }}>
                    <Typography variant="h2" sx={{ fontSize: "2.25rem", fontWeight: 700, mb: 3, color: "text.primary" }}>
                        Why Choose The Wild Oasis?
                    </Typography>
                    <Typography sx={{ color: "text.secondary", maxWidth: "600px", mx: "auto" }}>
                        Everything you need for a perfect getaway, meticulously designed to ensure comfort and inspiration.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper 
                            elevation={0}
                            sx={{
                                p: 4,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: "24px",
                                bgcolor: "background.paper",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    transform: "translateY(-8px)",
                                    boxShadow: theme.shadows[4]
                                }
                            }}
                        >
                            <Box sx={{ 
                                width: 56, 
                                height: 56, 
                                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.2) : alpha(theme.palette.primary.light, 0.2), 
                                borderRadius: "16px", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                mb: 3 
                            }}>
                                <HiShieldCheck size={28} color={theme.palette.primary.main} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>Ultimate Privacy</Typography>
                            <Typography sx={{ color: "text.secondary", fontSize: "0.875rem", lineHeight: 1.6 }}>
                                Our cabins represent the pinnacle of seclusion, spaced perfectly to ensure your peace and quiet.
                            </Typography>
                        </Paper>
                    </Grid>
                    
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper 
                            elevation={0}
                            sx={{
                                p: 4,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: "24px",
                                bgcolor: "background.paper",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    transform: "translateY(-8px)",
                                    boxShadow: theme.shadows[4]
                                }
                            }}
                        >
                            <Box sx={{ 
                                width: 56, 
                                height: 56, 
                                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.warning.main, 0.2) : alpha(theme.palette.warning.light, 0.2), 
                                borderRadius: "16px", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                mb: 3 
                            }}>
                                <HiSun size={28} color={theme.palette.warning.main} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>Stunning Views</Typography>
                            <Typography sx={{ color: "text.secondary", fontSize: "0.875rem", lineHeight: 1.6 }}>
                                Wake up to breathtaking panoramic views of the mountains and valleys right from your bedside.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper 
                            elevation={0}
                            sx={{
                                p: 4,
                                border: "1px solid",
                                borderColor: "divider",
                                borderRadius: "24px",
                                bgcolor: "background.paper",
                                transition: "all 0.3s ease",
                                '&:hover': {
                                    transform: "translateY(-8px)",
                                    boxShadow: theme.shadows[4]
                                }
                            }}
                        >
                            <Box sx={{ 
                                width: 56, 
                                height: 56, 
                                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.error.main, 0.2) : alpha(theme.palette.error.light, 0.2), 
                                borderRadius: "16px", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                mb: 3 
                            }}>
                                <HiStar size={28} color={theme.palette.error.main} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}>5-Star Amenities</Typography>
                            <Typography sx={{ color: "text.secondary", fontSize: "0.875rem", lineHeight: 1.6 }}>
                                From heated floors to private wine cellars, every cabin is stocked with premium amenities for your stay.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* CTA Section */}
            <Container component="section" maxWidth="lg" sx={{ pb: 16, px: { xs: 3, md: 0 } }}>
                <Box sx={{ 
                    position: "relative", 
                    borderRadius: "48px", 
                    overflow: "hidden", 
                    bgcolor: "#1e1b4b", // indigo-950
                    px: { xs: 4, md: 12 }, 
                    py: 12, 
                    textAlign: "center" 
                }}>
                    <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
                        <Image
                            src="https://images.unsplash.com/photo-1449156001404-5867cdb3f71c"
                            alt="Cabin night"
                            fill
                            style={{ objectFit: 'cover', opacity: 0.3 }}
                        />
                    </Box>
                    <Box sx={{ position: "relative", zIndex: 10 }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3rem" }, fontWeight: 700, color: "#fff", mb: 4 }}>
                            Ready for an adventure?
                        </Typography>
                        <Typography sx={{ color: "primary.light", mb: 6, maxWidth: "600px", mx: "auto" }}>
                            Book your stay today and experience the magic of the wild oasis. Your perfect getaway is just a few clicks away.
                        </Typography>
                        <Button 
                            component={Link}
                            href="/explore"
                            variant="contained"
                            sx={{
                                px: 5,
                                py: 2.5,
                                bgcolor: "#fff",
                                color: "#1e1b4b",
                                borderRadius: "9999px",
                                fontWeight: 700,
                                fontSize: "1.125rem",
                                textTransform: "none",
                                boxShadow: theme.shadows[10],
                                '&:hover': {
                                    bgcolor: "grey.50",
                                }
                            }}
                        >
                            Start Your Journey
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
