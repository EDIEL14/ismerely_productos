            import React from 'react';
            import Image from 'next/image';
            import 'bootstrap/dist/css/bootstrap.min.css';
            import { useRouter } from 'next/router';

            const Informacion = () => {
                const router = useRouter(); 

                const handleRegresar = () => {
                    router.back(); 
                };

                return (
                    <div className="container py-5" style={{ backgroundColor: '#f4f7fb' }}>

                        <div className="row justify-content-center text-center mb-5">
                            <div className="col-lg-8 col-md-10 col-sm-12">
                                <h2 className="display-4 fw-bold mb-4 text-primary">
                                    ¿Qué es <span className="highlight text-info">Ismerely</span>?
                                </h2>
                                <p className="lead text-muted mb-4">
                                    ISMERELY es una marca de productos que incluyen suplementos nutricionales e infusiones, basados en Nutrición Holística (basada en plantas) y Trofología (correcta combinación de plantas), para ayudarte a desintoxicar, regenerar y nutrir tu cuerpo.
                                </p>
                            </div>
                        </div>

                        <div className="row align-items-center mt-5">
                            <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
                                <h3 className="fw-semibold text-dark mb-4">Nuestra Esencia</h3>
                                <p className="text-muted">
                                    Ismerely cuenta la historia de nuestros embajadores a través de cada uno de nuestros productos. Habla de la esencia contenida en los productos de herbolaria milenaria mexicana, transformando su naturaleza para llevarlos hasta tu mesa.
                                </p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <Image
                                    src="/images/WhatsApp Image 2025-02-19 at 11.50.30.jpeg"
                                    alt="Ismerely"
                                    layout="responsive"
                                    width={600}
                                    height={400}
                                    className="rounded shadow-lg img-fluid"
                                />
                            </div>
                        </div>

                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                <div className="bg-white p-5 shadow-lg rounded">
                                    <h3 className="fw-semibold mb-3 text-primary">Nuestro Compromiso</h3>
                                    <p className="text-muted mb-4">
                                        Nuestro mayor compromiso es asegurar la calidad y eficacia de nuestros productos. Aseguramos estos estándares con normas rigurosas:
                                    </p>
                                    <ul className="list-unstyled">
                                        <li><strong>1. Ingredientes excelentes</strong></li>
                                        <li><strong>2. Hechos con tecnología Alcaliniceutica</strong></li>
                                        <li><strong>3. Pruebas rigurosas</strong></li>
                                        <li><strong>4. Elaborados con amor</strong></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                <div className="bg-white p-5 shadow-lg rounded">
                                    <h3 className="fw-semibold mb-3 text-primary">La Fuerza de los Productos</h3>
                                    <p className="text-muted mb-4">
                                        Nuestros productos son los únicos en el mundo basados en el Sistema de Regeneración Alcalina. Esto significa que se mejoran mediante tres técnicas:
                                    </p>
                                    <ul className="list-unstyled mb-4">
                                        <li><strong>Herbolaria:</strong> Estudio de plantas orgánicas con propiedades medicinales.</li>
                                        <li><strong>Alcaliniceutica:</strong> Regulación de la alcalinidad corporal.</li>
                                        <li><strong>Trofología:</strong> Combinación óptima de ingredientes para resultados máximos.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                <h2 className="display-4 fw-bold mb-4 text-primary">Más Información sobre Ismerely</h2>
                                <p className="lead text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    Sumérgete en los pilares que definen Ismerely, donde la salud, la naturaleza y la tecnología se unen para transformar tu bienestar integral.
                                </p>
                            </div>
                        </div>

                        <div className="row justify-content-center mb-5">
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/WhatsApp Image 2025-02-12 at 13.04.35.jpeg"
                                        alt="Triángulo del Bienestar"
                                        layout="responsive"
                                        width={600}
                                        height={400}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-primary mb-3">Triángulo del Bienestar</h4>
                                        <p className="card-text text-muted">
                                            El Triángulo del Bienestar integra la nutrición, el equilibrio y el desarrollo mental como pilares fundamentales para una vida plena.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/WhatsApp Image 2025-02-12 at 13.03.58.jpeg"
                                        alt="Nuestro Sistema"
                                        layout="responsive"
                                        width={600}
                                        height={400}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-primary mb-3">Nuestro Sistema</h4>
                                        <p className="card-text text-muted">
                                            Nuestro sistema está diseñado para transformar tu bienestar de forma integral, utilizando la naturaleza y tecnología para maximizar los resultados.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card shadow-lg border-0 rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/WhatsApp Image 2025-02-12 at 13.05.17.jpeg"
                                        alt="Filosofía Ismerely"
                                        layout="responsive"
                                        width={600}
                                        height={400}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-primary mb-3">Conoce Nuestra Filosofía</h4>
                                        <p className="card-text text-muted">
                                            Nuestra filosofía enfatiza la conexión entre el bienestar físico, mental y emocional, siendo fundamental para vivir una vida plena.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                                <div>
                                    <Image
                                        src="/images/WhatsApp Image 2025-02-12 at 13.04.52.jpeg"
                                        alt="Imagen Final"
                                        layout="responsive"
                                        width={600}
                                        height={400}
                                        className="rounded shadow-lg img-fluid"
                                    />
                                    <p className="text-muted mt-3">
                                        Esta es una imagen que representa la calidad y esencia de nuestros productos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleRegresar} className="btn btn-primary mb-4 mt-3">
                            Regresar
                        </button>
                    </div>
                );
            };

            export default Informacion;
