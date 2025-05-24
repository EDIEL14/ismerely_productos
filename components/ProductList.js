        'use client';

        import { useState } from 'react';
        import { motion } from 'framer-motion';
        import 'bootstrap/dist/css/bootstrap.min.css';
        import '../styles/professional-styles.css';

        const WhatsAppIcon = () => (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: 8 }}
        >
            <path
            d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 .04 5.3 0 12a11.97 11.97 0 002.06 6.46L0 24l5.65-1.85A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.22-1.25-6.25-3.48-8.52zM12 21.6a9.57 9.57 0 01-4.93-1.39l-.35-.21-3.36 1.1 1.12-3.29-.23-.34a9.54 9.54 0 013.34-15.39 9.57 9.57 0 0112.77 8.54c0 5.32-4.33 9.66-9.6 9.66zm5.33-7.92c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.14-.2.29-.76.95-.93 1.15-.17.2-.33.23-.62.08a7.18 7.18 0 01-2.11-1.31 7.99 7.99 0 01-1.48-1.83c-.16-.28 0-.43.12-.57.12-.12.27-.3.4-.45.14-.15.18-.26.27-.43.1-.17.05-.3-.03-.43-.08-.14-.66-1.58-.91-2.16-.24-.57-.49-.5-.66-.5a1.12 1.12 0 00-.64.09c-.2.1-.77.74-.77 1.82 0 1.07.79 2.11.9 2.25.12.14 1.55 2.37 3.76 3.32.53.23.94.37 1.26.47.53.15 1.02.13 1.41.08.43-.06 1.32-.54 1.5-1.06.18-.53.18-.99.13-1.08-.06-.1-.22-.16-.4-.3z"
            fill="#25D366"
            />
        </svg>
        );

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
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="main-title">Productos de Batalla de Alto Impacto</h2>
                <p className="subtitle">Suplementos orgánicos para tu bienestar</p>
            </motion.div>

            <div className="container">
                <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>

            <motion.div
                className="text-center mt-5 call-to-action"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="cta-text">Pídelos ahora: Contacta a tu embajadora de Ismerely</p>
                <a
                href="https://wa.me/9982140280?text=¡Hola! mucho gusto, vengo de la página web y me gustaría información de los productos de alto impacto ¿Podra ayudarme con eso?."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
                >
                <WhatsAppIcon />
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
            className="product-card-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <div className="product-card">
                <div className="image-container">
                <img src={product.imageUrl} alt={product.name} className="product-img" loading="lazy" />
                </div>
                <div className="card-content">
                <h5 className="product-title">{product.name}</h5>
                <button
                    className="toggle-btn"
                    onClick={() => setShowBenefits(!showBenefits)}
                    aria-expanded={showBenefits}
                    aria-controls={`benefits-${product.id}`}
                >
                    {showBenefits ? 'Ocultar Beneficios' : 'Ver Beneficios'}
                </button>
                <motion.div
                    id={`benefits-${product.id}`}
                    className="benefits"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: showBenefits ? 1 : 0, height: showBenefits ? 'auto' : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden' }}
                >
                    {showBenefits && (
                    <>
                        <h6 className="benefits-title">BENEFICIOS:</h6>
                        <ul className="benefits-list">
                        {product.benefits.map((benefit, index) => (
                            <li key={index}>• {benefit}</li>
                        ))}
                        </ul>
                    </>
                    )}
                </motion.div>
                </div>
            </div>
            </motion.div>
        );
        };

        export default ProductList;
