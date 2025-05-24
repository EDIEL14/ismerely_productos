                    import React, { useEffect, useState } from 'react';
                    import Image from 'next/image';
                    import 'bootstrap/dist/css/bootstrap.min.css';
                    import { useRouter } from 'next/router';
                    import { Fade, Slide } from 'react-awesome-reveal';

                    const Informacion = () => {
                    const router = useRouter();
                    const [isClient, setIsClient] = useState(false);

                    useEffect(() => {
                        setIsClient(true);
                    }, []);

                    const handleRegresar = () => {
                        router.back();
                    };

                    if (!isClient) {
                        return null;
                    }

                    return (
                        <div className="container py-4 py-md-5" style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
                        {/* Header with big title */}
                        <Fade triggerOnce cascade damping={0.15}>
                            <header className="text-center mb-5 px-3 px-md-5">
                            <h1
                                className="display-4 fw-bold"
                                style={{
                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                color: '#212529',
                                letterSpacing: '0.05em',
                                textShadow: '0 1px 4px rgba(0,0,0,0.07)',
                                }}
                            >
                                ¿QUE ES <span className="text-success">ISMERELY?</span>
                            </h1>
                            <p
                                className="lead mx-auto mt-3"
                                style={{
                                maxWidth: 900,
                                fontSize: '1.15rem',
                                lineHeight: 1.8,
                                color: '#495057',
                                textAlign: 'justify',
                                letterSpacing: '0.025em',
                                userSelect: 'text',
                                }}
                            >
                                Ismerely es una marca de productos que incluyen suplementos nutricionales e infusiones,
                                basada en Nutrición Holística (Nutrición basada en plantas) y Trofología (Correcta combinación
                                de plantas), lo que permite que cada producto ayude a su cuerpo a desintoxicar, regenerar y nutrir.
                            </p>
                            </header>
                        </Fade>

                        {/* Main essence section with image left on desktop, top on mobile */}
                        <Fade direction="up" triggerOnce>
                            <section
                            className="row align-items-center bg-light shadow-sm rounded p-4 p-md-5 mb-5"
                            style={{ borderLeft: '6px solid #198754' }}
                            >
                            <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
                                <h3 className="fw-semibold text-dark mb-4" style={{ letterSpacing: '0.05em' }}>
                                NUESTRA ESENCIA
                                </h3>
                                <p className="text-muted fs-5" style={{ lineHeight: 1.7 }}>
                                Ismerely cuenta con productos que cuentan historias inspiradas en embajadores y herbolaria mexicana.
                                Transformamos la naturaleza para llevar sus beneficios hasta tu mesa, cuidando la esencia de cada ingrediente.
                                </p>
                            </div>
                            <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 d-flex justify-content-center">
                                <div
                                style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 12px 25px rgba(0,0,0,0.15)',
                                    maxWidth: '100%',
                                    maxHeight: 350,
                                    width: '100%',
                                    aspectRatio: '16 / 9',
                                    position: 'relative',
                                }}
                                className="image-container"
                                >
                                <Image
                                    src="/images/WhatsApp Image 2025-02-19 at 11.50.30.jpeg"
                                    alt="Ismerely"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                                </div>
                            </div>
                            </section>
                        </Fade>

                        {/* Info Extra Section with card grid */}
                        <div className="text-center mb-5">
                            <Fade triggerOnce>
                            <h2
                                className="display-5 text-primary fw-bold"
                                style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}
                            >
                                INFO EXTRA SOBRE ISMERELY
                            </h2>
                            </Fade>
                        </div>

                        <div className="row g-4 mb-5">
                            {[
                            {
                                src: "/images/WhatsApp Image 2025-02-12 at 13.04.35.jpeg",
                                title: "Triángulo del Bienestar",
                                text: "Un concepto clave que integra nutrición, equilibrio y desarrollo mental para una vida plena."
                            },
                            {
                                src: "/images/WhatsApp Image 2025-02-12 at 13.03.58.jpeg",
                                title: "Nuestro Sistema",
                                text: "Un sistema integral diseñado para transformar tu bienestar utilizando la naturaleza y tecnología."
                            },
                            {
                                src: "/images/WhatsApp Image 2025-02-12 at 13.05.17.jpeg",
                                title: "Nuestra Filosofía",
                                text: "La filosofía de Ismerely se centra en la conexión entre bienestar físico, mental y emocional."
                            },
                            {
                                src: "/images/WhatsApp Image 2025-02-12 at 13.04.52.jpeg",
                                title: "Nuestra Calidad y Esencia",
                                text: "Refleja la calidad y esencia de nuestros productos."
                            }
                            ].map((item, i) => (
                            <div className="col-12 col-md-6 col-lg-3" key={i}>
                                <Fade delay={i * 200} triggerOnce>
                                <div
                                    className="card h-100 border-0 shadow rounded-lg overflow-hidden"
                                    style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <div style={{ position: 'relative', height: 180 }}>
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="card-img-top"
                                        priority={i < 2} // prioritize first two images
                                    />
                                    </div>
                                    <div className="card-body text-center px-3">
                                    <h5 className="card-title text-primary fw-bold">{item.title}</h5>
                                    <p className="card-text text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                                        {item.text}
                                    </p>
                                    </div>
                                </div>
                                </Fade>
                            </div>
                            ))}
                        </div>

                        {/* Compromiso and S-R-A sections side by side on desktop, stacked on mobile */}
                        <div className="row gy-5 mb-5">
                            <Fade cascade direction="up" triggerOnce>
                            <section className="col-12 col-lg-6">
                                <div
                                className="p-4 rounded shadow-sm h-100"
                                style={{ backgroundColor: '#f7f9fa', borderLeft: '6px solid #198754' }}
                                >
                                <h3
                                    className="fw-bold text-primary mb-4"
                                    style={{ letterSpacing: '0.1em', fontSize: '1.8rem' }}
                                >
                                    Nuestro Compromiso
                                </h3>
                                <p
                                    className="text-muted fs-5 mb-4"
                                    style={{ lineHeight: 1.7, letterSpacing: '0.02em' }}
                                >
                                    Nos comprometemos con la calidad y la eficacia de nuestros productos mediante estrictos estándares:
                                </p>
                                <ul className="list-unstyled fs-5" style={{ letterSpacing: '0.04em', lineHeight: 2 }}>
                                    <li className="mb-2"><strong>✔️ Ingredientes de alta calidad</strong></li>
                                    <li className="mb-2"><strong>✔️ Elaborados con tecnología Alcaliniceutica</strong></li>
                                    <li className="mb-2"><strong>✔️ Pruebas rigurosas de calidad</strong></li>
                                    <li className="mb-2"><strong>✔️ Hechos con amor y dedicación</strong></li>
                                </ul>
                                </div>
                            </section>

                            <section className="col-12 col-lg-6">
                                <div
                                className="p-4 rounded shadow-sm h-100"
                                style={{ backgroundColor: '#f7f9fa', borderLeft: '6px solid #198754' }}
                                >
                                <h3
                                    className="fw-bold text-primary mb-4"
                                    style={{ letterSpacing: '0.1em', fontSize: '1.8rem' }}
                                >
                                    SISTEMA DE REGENERACIÓN ALCALINA (S-R-A)
                                </h3>
                                <p
                                    className="text-muted fs-5 mb-4"
                                    style={{ lineHeight: 1.7, letterSpacing: '0.02em' }}
                                >
                                    Nuestros productos son únicos en el mundo, basados en el Sistema de Regeneración Alcalina (S-R-A). Esto significa que todos nuestros productos se mejoran bajo 3 técnicas:
                                </p>
                                <ul className="list-unstyled fs-6" style={{ letterSpacing: '0.02em', lineHeight: 1.9 }}>
                                    <li className="mb-3"><strong>🌱 Herbolaria:</strong> Se estudian las plantas orgánicas con propiedades medicinales que más pueden beneficiar a la gente.</li>
                                    <li className="mb-3"><strong>⚖️ Alcaliniceutica:</strong> Se estudia cómo mezclar los ingredientes naturales para que regulen la alcalinidad del cuerpo.</li>
                                    <li className="mb-3"><strong>🍃 Trofología:</strong> Se estudia cómo combinar los ingredientes para dar el máximo resultado.</li>
                                </ul>
                                </div>
                            </section>
                            </Fade>
                        </div>

                        {/* Regresar button */}
                        <div className="d-flex justify-content-center mt-4">
                            <button
                            onClick={handleRegresar}
                            className="btn btn-danger shadow-lg px-4 py-2 fw-bold"
                            style={{
                                borderRadius: '30px',
                                fontSize: '1.1rem',
                                letterSpacing: '0.08em',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b02a37'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#dc3545'}
                            >
                            CERRAR &times;
                            </button>
                        </div>
                        </div>
                    );
                    };

                    export default Informacion;
