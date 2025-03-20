            import React, { useEffect, useState } from 'react';
            import Image from 'next/image';
            import 'bootstrap/dist/css/bootstrap.min.css';
            import { useRouter } from 'next/router';
            import { Fade } from 'react-awesome-reveal'; 

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
                        <div className="text-center mb-5">
                            <h1 className="display-4 fw-bold text-dark">
                                ¿QUE ES <span className="text-success">ISMERELY?</span>
                            </h1>
                            <p className="lead text-muted">
                                Ismerely es una marca vanguardista que ofrece productos basados en nutrición holística y trofología, diseñados para desintoxicar, regenerar y nutrir tu cuerpo de forma natural.
                            </p>
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

                        <div className="row justify-content-center my-5">
                            <div className="col-lg-8 text-center">
                                <div className="bg-light p-4 shadow-lg rounded-lg">
                                    <h3 className="fw-semibold text-primary">Nuestro Compromiso</h3>
                                    <p className="text-muted">
                                        Nos comprometemos con la calidad y la eficacia de nuestros productos mediante estrictos estándares:
                                    </p>
                                    <ul className="list-unstyled">
                                        <li><strong>✔️ Ingredientes de alta calidad</strong></li>
                                        <li><strong>✔️ Elaborados con tecnología Alcaliniceutica</strong></li>
                                        <li><strong>✔️ Pruebas rigurosas de calidad</strong></li>
                                        <li><strong>✔️ Hechos con amor y dedicación</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center my-5">
                            <div className="col-lg-8 text-center">
                                <div className="bg-light p-4 shadow-lg rounded-lg">
                                    <h3 className="fw-semibold text-primary">Fuerza de los Productos</h3>
                                    <p className="text-muted">
                                        Nuestros productos son únicos en el mundo, basados en el Sistema de Regeneración Alcalina. Están mejorados con tres técnicas esenciales:
                                    </p>
                                    <ul className="list-unstyled">
                                        <li><strong>🌱 Herbolaria:</strong> Estudio de plantas con propiedades medicinales.</li>
                                        <li><strong>⚖️ Alcaliniceutica:</strong> Regulación de la alcalinidad corporal.</li>
                                        <li><strong>🍃 Trofología:</strong> Combinación óptima de ingredientes para resultados máximos.</li>
                                    </ul>
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
