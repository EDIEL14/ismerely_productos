                        import { useState } from 'react';
                        import 'bootstrap/dist/css/bootstrap.min.css';
                        import { useRouter } from 'next/router';

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

                                        const getGreeting = () => {
                                            const hours = new Date().getHours();
                                            if (hours < 12) {
                                                return "Hola buenos días";
                                            } else if (hours < 18) {
                                                return "Hola buenas tardes";
                                            } else {
                                                return "Hola buenas noches";
                                            }
                                        };
                                    
                                        const handleWhatsAppClick = () => {
                                            if (selectedProduct) {
                                                const message = `${getGreeting()}, vengo de la página web y estoy interesado/a en el producto de ${selectedProduct.name} y me gustaría recibir más información detallada sobre el producto y su precio por favor, ¡Gracias!`;
                                                window.open(`https://wa.me/9982140280?text=${(message)}`, '_blank');
                                            }
                                        };
                                    
                                        const filteredProducts = products.filter(product => product.flavor !== '');
                                    
                                        return (
                                            <div className="container py-5">
                                                <h1 className="text-center text-dark fw-bold display-4 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    <span className="text-primary">PRODUCTOS </span> ISMERELY
                                                </h1>
                                    
                                                <p className="text-center mb-5" style={{ fontSize: '1.25rem' }}>
                                                    🌿 DESINTOXICA, REGENERA Y NUTRE 🌿
                                                </p>
                                    
                                                <div className="row justify-content-center">
                                                    {filteredProducts.map((product) => (
                                                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                                            <div
                                                                className="card shadow-lg rounded-4 border-0 overflow-hidden"
                                                                onClick={() => setSelectedProduct(product)}
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                <img
                                                                    src={product.imageUrl}
                                                                    className="card-img-top img-fluid rounded-4"
                                                                    alt={product.name}
                                                                    style={{
                                                                        height: '350px',
                                                                        objectFit: 'cover',
                                                                        filter: 'brightness(0.8)',
                                                                        transition: 'filter 0.3s ease',
                                                                    }}
                                                                    onMouseEnter={(e) => (e.target.style.filter = 'brightness(1)')}
                                                                    onMouseLeave={(e) => (e.target.style.filter = 'brightness(0.8)')}
                                                                />
                                                                <div className="card-body text-center">
                                                                    <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
                                                                        {product.name}
                                                                    </h5>
                                    
                                                                    <p className="card-text">
                                                                        <strong>PRESENTACION:</strong> {product.presentation}
                                                                    </p>
                                    
                                                                    <button className="btn btn-info w-100 mt-3 rounded-3">
                                                                        Detalles del Producto
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                    
                                                {selectedProduct && (
                                                    <div className="modal show d-block" style={{ background: 'rgba(0, 0, 0, 0.8)' }} aria-labelledby="productModalLabel">
                                                        <div className="modal-dialog modal-lg">
                                                            <div className="modal-content rounded-4 shadow-lg border-0 overflow-hidden">
                                                                <div
                                                                    className="modal-header"
                                                                    style={{
                                                                        background: 'linear-gradient(135deg, #60e2ff 0%, #2575FC 100%)',
                                                                        padding: '20px 30px',
                                                                        borderBottom: '3px solid #ff0000',
                                                                    }}
                                                                >
                                                                    <h5 className="modal-title d-flex align-items-center" id="productModalLabel">
                                                                        PRODUCTO: {selectedProduct.name}
                                                                    </h5>
                                    
                                                                    <button
                                                                        type="button"
                                                                        className="btn-close btn-close-white"
                                                                        onClick={() => setSelectedProduct(null)}
                                                                        aria-label="Cerrar"
                                                                    ></button>
                                                                </div>
                                    
                                                                <div className="modal-body">
                                                                    <div className="row g-4">
                                                                        <div className="col-lg-6 text-center">
                                                                            <img
                                                                                src={selectedProduct.imageUrl}
                                                                                alt={selectedProduct.name}
                                                                                className="img-fluid rounded-4"
                                                                                style={{
                                                                                    maxHeight: '650px',
                                                                                    objectFit: 'cover',
                                                                                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.15)',
                                                                                }}
                                                                            />
                                                                        </div>
                                    
                                                                        <div className="col-lg-6">
                                                                            <h4 className="text-primary mb-4">DESCRIPCION y/o BENEFICIOS:</h4>
                                                                            <p>{selectedProduct.description}</p>
                                    
                                                                            <h3 className="text-primary mb-4">INGREDIENTES:</h3>
                                                                            <p>{selectedProduct.ingredients}</p>
                                    
                                                                            <h3 className="text-primary mb-4">FORMA DE USO:</h3>
                                                                            <p>{selectedProduct.usage}</p>
                                    
                                                                            {selectedProduct.flavor && (
                                                                                <>
                                                                                    <h3 className="text-primary mb-4">SABOR / SABORES:</h3>
                                                                                    <p>{selectedProduct.flavor}</p>
                                                                                </>
                                                                            )}
                                    
                                                                            <div className="mt-5 p-4 rounded-4 shadow-lg" style={{ background: '#f8f9fa' }}>
                                                                                <div className="d-flex align-items-center mb-3">
                                                                                    <strong className="fs-5 text-dark">¿Interesado/a en el producto?</strong>
                                                                                </div>
                                    
                                                                                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                                                                                    Si te interesa el producto, favor de contactar a nuestra embajadora para obtener más información detallada del producto.
                                                                                    <span className="text-primary fw-bold ms-1">¡Estamos aquí para ayudarte!</span>
                                                                                </p>
                                    
                                                                                <button
                                                                                    className="btn btn-success d-flex align-items-center justify-content-center shadow-lg mt-3"
                                                                                    onClick={handleWhatsAppClick}
                                                                                    style={{
                                                                                        fontSize: '1.1rem',
                                                                                        fontWeight: 'bold',
                                                                                        padding: '12px 24px',
                                                                                        borderRadius: '30px',
                                                                                    }}
                                                                                >
                                                                                    MANDAR MENSAJE
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                    
                                                                <div className="modal-footer border-0 d-flex justify-content-between">
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-secondary shadow-lg"
                                                                        onClick={() => setSelectedProduct(null)}
                                                                        style={{ borderRadius: '30px' }}
                                                                    >
                                                                        CERRAR
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                    
                                                <div className="text-center mt-5">
                                                    <p className="fw-bold" style={{ fontSize: '1.5rem', color: '#333', marginBottom: '20px' }}>
                                                        📢 <span style={{ color: '#2C3E50' }}></span> ¿Quieres obtener el catálogo completo?, nuestra embajadora te ayudará con eso.
                                                    </p>
                                    
                                                    <a
                                                        href={`https://wa.me/9982140280?text=${(
                                                            `${getGreeting()}, vengo de la página web y me gustaría tener el catálogo completo. ¿Podría ayudarme con eso?. Gracias`
                                                        )}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-success d-flex align-items-center justify-content-center shadow-lg mb-4"
                                                        style={{
                                                            fontSize: '1.2rem',
                                                            padding: '12px 24px',
                                                            borderRadius: '30px',
                                                            textDecoration: 'none',
                                                            fontWeight: 'bold',
                                                            transition: 'all 0.3s ease',
                                                            width: 'fit-content',
                                                            margin: '0 auto',
                                                        }}
                                                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#218c47')}
                                                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#28a745')}
                                                    >
                                                        MANDAR MENSAJE
                                                    </a>
                                                </div>
                                    
                                                <div className="text-center mt-5">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary shadow-lg"
                                                        onClick={() => router.back()}
                                                        style={{
                                                            borderRadius: "30px",
                                                            fontSize: "1.2rem",
                                                            padding: "12px 24px",
                                                            width: "fit-content",
                                                            margin: "0 auto",
                                                            transition: "all 0.3s ease",
                                                        }}
                                                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                                                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
                                                    >
                                                        REGRESAR
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    }
                                    