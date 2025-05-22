                        import { useState } from 'react';
                        import 'bootstrap/dist/css/bootstrap.min.css';
                        import { useRouter } from 'next/router';
                        import { FaTimes, FaWhatsapp } from 'react-icons/fa';
                        import 'animate.css';

                                    const products = [
                                        { id: 1, name: 'Ft - Elym (DTX)', imageUrl: '/images/WhatsApp Image 2025-02-18 at 09.53.02.jpeg', flavor: 'Mango', presentation: 'Bolsa con 250g.', description: 'Su principal beneficio es ayudar a controlar el hambre nerviosa. Acelera el proceso de digestion de los alimentos, elimina el estreñimiento. Quema grasa, elimina toxinas durante el proceso de desintoxicación, ayuda a reducir tallas. Regula los desórdenes hormonales y desinflama el estómago.', usage: 'Dos cucharadas cafeteras (8g) en 500 ml de agua.', ingredients: 'Té verde, goji, café verde, cha de bugre, jengibre, mango africano, hoja de sen, raíz de colcomeca, L-Carnitina y vitaminas C, B1, B6.' },
                                        { id: 2, name: 'Ft - Elym (Shake)', imageUrl: '/images/WhatsApp Image 2025-02-18 at 09.53.25.jpeg', flavor: 'Frutos rojos, capuchino - canela, vainilla - canela, piña - coco, chocolate - avellana, mango - tango, nuez dorada y plátano.', presentation: 'Bolsa con 500g.', description: 'Contiene 18 nutrientes esenciales. Es un alimento en polvo de acuerdo con los estándares internacional mas altos. Contiene proteínas, vitaminas, extractos vegetales y otros ingredientes de primera calidad. La buena nutrición mejora la digestión y la flora intestinal. Aporta nutrientes y calcio a los huesos, gracias a su contenido rico en calcio y colágeno. ', usage: 'Disolver 20g en un vaso con agua (8oz) y hielos.', ingredients: 'Suero de leche, proteína de soya, zinc, L-Carnitina, colágeno, quinoa, avena, levadura de cerveza.' },
                                        { id: 3, name: 'My Revenue (Shake)', imageUrl: '/images/WhatsApp Image 2025-02-18 at 09.53.53.jpeg', presentation: 'Bolsa con 500g.', description: 'Satisface los requerimientos nutricionales diarios para toda la familia (proteínas, vitaminas y minerales). Ideal para prevenir y tratar anemia y deficiencias vitamínicas, aumenta la capacidad de aprendizaje. Aporta energía y vitalidad. Evita la fatiga y el fortalecimiento de musculo, huesos, cabello, piel y uñas. Gracias a sus componentes, previene la aparición de cáncer. ', usage: 'Disolver 20g en un vaso con agua (8oz) y hielo por la mañana, endulzar con estevia natural o miel.', ingredients: 'L - Glutation (reducido) L - Taurina, L - Lusina, noni, colágeno, Resveratrol, ácido hialurónico, proteína de chícharo, proteína de arroz, proteína de soya, leche de avena, leche de coco, levadura de cerveza, celulosa, pectina de manzana, vitamina A, B1, B2, B12, C y E, zinc, magnesio, calcio, potasio, ácido fólico y sabor chocolate.' },
                                        { id: 4, name: 'OMG369', imageUrl: '/images/WhatsApp Image 2025-02-18 at 09.54.20.jpeg', presentation: 'Frasco con 60 cáps.', description: 'Excelente suplemento alimenticio para regular los niveles de glucosa en la sangre y triglicéridos. Fortalece articulaciones, músculos y huesos. Absorbe la grasa de la sangre limpiando las materias. Mejora niveles de concentración y retención.', usage: 'Como suplemento alimenticio, tomar una cápsula por la mañana y otra por la noche.', ingredients: 'Aceite de salmón, aceite de pescado, aceite de lino, aceite de oliva, aceite de soya, DHA y vitamina E.' },
                                        { id: 5, name: 'Origen Café', subtitle: 'Con Reishi, Chaga y Ganoderna', imageUrl: '/images/WhatsApp Image 2025-02-18 at 10.17.40.jpeg', flavor: 'Capuchino, chai latte, latte, coco vainilla y Black.', presentation: 'Todos (Bolsa 250g) Late (Bolsa 1Kg).', description: 'Tomar café también es una tendencia ecológica, ya que su cereza lleva un proceso más natural y potencializa sus beneficios, pues es 2 veces más antioxidante que el de mesa. Además de ayudar a quemar grasa, disminuir los niveles de glucosa y colesterol en la sangre. Gracias a los beneficios de sus ingredientes, promueve la longevidad.', usage: 'Disuelva dos cucharadas cafeteras en una taza con agua caliente o fría.', ingredients: 'Cereza de café orgánico, ganoderma, chaga, shitake, noni, mangostán, goji, L-Canitina, te verde, cocoa, taurina, goma guar, calcio, hierro vitamina A, B3 y maitake.' },
                                        { id: 6, name: 'Savera', imageUrl: '/images/WhatsApp Image 2025-02-18 at 10.18.03.jpeg', presentation: 'Bolsa con 350g, Frasco 1L.', description: 'Excelente en el problemas de gastritis, colitis, estreñimiento y agruras. Es un excelente cicatrizante en caso de ulceras gastritis. Protege la flora intestinal y previene el Cáncer de colon y diverticulosis. Reduce el colesterol, la glucosa en la sangre (diabetes) y mejora la circulación.', usage: 'Una cucharadita en 500ml de agua caliente o fría, por la mañana, por la noche o como agua de uso.', ingredients: 'Aloe vera en polvo, acai, gutation reducido (70%), goji, arándano, vitamina A, vitamina B3, vitamina C, moringa, cuachalalat, fenogreco, caléndula, hierba del pollo, muicle, lactobacillus acidophilus, lactobacillus sporegenes, lactobacillus rhamnosus, inulina de agave, cbp y piña en polvo.' },
                                        { id: 7, name: 'BeGreen ', imageUrl: '/images/WhatsApp Image 2025-02-18 at 10.18.28.jpeg', presentation: 'Frasco con 1L (Única Presentación).', description: 'Excelente desinflamante, elimina toxinas, mejora la circulación, contribuye a la aceleración de la digestión, cicatriza y reconstruye tejidos, limpia el hígado, elimina el mal aliento, incrementa los niveles de oxígeno en los huesos, mejora la vista, regula el pH.', usage: 'Tomar una copita (20ml) dos veces al día antes del desayuno y comida.', ingredients: 'Alga espirulina, te verde, alfalfa, hierbabuena, menta, agua purificada, clorofila, vitamina C y estevia.' },
                                        { id: 8, name: 'My Belly (caps)', imageUrl: '/images/WhatsApp Image 2025-02-18 at 10.18.58.jpeg', presentation: ' Frasco con 60 cáps.', description: 'Interviene en la reparación de los tejidos, fortalece la piel, uñas quebradizas, cabello debilitado con tendencia a caerse, piel deshidratada o flácida. Evita el envejecimiento prematuro, el colágeno es necesario para un bien funcionamiento de los huesos, tejidos, cartílago, ligamentos, tendones y articulaciones.', usage: 'tomar una cápsula 20 min antes del desayuno y de la comida.', ingredients: 'Colágeno marino, elástica, vitamina E, aceite de almendras, aceite de semillas de uva, jalea real, vitamina C, D y K, ácido hialurónico, Glutation, biotina, calcio, magnesio, potasio, yodo y selenio.' },
                                        { id: 9, name: 'My Sir -  Q (caps)', imageUrl: '/images/WhatsApp Image 2025-02-18 at 10.19.16.jpeg', presentation: 'Frasco con 60 cáps.', description: 'Mejora la circulación, coadyuva en problemas de varices, hemorroides, flebitis, trombosis, moretones, hormigueo, dolor de piernas y entumecimiento. Mejora la flexibilidad y actúa como regulador de la presión arterial.', usage: 'Tomar una cápsula 20 minutos antes del desayuno y de la comida.', ingredients: 'Castaño de indias, centella asiática, lecitina de soya, rusco, cola de caballo, aceite de girasol, amamelis, chaya, limón, semilla de chia y semilla de uva.' },
                                        { id: 10, name: 'A - Coff (Jarabe)', imageUrl: '/images/WhatsApp Image 2025-02-18 at 10.19.34.jpeg', presentation: 'Frasco con 250 ml.', description: 'Auxiliar en enfermedades respiratorias y pulmonares, como catarro, gripa, asma, congestión nasal. Sube los niveles de plaquetas en la sangre. Limpia las vías respiratorias, desinflama las anginas y disminuye los síntomas de bronquitis.', usage: 'Tomar una cucharada cada 4 horas. De preferencia tomar junto con un té caliente.', ingredients: 'Abango, caléndula, miel de abeja, bugambilia, rábano yodado, menta, propóleo, vitamina C, extracto natural de gordolobo, sauco, romero, malva, mercadela, ajo, limón y cebolla morada.' },
                                        { id: 11, name: 'My GS - Trel (Caps)', imageUrl: '/images/WhatsApp Image 2025-02-20 at 21.29.27.jpeg', presentation: 'Frasco con 60 cáps.', description: 'El Sistema digestivo es el encargado de transformar los alimentos para que las celulas del organismo absorban los nutrientes y los usen como energia. Alivia los sintomas de las gastritis, acidez estomacal, digestion, diarrea y ulceras gastricas.', usage: 'Tome una capsula 20 minutos antes ndel desayuno y de la comida.', ingredients: 'Lactobacillos, nopal, fenogreco, tepezcohuite, malva, tlanchichinole, angelica, calendula, ajo, romero, sabila, te verde, muerdago, curcuma, cuachalalate, cancerina, vitamina B3, menta blanca, dioxido de silicio y capsula de gelatina.' },
                                        { id: 12, name: 'My Riury (Caps)', imageUrl: '/images/WhatsApp Image 2025-02-20 at 21.30.14.jpeg', presentation: 'Frasco con 60 cáps.', description: 'Desinflama las vias urinarias, riñones, vejiga, prostata y corrige su funcionamiento. Elimina sustancias toxicas de la sangre, acido urico y retencion de liquidos a traves de la orina. Evita infecciones vagibnales.', usage: 'Tomar una capscula 20 minutos antes del desayuno y de la comida.', ingredients: 'Hierba del sapo, enebro, pinguica, guasima, cuachalalate, taray, pelos de elote diente de leon, palo azul, cardo mariano, cola de caballo, alcachofa, cascara sagrada, boldo y riñonina.' }
                                    ];

                                    export default function ProductGallery() {
                                        const router = useRouter();
                                        const [selectedProduct, setSelectedProduct] = useState(null);
                                        const infoBoxStyle = {
                                            backgroundColor: '#f7f9fa',
                                            padding: '1rem 1.25rem',
                                            borderRadius: '16px',
                                            boxShadow: '0 6px 12px rgba(0,0,0,0.07)',
                                            color: '#34495e',
                                            };

                                            const infoBoxTitleStyle = {
                                            marginBottom: '0.75rem',
                                            color: '#34495e',
                                            fontWeight: '700',
                                            };
                
                                        const handleWhatsAppClick = () => {
                                            if (selectedProduct) {
                                                const message = `¡Hola!, vengo de la página web y estoy interesado/a en el producto de ${selectedProduct.name} y me gustaría recibir más informacion sobre el producto y su precio por favor.`;
                                                const encodedMessage = encodeURIComponent(message);
                                                window.open(`https://wa.me/9982140280?text=${encodedMessage}`, '_blank');
                                            }
                                        };
                                        
                                        const filteredProducts = products.filter(product => product.flavor !== '');
                                    
                                                return (

                                        <div
                                        className="container py-5"
                                        style={{
                                            fontFamily: "'Poppins', sans-serif",
                                            userSelect: 'none',
                                        }}
                                        >
                                        <h1
                                            className="text-center fw-bold mb-4"
                                            style={{
                                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                            color: '#222',
                                            letterSpacing: '0.1em',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            animation: 'slideInFromLeft 1s ease forwards',
                                            }}
                                        >
                                            PRODUCTOS{' '}
                                            <span
                                            className="text-primary"
                                            style={{
                                                position: 'relative',
                                                display: 'inline-block',
                                                animation: 'pulseColor 2.5s ease-in-out infinite',
                                            }}
                                            >
                                            ISMERELY
                                            <span
                                                style={{
                                                position: 'absolute',
                                                bottom: '-6px',
                                                left: 0,
                                                right: 0,
                                                height: '6px',
                                                background:
                                                    'linear-gradient(90deg, #3BB33B, #34a853, #2E7D32)',
                                                borderRadius: '3px',
                                                animation: 'expandWidth 3s ease-in-out infinite',
                                                transformOrigin: 'left',
                                                opacity: 0.7,
                                                zIndex: -1,
                                                }}
                                            />
                                            </span>
                                        </h1>

                                        <p
                                            className="text-center mx-auto"
                                            style={{
                                            maxWidth: '450px',
                                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                            color: '#555',
                                            letterSpacing: '0.05em',
                                            fontWeight: 500,
                                            animation: 'fadeInUp 1.5s ease forwards',
                                            opacity: 0,
                                            marginBottom: '2.5rem',
                                            }}
                                        >
                                            🌿 DESINTOXICA, REGENERA Y NUTRE 🌿
                                        </p>
                                        
                                        <style>
                                            {`
                                            @keyframes slideInFromLeft {
                                                0% {
                                                transform: translateX(-50px);
                                                opacity: 0;
                                                }
                                                100% {
                                                transform: translateX(0);
                                                opacity: 1;
                                                }
                                            }

                                            @keyframes pulseColor {
                                                0%, 100% {
                                                color: #3BB33B;
                                                text-shadow: 0 0 8px #3BB33B;
                                                }
                                                50% {
                                                color: #2E7D32;
                                                text-shadow: 0 0 15px #2E7D32;
                                                }
                                            }

                                            @keyframes expandWidth {
                                                0%, 100% {
                                                width: 50%;
                                                opacity: 0.7;
                                                }
                                                50% {
                                                width: 90%;
                                                opacity: 1;
                                                }
                                            }

                                            @keyframes fadeInUp {
                                                to {
                                                opacity: 1;
                                                transform: translateY(0);
                                                }
                                                from {
                                                opacity: 0;
                                                transform: translateY(15px);
                                                }
                                            }
                                            `}
                                        </style>

                            <div className="row g-4 justify-content-center">
                            {filteredProducts.map((product) => (
                                <div
                                key={product.id}
                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                                style={{ perspective: '1000px' }} 
                                >
                                <div
                                    className="product-card bg-white rounded-4 shadow-sm overflow-hidden d-flex flex-column h-100"
                                    onClick={() => setSelectedProduct(product)}
                                    style={{
                                    cursor: 'pointer',
                                    transformStyle: 'preserve-3d',
                                    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.03) rotateX(3deg)';
                                    e.currentTarget.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0)';
                                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <div className="position-relative overflow-hidden" style={{ height: '400px' }}>
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-100 h-100"
                                        style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease, filter 0.4s ease',
                                        filter: 'brightness(0.95)',
                                        }}
                                        onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                        e.currentTarget.style.filter = 'brightness(1)';
                                        }}
                                        onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'brightness(0.95)';
                                        }}
                                    />
                                    <div
                                        className="position-absolute bottom-0 start-0 w-100 px-3 py-2"
                                        style={{
                                        background: 'rgba(0, 0, 0, 0.4)',
                                        color: '#fff',
                                        fontWeight: '600',
                                        fontSize: '1.1rem',
                                        backdropFilter: 'blur(5px)',
                                        borderTopRightRadius: '1rem',
                                        }}
                                    >
                                        {product.name}
                                    </div>
                                    </div>

                                    <div className="p-3 d-flex flex-column flex-grow-1">
                                    <p
                                        className="text-muted flex-grow-1 mb-3"
                                        style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em' }}
                                    >
                                        <strong>Presentación:</strong> {product.presentation}
                                    </p>

                                    <button
                                        className="btn btn-success rounded-pill fw-semibold py-2"
                                        style={{
                                        fontSize: '1rem',
                                        boxShadow: '0 4px 12px rgba(72, 180, 97, 0.5)',
                                        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#3BB33B';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 179, 59, 0.7)';
                                        }}
                                        onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(72, 180, 97, 0.5)';
                                        }}
                                    >
                                        Ver información
                                    </button>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>

                {selectedProduct && (
                  <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content border-0 rounded-4 shadow-lg">

                        <button
                          type="button"
                          className="btn btn-danger position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle shadow"
                          style={{ width: '40px', height: '40px', zIndex: 1051 }}
                          onClick={() => setSelectedProduct(null)}
                        >
                          <FaTimes />
                        </button>

                        <div className="modal-body p-4">

                          <h3 className="text-center fw-bold mb-4 text-dark">
                            {selectedProduct.name.toUpperCase()}
                          </h3>

                          <div className="row g-4">

                            <div className="col-12 col-lg-5">
                              <div className="bg-light rounded-4 shadow-sm overflow-hidden p-3 text-center h-100">
                                <img
                                  src={selectedProduct.imageUrl}
                                  alt={selectedProduct.name}
                                  className="img-fluid rounded-3"
                                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                                />
                              </div>
                            </div>

                            <div className="col-12 col-lg-7">
                              <div className="d-flex flex-column gap-4">

                                <div className="card border-0 shadow-sm rounded-4">
                                  <div className="card-body">
                                    <h5 className="card-title text-primary">Descripción y Beneficios</h5>
                                    <p className="card-text text-muted">{selectedProduct.description}</p>
                                  </div>
                                </div>

                                <div className="card border-0 shadow-sm rounded-4">
                                  <div className="card-body">
                                    <h5 className="card-title text-primary">Ingredientes</h5>
                                    <p className="card-text text-muted">{selectedProduct.ingredients}</p>
                                  </div>
                                </div>

                                <div className="card border-0 shadow-sm rounded-4">
                                  <div className="card-body">
                                    <h5 className="card-title text-primary">Forma de Uso</h5>
                                    <p className="card-text text-muted">{selectedProduct.usage}</p>
                                  </div>
                                </div>

                                {selectedProduct.flavor && (
                                  <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-body">
                                      <h5 className="card-title text-primary">Sabor / Sabores</h5>
                                      <p className="card-text text-muted">{selectedProduct.flavor}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 text-center">
                            <h5 className="fw-bold text-success mb-3">¿Te interesa este producto?</h5>
                            <p className="text-muted mb-3">Contácta directamente a nuestra embajadora para que te de más información detallada o para hacer tu pedido.</p>
                            <button
                              onClick={handleWhatsAppClick}
                              className="btn btn-success btn-lg d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm"
                            >
                              <FaWhatsapp size={20} />
                              Ir a Contactarla
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                    <div className="container my-5">
                    <div
                        className="mx-auto p-4 p-md-5 rounded-4 shadow contact-box text-center"
                        style={{
                        maxWidth: '600px',
                        background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
                        }}
                    >
                        <div className="mb-4">
                        <h4 className="fw-bold text-secondary mb-2" style={{ fontSize: '1.5rem' }}>
                            ¿Quieres obtener el catálogo completo?
                        </h4>
                        <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                            Pídeselo a nuestra embajadora por WhatsApp.
                        </p>
                        </div>

                        <a
                        href={`https://wa.me/9982140280?text=${encodeURIComponent(
                            '¡Hola! mucho gusto, vengo de la página web y me gustaría obtener el catálogo completo. ¿Podría ayudarme con eso?'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success rounded-pill px-4 py-2 fw-semibold shadow-sm d-inline-flex align-items-center gap-2"
                        style={{
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 6px 12px rgba(40,167,69,0.4)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#28b65d';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(40,167,69,0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#198754';
                            e.currentTarget.style.boxShadow = '0 6px 12px rgba(40,167,69,0.4)';
                        }}
                        >
                        <FaWhatsapp size={20} /> ENVIAR MENSAJE
                        </a>
                    </div>
                    </div>

                                            
                                                <button
                                                    type="button"
                                                    className="btn btn-danger px-4 py-2 rounded-pill fw-semibold"
                                                    onClick={() => router.back()}
                                                    style={{ transition: 'all 0.3s ease' }}
                                                >
                                                    REGRESAR
                                                </button>
                                    </div> )};
