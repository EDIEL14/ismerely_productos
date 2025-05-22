                'use client';

                import { useState } from 'react';
                import { motion } from 'framer-motion';
                import 'bootstrap/dist/css/bootstrap.min.css';
                import '../styles/professional-styles.css';

                const ProductList = () => {
                    const products = [
                        { id: 1, name: 'Ft - Elym', imageUrl: '/images/WhatsApp Image 2025-02-11 at 08.11.38.jpeg', benefits: ['Limpia sangre', 'Elimina toxinas', 'Alcaliniza', 'Fortalece Sistema Inmunológico', 'Ayuda a perder peso', 'Mejora la visión'] },
                        { id: 2, name: 'MyBio-Nco', imageUrl: '/images/WhatsApp Image 2025-02-11 at 08.12.10.jpeg', benefits: ['Función antiviral', 'Antitumoral', 'Desintegra miomas', 'Antioxidante', 'Ayuda al sistema inmune', 'Controla alergias'] },
                        { id: 3, name: 'FTX Plus', imageUrl: '/images/WhatsApp Image 2025-02-11 at 08.12.41.jpeg', benefits: ['Disminuye el dolor', 'Regenera cartílagos', 'Previene deformaciones', 'Aumenta flexibilidad', 'Regenera tendones'] },
                        { id: 4, name: 'MyLive-t', imageUrl: '/images/WhatsApp Image 2025-02-11 at 08.13.01.jpeg', benefits: ['Antioxidante', 'Energético', 'Evita fatiga', 'Auxiliar en depresión', 'Mejora rendimiento físico'] },
                        { id: 5, name: 'My Mahal (Caps)', imageUrl: '/images/WhatsApp Image 2025-02-11 at 08.14.09.jpeg', benefits: ['Disminuye tensión nerviosa', 'Mejora el sueño', 'Alivia fatiga muscular', 'Equilibra sistema nervioso'] },
                    ];

                    return (
                        <section id="catalogo" className="catalog-section">
                            <motion.div
                                className="container text-center header-section"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="main-title">Productos de Batalla de Alto Impacto</h2>
                                <p className="subtitle">Suplementos orgánicos para tu bienestar</p>
                            </motion.div>

                            <div className="container">
                                <div className="row justify-content-center g-4">
                                    {products.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="text-center mt-5 call-to-action"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="cta-text">Pídelo ahora: Contacta a tu embajadora de Ismerely</p>
                                <a
                                    href="https://wa.me/9982140280?text=Hola buenas, vengo de la página web y me gustaría más información detallada de los productos de alto impacto por favor."
                                    target="_blank"
                                    className="cta-button"
                                >
                                    Enviar Mensaje
                                </a>
                            </motion.div>
                        </section>
                    );
                };

                const ProductCard = ({ product }) => {
                    const [showBenefits, setShowBenefits] = useState(false);

                    return (
                        <motion.div
                            className="col-12 col-sm-6 col-lg-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="product-card">
                                <div className="image-container">
                                    <img src={product.imageUrl} alt={product.name} className="product-img" />
                                </div>
                                <div className="card-content">
                                    <h5 className="product-title">{product.name}</h5>
                                    <button
                                        className="toggle-btn"
                                        onClick={() => setShowBenefits(!showBenefits)}
                                    >
                                        {showBenefits ? 'Ocultar Beneficios' : 'Ver Beneficios'}
                                    </button>
                                    {showBenefits && (
                                        <motion.div
                                            className="benefits"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h6 className="benefits-title">BENEFICIOS:</h6>
                                            <ul className="benefits-list">
                                                {product.benefits.map((benefit, index) => (
                                                    <li key={index}>• {benefit}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                };

                export default ProductList;
