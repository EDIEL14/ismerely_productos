              "use client";

              import { motion, useScroll, useTransform } from "framer-motion";
              import Image from "next/image";
              import "bootstrap/dist/css/bootstrap.min.css";

              const HeroSection = () => {

                const { scrollYProgress } = useScroll();
                const yMove = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
                const opacityFade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

                return (
                  <section
                    className="hero-section position-relative d-flex align-items-center justify-content-center"
                    style={{
                      height: "100vh",
                      overflow: "hidden",
                      backgroundColor: "#121212",
                      backgroundImage:
                        "linear-gradient(135deg, rgba(255, 165, 0, 0.2) 0%, rgba(255, 140, 0, 0.1) 100%), url('/images/hero-background.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      padding: "0 15px",
                      animation: "backgroundMove 60s linear infinite",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 80%)",
                        zIndex: 1,
                      }}
                    ></div>

                    <motion.div
                      className="container text-center text-white"
                      style={{
                        position: "relative",
                        zIndex: 10,
                        maxWidth: 1000,
                        y: yMove,
                        opacity: opacityFade,
                      }}
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                      <motion.div
                        initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        style={{
                          display: "inline-block",
                          boxShadow:
                            "0 15px 25px rgba(255, 165, 0, 0.4), 0 0 15px rgba(255, 140, 0, 0.6)",
                          borderRadius: "50%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src="/images/WhatsApp Image 2025-02-18 at 11.32.59.jpeg"
                          alt="Logo"
                          width={180}
                          height={180}
                          priority
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </motion.div>

                      <motion.h1
                        className="fw-bold text-uppercase mt-4 mb-3 shine-desktop"
                        style={{
                          fontSize: "3rem",
                          fontFamily: "'Poppins', sans-serif",
                          letterSpacing: "0.1em",
                          position: "relative",
                          color: "#fff",
                          userSelect: "none",
                          textShadow: "0 0 12px #ff9500, 0 0 35px #ffa500",
                          overflow: "hidden",
                        }}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      >
                        Nutrición Ismerely
                        <motion.span
                          className="shine"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: "-110%",
                            width: "55%",
                            height: "100%",
                            background:
                              "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                            transform: "skewX(-20deg)",
                          }}
                          animate={{ left: ["-110%", "110%"] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2.7,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                        />
                      </motion.h1>

                      <motion.p
                        className="lead mx-auto mb-4"
                        style={{
                          maxWidth: 650,
                          fontSize: "1.3rem",
                          fontStyle: "italic",
                          lineHeight: 1.5,
                          color: "rgba(255, 255, 255, 0.85)",
                          textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      >
                        CONSUME, COMPARTE Y CONSTRUYE.
                      </motion.p>

                      <motion.div
                        className="d-flex flex-column flex-sm-row justify-content-center gap-4 mt-5"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                      >
                        <motion.a
                          href="/more-products"
                          className="btn btn-warning fw-bold px-5 py-3 shadow"
                          style={{
                            fontSize: "1.15rem",
                            borderRadius: 50,
                            minWidth: 180,
                            boxShadow:
                              "0 6px 20px rgba(255, 193, 7, 0.6), 0 0 15px rgba(255, 193, 7, 0.4)",
                            transition: "all 0.3s ease",
                          }}
                          whileHover={{ scale: 1.1, boxShadow: "0 8px 30px #ffc107" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Ver Productos
                        </motion.a>

                        <motion.a
                          href="/informacion"
                          className="btn btn-light text-dark fw-bold px-5 py-3 shadow"
                          style={{
                            fontSize: "1.15rem",
                            borderRadius: 50,
                            minWidth: 180,
                            boxShadow:
                              "0 6px 20px rgba(33, 37, 41, 0.3), 0 0 15px rgba(33, 37, 41, 0.2)",
                            transition: "all 0.3s ease",
                          }}
                          whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(33,37,41,0.6)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Acerca de 
                        </motion.a>
                      </motion.div>
                    </motion.div>

                    <style jsx>{`
                      @keyframes backgroundMove {
                        0% {
                          background-position: center top;
                        }
                        100% {
                          background-position: center bottom;
                        }
                      }

                      .shine-desktop {
                        position: relative;
                        display: inline-block;
                        color: #ffb347;
                        font-weight: 900;
                        overflow: hidden;
                      }

                      /* En mobile y tablets quitamos el brillo animado */
                      @media (max-width: 1024px) {
                        .shine-desktop {
                          color: #ffb347;
                          position: static;
                        }
                        .shine-desktop > .shine {
                          display: none;
                        }
                      }
                    `}</style>
                  </section>
                );
              };

              export default HeroSection;
