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
                    <div className="container py-5" style={{ backgroundColor: '#ffffff' }}>
                        <div className="text-center mb-5 px-5 py-5 rounded" style={{ 
                            background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)', 
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)' 
                        }}>
                        <Fade cascade triggerOnce damping={0.2}>
                            <Slide direction="up" triggerOnce>
                            <h1 className="display-4 fw-bold text-dark" style={{ 
                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
                                textShadow: '1px 1px 3px rgba(0,0,0,0.1)' 
                            }}>
                                ¿QUE ES <span className="text-success">ISMERELY?</span>
                            </h1>
                            </Slide>
                            <Slide direction="up" delay={200} triggerOnce>
                            <p className="lead text-muted mx-auto" style={{ 
                                width: '90%', 
                                maxWidth: '900px', 
                                lineHeight: '1.75', 
                                fontSize: '1.25rem', 
                                letterSpacing: '0.03em',
                                textAlign: 'justify',
                                marginTop: '1rem'
                            }}>
                                Ismerely es una marca de productos que incluyen suplementos nutricionales e infusiones, basada en Nutrición Holística (Nutrición basada en plantas) y Trofología (Correcta combinación de plantas), lo que permite que cada producto ayude a su cuerpo a desintoxicar, regenerar y nutrir.
                            </p>
                            </Slide>
                        </Fade>
                        </div>

                        <Fade cascade>
                            <div className="row align-items-center my-5 p-4 rounded-lg shadow-lg" style={{ backgroundColor: '#f9f9f9' }}>
                                <div className="col-md-6 text-center text-md-start">
                                    <h3 className="fw-semibold text-dark mb-4">NUESTRA ESENCIA</h3>
                                    <p className="text-muted">
                                        Ismerely cuenta con productos que cuentan historias inspiradas en embajadores y herbolaria mexicana. 
                                        Transformamos la naturaleza para llevar sus beneficios hasta tu mesa, cuidando la esencia de cada ingrediente.
                                    </p>
                                </div>
                                <div className="col-md-6 text-center">
                                    <Image
                                        src="/images/WhatsApp Image 2025-02-19 at 11.50.30.jpeg"
                                        alt="Ismerely"
                                        width={500}
                                        height={350}
                                        className="rounded shadow-lg img-fluid"
                                    />
                                </div>
                            </div>
                        </Fade>

                        <div className="text-center mb-5">
                            <h2 className="display-5 text-primary">INFO EXTRA SOBRE ISMERELY</h2>
                        </div>

                        <div className="row justify-content-center g-4">
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
                            ].map((item, index) => (
                                <div className="col-md-6 col-lg-4" key={index}>
                                    <Fade delay={index * 200}> 
                                        <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.src}
                                                alt={item.title}
                                                width={500}
                                                height={350}
                                                className="card-img-top"
                                            />
                                            <div className="card-body text-center">
                                                <h4 className="card-title text-primary">{item.title}</h4>
                                                <p className="card-text text-muted">{item.text}</p>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            ))}
                        </div>

                                <div className="container my-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 col-xl-8">
                                    <div className="bg-light p-5 shadow rounded-lg">
                                        <h3 className="fw-bold text-primary mb-4" style={{ letterSpacing: '1.5px', fontSize: '1.9rem' }}>
                                        Nuestro Compromiso
                                        </h3>
                                        <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.75', letterSpacing: '0.03em' }}>
                                        Nos comprometemos con la calidad y la eficacia de nuestros productos mediante estrictos estándares:
                                        </p>
                                        <ul className="list-unstyled fs-5" style={{ letterSpacing: '0.05em', lineHeight: '2' }}>
                                        <li className="mb-2"><strong>✔️ Ingredientes de alta calidad</strong></li>
                                        <li className="mb-2"><strong>✔️ Elaborados con tecnología Alcaliniceutica</strong></li>
                                        <li className="mb-2"><strong>✔️ Pruebas rigurosas de calidad</strong></li>
                                        <li className="mb-2"><strong>✔️ Hechos con amor y dedicación</strong></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-10 col-xl-8">
                                    <div className="bg-light p-5 shadow rounded-lg">
                                        <h3 className="fw-bold text-primary mb-4" style={{ letterSpacing: '1.5px', fontSize: '1.9rem' }}>
                                        SISTEMA DE REGENERACIÓN ALCALINA (S-R-A)
                                        </h3>
                                        <p className="text-muted fs-5 mb-4" style={{ lineHeight: '1.75', letterSpacing: '0.03em' }}>
                                        Nuestros productos son únicos en el mundo, basados en el Sistema de Regeneración Alcalina (S-R-A). Esto significa que todos nuestros productos se mejoran bajo 3 técnicas:
                                        </p>
                                        <ul className="list-unstyled fs-5" style={{ letterSpacing: '0.03em', lineHeight: '1.9' }}>
                                        <li className="mb-3"><strong>🌱 Herbolaria:</strong> Se estudian las plantas orgánicas con propiedades medicinales que más pueden beneficiar a la gente.</li>
                                        <li className="mb-3"><strong>⚖️ Alcaliniceutica:</strong> Se estudia cómo mezclar los ingredientes naturales para que regulen la alcalinidad del cuerpo.</li>
                                        <li className="mb-3"><strong>🍃 Trofología:</strong> Se estudia cómo combinar los ingredientes para dar el máximo resultado.</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>

                        <div className="text-center mt-4">
                            <button onClick={handleRegresar} className="btn btn-primary px-4 py-2 shadow">
                                REGRESAR
                            </button>
                        </div>
                    </div>
                );
            };

            export default Informacion;
