                "use client";

                import { motion } from "framer-motion";
                import Image from "next/image";
                import "bootstrap/dist/css/bootstrap.min.css";

                const HeroSection = () => {
                    return (
                        <section className="hero-section text-white py-5" style={{ backgroundColor: "#1a1a1a" }}>
                            <div className="container d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: "100vh" }}>
                                
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <Image
                                        src="/images/WhatsApp Image 2025-02-18 at 11.32.59.jpeg"
                                        alt="Ismerely Logo"
                                        width={180}
                                        height={180}
                                        className="rounded-circle shadow-lg"
                                        priority
                                    />
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                    className="fw-bold text-uppercase mt-2.5"
                                    style={{ fontSize: "2rem", fontFamily: "'Poppins', sans-serif" }}
                                >
                                    Nutrición <span className="text-warning">Ismerely</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="lead text-light mb-4"
                                    style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.5" }}
                                >
                                    CONSUME, COMPARTE Y CONSTRUYE
                                </motion.p>

                                <motion.div
                                    className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                                >
                                    <motion.a
                                        href="/more-products"
                                        className="btn btn-warning fw-bold px-5 py-3 shadow-sm"
                                        style={{
                                            fontSize: "1rem",
                                            borderRadius: "7px",
                                            minWidth: "120px",
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Ver Catálogo
                                    </motion.a>

                                    <motion.a
                                        href="/informacion"
                                        className="btn btn-light text-dark fw-bold px-5 py-3 shadow-sm"
                                        style={{
                                            fontSize: "1rem",
                                            borderRadius: "7px",
                                            minWidth: "120px",
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Conocer Más
                                    </motion.a>
                                </motion.div>
                            </div>
                        </section>
                    );
                };

                export default HeroSection;
