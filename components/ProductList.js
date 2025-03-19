                'use client';

                import { useState } from 'react';
                import 'bootstrap/dist/css/bootstrap.min.css';
                import 'animate.css';
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
                        <section id="catalogo" className="py-5 bg-light">
                            <div className="container text-center mb-4">
                                <h2 className="fw-bold text-dark animate__animated animate__fadeIn">PRODUCTOS DE BATALLA</h2>
                                <p className="fs-5 text-muted animate__animated animate__fadeIn animate__delay-1s">Suplementos orgánicos de alto impacto</p>
                            </div>

                            <div className="container">
                                <div className="row g-4">
                                    {products.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mt-5 animate__animated animate__fadeIn animate__delay-2s">
                                <p className="fs-5 fw-semibold text-dark">Pídelo: Contacta a tu embajadora Olivia de Ismerely</p>
                                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                                    <a
                                        href={`https://wa.me/9982140280?text${
                                            `Hola ${getGreeting()} Vengo de la página web y me gustaría más información detallada de los productos de alto impacto. Gracias.`
                                        }`}
                                        target="_blank"
                                        className="btn btn-success px-4 py-2 rounded shadow-sm animate__animated animate__bounceIn"
                                    >
                                        MANDAR MENSAJE
                                    </a>
                                </div>
                            </div>
                        </section>
                    );
                };

                const ProductCard = ({ product }) => {
                    const [showBenefits, setShowBenefits] = useState(false);

                    return (
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg rounded animate__animated animate__fadeInUp">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="card-img-top rounded-top img-fluid"
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold text-dark">{product.name}</h5>
                                    <div className="d-grid gap-2">
                                        <button
                                            className="btn btn-outline-dark"
                                            onClick={() => setShowBenefits(!showBenefits)}
                                        >
                                            {showBenefits ? 'Ocultar Beneficios' : 'Ver Beneficios'}
                                        </button>
                                    </div>
                                    {showBenefits && (
                                        <div className="mt-3 p-3 border rounded bg-light text-start animate__animated animate__fadeIn animate__delay-1s">
                                            <h6 className="fw-bold text-dark">BENEFICIOS:</h6>
                                            <ul className="list-unstyled">
                                                {product.benefits.map((benefit, index) => (
                                                    <li key={index} className="text-dark">• {benefit}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                };

                const getGreeting = () => {
                    const hour = new Date().getHours();
                    if (hour < 12) {
                        return "buenos días";
                    } else if (hour < 18) {
                        return "buenas tardes";
                    } else {
                        return "buenas noches";
                    }
                };

                export default ProductList;
