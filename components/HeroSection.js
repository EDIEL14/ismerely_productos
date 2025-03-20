                    "use client";

                    import { motion } from "framer-motion";
                    import Image from "next/image";
                    import "bootstrap/dist/css/bootstrap.min.css";

                    const HeroSection = () => {
                    return (
                        <section
                        className="hero-section text-white py-5"
                        style={{
                            backgroundColor: "#1a1a1a",
                            backgroundImage: "url('/images/hero-background.jpg')", // Cambia esta URL a la imagen de fondo que prefieras
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh", 
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                        }}
                        >
                        <div
                            className="container text-center"
                            style={{
                            zIndex: 5, // Para que el contenido esté por encima del fondo
                            padding: "0 15px",
                            maxWidth: "1200px",
                            }}
                        >
                            <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            >
                            <Image
                                src="/images/WhatsApp Image 2025-02-18 at 11.32.59.jpeg" 
                                alt="Logo"
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
                            className="fw-bold text-uppercase mt-4 mb-3"
                            style={{
                                fontSize: "2.5rem",
                                fontFamily: "'Poppins', sans-serif",
                                color: "#f8f9fa",
                                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", 
                            }}
                            >
                            Nutrición <span className="text-warning">Ismerely</span>
                            </motion.h1>

                            <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="lead text-light mb-4"
                            style={{
                                fontSize: "1.2rem",
                                maxWidth: "700px",
                                margin: "0 auto",
                                lineHeight: "1.6",
                                fontStyle: "italic",
                            }}
                            >
                            CONSUME, COMPARTE Y CONSTRUYE.
                            </motion.p>

                            <motion.div
                            className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-5"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                            >
                            <motion.a
                                href="/more-products"
                                className="btn btn-warning fw-bold px-5 py-3 shadow-lg"
                                style={{
                                fontSize: "1.1rem",
                                borderRadius: "50px",
                                minWidth: "180px",
                                transition: "0.3s",
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explorar Catálogo
                            </motion.a>

                            <motion.a
                                href="/informacion"
                                className="btn btn-light text-dark fw-bold px-5 py-3 shadow-lg"
                                style={{
                                fontSize: "1.1rem",
                                borderRadius: "50px",
                                minWidth: "180px",
                                transition: "0.3s",
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Más Información
                            </motion.a>
                            </motion.div>
                        </div>

                        <div
                            style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "rgba(0, 0, 0, 0.5)",
                            zIndex: 1,
                            }}
                        />
                        </section>
                    );
                    };

                    export default HeroSection;
