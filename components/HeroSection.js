              "use client";

              import { motion } from "framer-motion";
              import Image from "next/image";
              import "bootstrap/dist/css/bootstrap.min.css";

              const HeroSection = () => {
                return (
                  <section
                    className="hero-section d-flex align-items-center justify-center text-white px-4"
                    style={{
                      height: "100vh",
                      background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        background: "radial-gradient(circle at center, rgba(255,165,0,0.1) 0%, rgba(0,0,0,0.8) 80%)",
                        zIndex: 0,
                      }}
                    />

                    <motion.div
                      className="container text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      style={{ zIndex: 1 }}
                    >
                      <motion.div
                        className="mx-auto mb-4"
                        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{
                          width: 150,
                          height: 150,
                          borderRadius: "50%",
                          overflow: "hidden",
                          boxShadow: "0 12px 30px rgba(255, 140, 0, 0.5)",
                        }}
                      >
                        <Image
                          src="/images/WhatsApp Image 2025-02-18 at 11.32.59.jpeg"
                          alt="Logo"
                          width={150}
                          height={150}
                          style={{ objectFit: "cover" }}
                        />
                      </motion.div>

                      <motion.h1
                        className="display-5 fw-bold text-uppercase mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        style={{
                          color: "#ffd580",
                          textShadow: "0 0 12px #ff9500, 0 0 35px #ffa500",
                        }}
                      >
                        Nutrición Ismerely
                      </motion.h1>

                      <motion.p
                        className="lead mx-auto mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{ maxWidth: 600, color: "#f8f9fa" }}
                      >
                        CONSUME, COMPARTE Y CONSTRUYE.
                      </motion.p>

                      <motion.div
                        className="d-flex flex-column flex-sm-row justify-content-center gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1 }}
                      >
                        <motion.a
                          href="/more-products"
                          className="btn btn-warning px-5 py-2 fw-bold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ borderRadius: 50 }}
                        >
                          Ver Productos
                        </motion.a>
                        <motion.a
                          href="/informacion"
                          className="btn btn-outline-light px-5 py-2 fw-bold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          style={{ borderRadius: 50 }}
                        >
                          Acerca de
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </section>
                );
              };

              export default HeroSection;
