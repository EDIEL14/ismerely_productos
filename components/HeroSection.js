                "use client";

                import { useEffect, useState } from "react";
                import Image from "next/image";
                import "bootstrap/dist/css/bootstrap.min.css";

                const HeroSection = () => {
                    const [isClient, setIsClient] = useState(false);

                    useEffect(() => {
                        setIsClient(true);
                    }, []);

                    if (!isClient) return null;

                    return (
                        <section className="hero-section text-center text-white py-5" style={{ backgroundColor: "#1a1a1a" }}>
                            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
                                
                                <Image
                                    src="/images/WhatsApp Image 2025-02-18 at 11.32.59.jpeg"
                                    alt="Ismerely Logo"
                                    width={200}
                                    height={200}
                                    className="rounded-circle shadow-sm mb-4"
                                    priority
                                />
                                
                                <h1 className="fw-bold text-uppercase mb-3" style={{ fontSize: "3rem", fontFamily: "'Poppins', sans-serif" }}>
                                    Nutricion <span className="text-warning"> Ismerely</span>
                                </h1>

                                <p className="lead text-light mb-4" style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.5" }}>
                                    CONSUME, COMPARTE Y CONSTRUYE
                                </p>

                                <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mt-4">
                                    
                                    <a
                                        href="/more-products"
                                        className="btn btn-warning fw-bold px-5 py-3 shadow-sm mb-3 mb-md-0"
                                        style={{
                                            fontSize: "1.1rem",
                                            borderRadius: "8px",
                                            minWidth: "200px",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                                    >
                                        Explorar Catálogo
                                    </a>

                                    <a
                                        href="/informacion"
                                        className="btn btn-light text-dark fw-bold px-5 py-3 shadow-sm"
                                        style={{
                                            fontSize: "1.1rem",
                                            borderRadius: "8px",
                                            minWidth: "200px",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                                        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                                    >
                                        Conocer más de Ismerely
                                    </a>
                                </div>
                            </div>
                        </section>
                    );
                };

                export default HeroSection;
