"use client";

import React from 'react'
import { useState, useRef, useEffect, useCallback } from 'react';

const slides = [
    { nome: 'foto1', img: '/imagens/foto1.jpeg' },
    { nome: 'foto2', img: '/imagens/foto2.jpeg' },
    { nome: 'foto3', img: '/imagens/foto3.jpg' },
    { nome: 'foto4', img: '/imagens/foto4.jpg' },
    { nome: 'foto5', img: '/imagens/foto5.jpg' },
    { nome: 'foto6', img: '/imagens/foto6.jpg' },
    { nome: 'foto7', img: '/imagens/foto7.jpg' },
    { nome: 'foto8', img: '/imagens/foto8.jpg' },
    { nome: 'foto9', img: '/imagens/foto9.jpg' },
];

const prints = [
    { nome: 'p1', print: '/imagens/print1.jpeg' },
    { nome: 'p2', print: '/imagens/print2.jpeg' },
    { nome: 'p3', print: '/imagens/print3.jpeg' },
    { nome: 'p4', print: '/imagens/print4.jpeg' },
    { nome: 'p5', print: '/imagens/print5.jpeg' },
];

export function trackEvent(name, params = {}) {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", name, params);
    }
}

/* ═══════════════════════════════════════ */
/* FAQ COMPONENT                          */
/* ═══════════════════════════════════════ */
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                type="button"
            >
                <span itemProp="name">{question}</span>
                <span className={`faq-icon ${isOpen ? 'open' : ''}`} aria-hidden="true">+</span>
            </button>
            <div
                className={`faq-answer ${isOpen ? 'open' : ''}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                role="region"
            >
                <p itemProp="text">{answer}</p>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════ */
/* MAIN PAGE                              */
/* ═══════════════════════════════════════ */
function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);
    const touchStartX = useRef(null);
    const planosRef = useRef(null);

    useEffect(() => {
        trackEvent("ViewContent", {
            content_name: "Consultoria Online Personal Trainer",
            content_type: "product_group",
            category: "fitness_online"
        });
    }, []);

    // Scroll reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        els.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Auto-slide for before/after photos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const scrollToPlanos = () => {
        planosRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const videos = [
        './imagens/video1.mp4',
        './imagens/video2.mp4',
        './imagens/video3.mp4'
    ];

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        if (diff > 50 && currentVideo < videos.length - 1) {
            setCurrentVideo((prev) => prev + 1);
        } else if (diff < -50 && currentVideo > 0) {
            setCurrentVideo((prev) => prev - 1);
        }
        touchStartX.current = null;
    };

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    const nextSlide2 = () => setCurrentIndex2((prev) => (prev + 1) % prints.length);
    const prevSlide2 = () => setCurrentIndex2((prev) => (prev - 1 + prints.length) % prints.length);

    const current = slides[currentIndex];
    const current2 = prints[currentIndex2];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "@id": "https://brunoduartepersonal.com.br/#service",
                "name": "Bruno Duarte Personal - Consultoria Online",
                "description": "Consultoria fitness online personalizada para mulheres com mais de 30 anos. Treino, alimentação e acompanhamento direto.",
                "url": "https://brunoduartepersonal.com.br",
                "logo": "https://brunoduartepersonal.com.br/imagens/logo.png",
                "image": "https://brunoduartepersonal.com.br/imagens/brunoduarte.jpg",
                "telephone": "+553196450850",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Belo Horizonte",
                    "addressRegion": "MG",
                    "addressCountry": "BR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": -19.9167,
                    "longitude": -43.9345
                },
                "priceRange": "R$97 - R$128",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "300",
                    "bestRating": "5"
                },
                "sameAs": [
                    "https://www.instagram.com/brunoduartepersonal"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Planos de Consultoria Online",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "name": "Plano Anual",
                            "description": "Consultoria online com treino personalizado, app de treinos, 8 treinos renovados a cada 45 dias, suporte via WhatsApp e e-book.",
                            "price": "97.70",
                            "priceCurrency": "BRL",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "price": "97.70",
                                "priceCurrency": "BRL",
                                "unitText": "mês",
                                "billingDuration": "P1Y"
                            },
                            "availability": "https://schema.org/LimitedAvailability",
                            "url": "https://buy.stripe.com/aFa00ifnF7dzda6bMEfQI0E"
                        },
                        {
                            "@type": "Offer",
                            "name": "Plano Semestral",
                            "description": "Consultoria online com treino personalizado, app de treinos, 4 treinos renovados a cada 45 dias, suporte via WhatsApp e e-book.",
                            "price": "107.70",
                            "priceCurrency": "BRL",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "price": "107.70",
                                "priceCurrency": "BRL",
                                "unitText": "mês",
                                "billingDuration": "P6M"
                            },
                            "availability": "https://schema.org/LimitedAvailability",
                            "url": "https://buy.stripe.com/eVqbJ08Zh55r4DA180fQI0F"
                        },
                        {
                            "@type": "Offer",
                            "name": "Plano Trimestral",
                            "description": "Consultoria online com treino personalizado, app de treinos, 2 treinos renovados a cada 45 dias e suporte via WhatsApp.",
                            "price": "127.70",
                            "priceCurrency": "BRL",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "price": "127.70",
                                "priceCurrency": "BRL",
                                "unitText": "mês",
                                "billingDuration": "P3M"
                            },
                            "availability": "https://schema.org/LimitedAvailability",
                            "url": "https://buy.stripe.com/9B6eVc5N57dzgmicQIfQI0G"
                        }
                    ]
                }
            },
            {
                "@type": "Person",
                "@id": "https://brunoduartepersonal.com.br/#person",
                "name": "Bruno Duarte",
                "jobTitle": "Personal Trainer",
                "description": "Personal Trainer com mais de 15 anos de experiência, especialista em treino feminino para mulheres acima de 30 anos.",
                "image": "https://brunoduartepersonal.com.br/imagens/brunoduarte.jpg",
                "url": "https://brunoduartepersonal.com.br",
                "sameAs": [
                    "https://www.instagram.com/brunoduartepersonal"
                ],
                "knowsAbout": [
                    "Personal Training",
                    "Musculação Feminina",
                    "Emagrecimento",
                    "Alta Performance",
                    "Treino para mulheres 30+"
                ],
                "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name": "Graduação em Educação Física"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://brunoduartepersonal.com.br/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Funciona mesmo para quem tem mais de 30 anos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Com certeza. A consultoria foi pensada especialmente para mulheres 30+. Levo em conta as mudanças hormonais, a desaceleração do metabolismo e a rotina corrida. É um plano feito para o seu corpo."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Consigo resultados treinando em casa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim! O treino é personalizado de acordo com o local onde você treina — em casa, academia ou alternando entre os dois."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Preciso seguir uma dieta restritiva?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "De jeito nenhum. Trabalho com orientação alimentar prática e flexível, baseada nas suas preferências. O objetivo é criar hábitos sustentáveis."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como é feito o acompanhamento?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Diretamente comigo via WhatsApp. Toda semana avalio sua evolução, tiro dúvidas e faço ajustes no treino e alimentação."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Tenho pouco tempo, funciona mesmo assim?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Funciona. A maioria das alunas são mães e profissionais com rotinas intensas. Monto treinos otimizados para o tempo disponível — seja 30 minutos ou 1 hora."
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Início",
                        "item": "https://brunoduartepersonal.com.br"
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className='font-light' role="main">
                {/* ═══════════════════════════════════════ */}
                {/* WHATSAPP FLOAT                         */}
                {/* ═══════════════════════════════════════ */}
                <a
                    href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                        trackEvent("Contact", {
                            content_name: "WhatsApp Consultoria Online",
                            content_type: "contact"
                        });
                    }}
                >
                    <div className='buttonHover bg-green-500 rounded-full p-2 fixed z-50 bottom-4 right-4 shadow-lg shadow-green-500/20'>
                        <img src='./imagens/whatsapp.svg' className='w-[42px]' alt="WhatsApp" />
                    </div>
                </a>

                {/* ═══════════════════════════════════════ */}
                {/* HERO SECTION                           */}
                {/* ═══════════════════════════════════════ */}
                <header role="banner">
                    <section className='text-white relative' aria-label="Apresentação da consultoria online">
                        <div className='text-center px-4 pt-6 pb-2 relative z-10 max-w-[800px] mx-auto'>
                            {/* Logo */}
                            <div className='flex justify-center animate-fadeIn'>
                                <img src='./imagens/logo.png' className='w-[110px]' alt="Bruno Duarte Personal" />
                            </div>

                            {/* Tag de autoridade */}
                            <div className='mt-5 animate-fadeInUp' style={{ animationDelay: '0.2s' }}>
                                <span className='highlight-tag bg-bgreen/10 text-bgreen border border-bgreen/20'>
                                    +300 mulheres transformadas
                                </span>
                            </div>

                            {/* Headline principal */}
                            <h1 className='text-[24px] sm:text-[30px] font-psemibold mt-6 leading-[30px] sm:leading-[38px] animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
                                Você tem <span className='text-bgreen text-glow'>mais de 30 anos</span> e sente que seu corpo não responde mais como antes?
                            </h1>

                            {/* VSL Video */}
                            <div className='flex justify-center mt-8 animate-fadeInUp' style={{ animationDelay: '0.8s' }}>
                                <video
                                    className="bg-neutral-900 rounded-2xl w-full max-w-[700px] border border-neutral-700/50 shadow-2xl shadow-black/50"
                                    src="https://res.cloudinary.com/dsgkc7epl/video/upload/v1761693312/28-10-25_v%C3%ADdeo_final_nfcfnb.mp4"
                                    poster="./imagens/thumb.JPEG"
                                    controls
                                    playsInline
                                />
                            </div>

                            {/* Sub-headline */}
                            <p className='text-[16px] sm:text-[18px] text-neutral-300 mt-8 leading-[24px] animate-fadeInUp max-w-[600px] mx-auto' style={{ animationDelay: '0.6s' }}>
                                Chega de treinos genéricos que não funcionam. Eu vou te mostrar o <span className='font-medium text-white'>caminho exato</span> para reconquistar sua confiança, secar a gordura e esculpir o corpo que você merece — <span className='text-bgreen font-medium'>mesmo com a rotina corrida.</span>
                            </p>
                        </div>

                        {/* CTA Hero */}
                        <div className='text-center mt-4 pb-8 animate-fadeInUp' style={{ animationDelay: '1.1s' }}>
                            <button
                                onClick={() => {
                                    trackEvent("Lead", {
                                        content_name: "CTA Principal",
                                        content_type: "primary_cta"
                                    });
                                    scrollToPlanos();
                                }}
                                className='cta-button'
                            >
                                <span>QUERO TRANSFORMAR MEU CORPO →</span>
                            </button>
                        </div>
                    </section>
                </header>

                {/* ═══════════════════════════════════════ */}
                {/* STATS SECTION                          */}
                {/* ═══════════════════════════════════════ */}
                <section className='py-10 px-4' aria-label="Números e estatísticas">
                    <div className='section-divider'></div>
                    <div className='reveal flex justify-center mb-10 mt-10 gap-6 sm:gap-12 max-w-[600px] mx-auto'>
                        <div className='text-center'>
                            <p className='stat-number'>15+</p>
                            <p className='stat-label'>Anos de<br />experiência</p>
                        </div>
                        <div className='w-[1px] bg-neutral-800'></div>
                        <div className='text-center'>
                            <p className='stat-number'>300+</p>
                            <p className='stat-label'>Alunas<br />transformadas</p>
                        </div>
                        <div className='w-[1px] bg-neutral-800'></div>
                        <div className='text-center'>
                            <p className='stat-number'>98%</p>
                            <p className='stat-label'>Taxa de<br />satisfação</p>
                        </div>
                    </div>
                    <div className='section-divider'></div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* "ISSO É PRA VOCÊ" SECTION              */}
                {/* ═══════════════════════════════════════ */}
                <section className='text-white px-4 py-10' aria-label="Para quem é a consultoria">
                    <div className='max-w-[650px] mx-auto'>
                        <div className='reveal text-center'>
                            <span className='highlight-tag bg-red-500/10 text-red-400 border border-red-500/20'>
                                Pare de se sabotar
                            </span>
                            <h2 className='text-[28px] sm:text-[34px] font-psemibold mt-4 leading-[34px] sm:leading-[40px]'>
                                Se você se identifica com <span className='text-bgreen'>pelo menos uma</span> dessas situações...
                            </h2>
                            <p className='text-neutral-400 mt-3 text-[15px]'>
                                ...então essa consultoria foi feita sob medida para você.
                            </p>
                        </div>

                        <div className='mt-8 space-y-3'>
                            {[
                                { text: 'Passou dos 30 e percebeu que o metabolismo desacelerou — o que funcionava antes, não funciona mais.', delay: 0 },
                                { text: 'Quer emagrecer e definir sem dietas malucas, sem passar fome e sem perder sua saúde.', delay: 0.1 },
                                { text: 'Já tentou diversos treinos por conta própria, mas nunca conseguiu manter a consistência.', delay: 0.15 },
                                { text: 'Está cansada de treinos genéricos da internet que ignoram seu corpo, sua rotina e suas limitações.', delay: 0.2 },
                                { text: 'Quer se olhar no espelho e sentir orgulho — vestir aquela roupa, ir à praia com confiança.', delay: 0.25 },
                                { text: 'Precisa de um profissional de verdade que entenda o corpo feminino depois dos 30.', delay: 0.3 },
                                { text: 'Tem uma rotina puxada com trabalho, filhos e responsabilidades, mas não quer mais se colocar em último lugar.', delay: 0.35 },
                            ].map((item, i) => (
                                <div key={i} className='reveal glass-card p-4 flex items-start gap-3' style={{ transitionDelay: `${item.delay}s` }}>
                                    <img className="w-[32px] mt-0.5 flex-shrink-0" src="./imagens/check.png" alt="" />
                                    <p className='text-[14.5px] sm:text-[15px] leading-[21px] text-neutral-200'>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='text-center mt-8 reveal'>
                            <button
                                onClick={() => {
                                    trackEvent("ScrollToPlans", {
                                        content_name: "Me identifiquei",
                                        content_type: "engagement"
                                    });
                                    scrollToPlanos();
                                }}
                                className='cta-button'
                            >
                                <span>QUERO COMEÇAR</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* ANTES & DEPOIS                        */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-10' aria-label="Resultados de alunas">
                    <div className="reveal-scale max-w-[650px] mx-auto">
                        <div className='text-center mb-6'>
                            <span className='highlight-tag bg-bgreen/10 text-bgreen border border-bgreen/20'>
                                Prova real
                            </span>
                            <h2 className='text-[28px] sm:text-[34px] font-psemibold mt-4 text-white leading-[34px]'>
                                Resultados que <span className='text-bgreen text-glow'>falam por si</span>
                            </h2>
                            <p className='text-neutral-400 mt-2 text-[15px]'>
                                Mulheres reais, com rotinas reais, que decidiram mudar.
                            </p>
                        </div>

                        <div className="glass-card p-4 sm:p-6">
                            <div className="relative flex items-center justify-center">
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-1 z-20 bg-neutral-700/70 backdrop-blur-sm buttonHover text-white rounded-full p-1.5"
                                >
                                    <img className="w-[22px]" src="./imagens/setaesq.png" alt="Anterior" />
                                </button>

                                <div className="w-[90%] max-w-[500px] h-auto relative overflow-hidden rounded-xl">
                                    <img
                                        src={current.img}
                                        alt={`Resultado ${current.nome}`}
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="absolute right-1 z-20 bg-neutral-700/70 backdrop-blur-sm buttonHover text-white rounded-full p-1.5"
                                >
                                    <img className="w-[22px]" src="./imagens/setadir.png" alt="Próximo" />
                                </button>
                            </div>

                            {/* Dots */}
                            <div className='flex justify-center gap-1.5 mt-4'>
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-full transition-all duration-300 ${i === currentIndex
                                            ? 'bg-bgreen w-[20px] h-[6px]'
                                            : 'bg-neutral-600 w-[6px] h-[6px]'
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            <div className='text-center mt-5'>
                                <button
                                    onClick={() => {
                                        trackEvent("ScrollToPlans", {
                                            content_name: "Resultados reais",
                                            content_type: "engagement"
                                        });
                                        scrollToPlanos();
                                    }}
                                    className='cta-button'
                                >
                                    <span>QUERO SER A PRÓXIMA →</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* O QUE VOCÊ RECEBE                     */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-10 text-white' aria-label="O que está incluído na consultoria">
                    <div className='max-w-[650px] mx-auto'>
                        <div className='reveal text-center'>
                            <span className='highlight-tag bg-bgreen/10 text-bgreen border border-bgreen/20'>
                                Método exclusivo
                            </span>
                            <h2 className='text-[28px] sm:text-[34px] font-psemibold mt-4 leading-[34px]'>
                                Não é <span className='text-bgreen'>só um treino.</span>
                            </h2>
                            <p className='text-neutral-400 mt-2 text-[15px] max-w-[500px] mx-auto'>
                                É o plano completo que vai mudar a sua relação com o seu corpo — de uma vez por todas.
                            </p>
                        </div>

                        <div className='h-[650px] relative bg-bgreen rounded-[20px] overflow-hidden mt-8 reveal-scale sm:max-w-[500px] sm:mx-auto'>
                            <div>
                                <div className='absolute left-0 text-left font-regular text-black p-5'>
                                    <div className='leading-[23px]'>
                                        <p className='text-[19px]'>Seu plano</p>
                                        <p className='text-[28px] font-psemibold'>personalizado.</p>
                                    </div>
                                    <div className='mt-[120px] leading-[19px] text-[15.5px]'>
                                        <p>Pensado para o <span className='font-psemibold'>seu corpo,</span></p>
                                        <p>a <span className='font-psemibold'>sua rotina</span> e os <span className='font-psemibold'>seus objetivos.</span></p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='absolute z-10 bottom-0 space-y-3 text-[13.5px] leading-[18px] font-medium w-full p-3'>
                                        <div className='flex justify-center space-x-3 w-full'>
                                            <div className='w-[50%] h-[105px] p-3 rounded-xl bg-neutral-800/60 backdrop-blur-xl text-white text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                                <p>🏋️‍♀️ Treino 100% personalizado para o corpo feminino 30+</p>
                                            </div>
                                            <div className='w-[50%] h-[105px] p-3 rounded-xl bg-neutral-800/60 backdrop-blur-xl text-white text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                                <p>🥗 Orientação alimentar sem dietas restritivas</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center space-x-3'>
                                            <div className='w-[50%] h-[105px] p-3 rounded-xl bg-neutral-800/60 backdrop-blur-xl text-white text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                                <p>📱 App com vídeos, instruções e atualizações mensais</p>
                                            </div>
                                            <div className='w-[50%] h-[105px] p-3 rounded-xl bg-neutral-800/60 backdrop-blur-xl text-white text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                                <p>💬 Acompanhamento direto comigo via WhatsApp</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img src='./imagens/principal.png' className='absolute -right-[35px] w-[350px] mt-3' alt="Personal Trainer" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* CONVERSAS / PRINTS                    */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-10 text-white'>
                    <div className='max-w-[500px] mx-auto'>
                        <div className='reveal text-center'>
                            <h2 className='text-[28px] font-psemibold'>
                                Trabalho <span className='text-bgreen'>SÉRIO,</span>
                            </h2>
                            <p className='text-[18px]'>Método que <span className='font-medium'>FUNCIONA.</span></p>
                        </div>

                        <div className='reveal-scale glass-card p-4 mt-6'>
                            <p className="text-[20px] text-center font-medium">Conversas <span className='text-bgreen'>reais</span></p>
                            <div className='bg-neutral-800 rounded-xl p-2 mt-4'>
                                <div className='relative rounded-lg overflow-hidden'>
                                    <div className='relative w-full max-h-[380px] xl:max-h-[580px] bg-neutral-700 overflow-hidden flex justify-center items-center'>
                                        <span
                                            onClick={prevSlide2}
                                            className='z-20 left-1 bg-neutral-600/80 backdrop-blur-sm rounded-full p-[4px] absolute cursor-pointer buttonHover'
                                        >
                                            <img className="w-[22px]" src="./imagens/setaesq.png" alt="" />
                                        </span>
                                        <span
                                            onClick={nextSlide2}
                                            className='z-20 right-1 bg-neutral-600/80 backdrop-blur-sm rounded-full p-[4px] absolute cursor-pointer buttonHover'
                                        >
                                            <img className="w-[22px]" src="./imagens/setadir.png" alt="" />
                                        </span>
                                        <img
                                            src='./imagens/logo.png'
                                            className='absolute w-10 right-[4px] bottom-[4px] z-10 opacity-60'
                                            alt='Logo'
                                        />
                                        <img
                                            src={current2.print}
                                            className='w-full h-full object-cover transition-all duration-500'
                                            alt='Depoimento'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* DICAS DE TREINO (VÍDEOS)              */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-10 text-white'>
                    <div className='max-w-[400px] mx-auto'>
                        <div className='reveal text-center mb-6'>
                            <h2 className='text-[28px] font-psemibold'>Conteúdo que <span className='text-bgreen'>transforma</span></h2>
                            <p className='text-neutral-400 text-[14px] mt-1'>Dicas exclusivas para maximizar seus resultados</p>
                        </div>
                        <div
                            className='reveal-scale h-[550px] mx-auto overflow-hidden relative rounded-2xl border border-neutral-700/50'
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className='flex items-center justify-center h-full relative'>
                                {videos.map((src, index) => (
                                    <video
                                        key={index}
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`w-full h-full absolute top-0 object-cover brightness-[40%] transition-opacity duration-500 ${index === currentVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                    />
                                ))}
                                <div className='absolute z-10 bottom-0 w-full p-4'>
                                    <div className='space-y-1'>
                                        <p className='font-psemibold text-[22px] text-bgreen'>Dicas de treino</p>
                                        <p className='leading-[20px] text-neutral-300 text-[14px]'>Vídeos práticos para você executar os exercícios com perfeição.</p>
                                    </div>
                                    <div className='flex justify-center mt-3'>
                                        <div className='h-[15px] p-1.5 px-8 bg-bgreen/90 rounded-full flex justify-center items-center gap-1.5'>
                                            {videos.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`rounded-full transition-all duration-300 ${index === currentVideo
                                                        ? 'bg-black w-[17px] h-[6px]'
                                                        : 'bg-black/50 w-[6px] h-[6px]'
                                                        }`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* COMO FUNCIONA                         */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-10 text-white' aria-label="Como funciona o processo">
                    <div className='max-w-[600px] mx-auto'>
                        <div className='reveal text-center'>
                            <span className='highlight-tag bg-bgreen/10 text-bgreen border border-bgreen/20'>
                                Simples e direto
                            </span>
                            <h2 className='text-[28px] sm:text-[34px] font-psemibold mt-4'>
                                Como funciona?
                            </h2>
                            <p className='text-neutral-400 mt-2 text-[15px]'>
                                3 passos para a sua transformação começar
                            </p>
                        </div>

                        <div className='mt-8 space-y-4'>
                            <div className='reveal glass-card p-5' style={{ transitionDelay: '0s' }}>
                                <div className='flex items-start gap-4'>
                                    <div className='step-circle'>1</div>
                                    <div>
                                        <p className='text-[20px] font-psemibold text-bgreen'>Análise completa</p>
                                        <p className='text-neutral-300 text-[14px] mt-2 leading-[21px]'>
                                            Após a confirmação, você preenche um formulário detalhado: sua rotina, nível de treino, preferências, horários, limitações e fotos do seu físico atual. <span className='text-white font-medium'>Eu preciso te conhecer a fundo para montar o plano perfeito.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='reveal glass-card p-5' style={{ transitionDelay: '0.15s' }}>
                                <div className='flex items-start gap-4'>
                                    <div className='step-circle'>2</div>
                                    <div>
                                        <p className='text-[20px] font-psemibold text-bgreen'>Plano sob medida</p>
                                        <p className='text-neutral-300 text-[14px] mt-2 leading-[21px]'>
                                            Com base nas suas informações, eu monto seu protocolo <span className='text-white font-medium'>do zero</span>. Treino + orientação alimentar em até 5 dias úteis. Nada de planilha genérica — é feito <span className='text-white font-medium'>exclusivamente para você.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='reveal glass-card p-5' style={{ transitionDelay: '0.3s' }}>
                                <div className='flex items-start gap-4'>
                                    <div className='step-circle'>3</div>
                                    <div>
                                        <p className='text-[20px] font-psemibold text-bgreen'>Acompanhamento real</p>
                                        <p className='text-neutral-300 text-[14px] mt-2 leading-[21px]'>
                                            Toda semana eu avalio e ajusto o seu plano. Mudou a rotina? Sentiu dificuldade? Estagnação? <span className='text-white font-medium'>Eu estou do seu lado para corrigir a rota e acelerar os seus resultados.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* PLANOS                                */}
                {/* ═══════════════════════════════════════ */}
                <section ref={planosRef} className='px-4 py-10 text-white' id="planos" aria-label="Planos e preços">
                    <div className='max-w-[1200px] mx-auto'>
                        <div className='reveal text-center'>
                            <span className='highlight-tag bg-bgreen/10 text-bgreen border border-bgreen/20'>
                                Escolha o seu plano
                            </span>
                            <h2 className='text-[28px] sm:text-[34px] font-psemibold mt-4'>
                                Invista em <span className='text-bgreen'>você</span>
                            </h2>
                            <p className='text-neutral-400 mt-2 text-[15px] max-w-[450px] mx-auto'>
                                Quanto mais tempo de acompanhamento, mais resultados consistentes e duradouros.
                            </p>
                        </div>

                        <div className='reveal mt-4'>
                            <p className="text-[15px] text-center text-neutral-300 max-w-[500px] mx-auto py-4 border-y border-neutral-800">
                                <span className="text-yellow-400 font-medium">⚠️ Atenção:</span> após finalizar a compra, <span className="font-medium text-red-400">não feche a página.</span> Você será redirecionada para responder a anamnese.
                            </p>
                        </div>

                        <div className='mt-8 space-y-4 lg:flex lg:gap-5 lg:justify-center lg:space-y-0'>
                            {/* PLANO ANUAL */}
                            <div className='reveal-scale plan-card plan-card-featured lg:w-[380px] max-w-[470px] mx-auto lg:mx-0' style={{ transitionDelay: '0s' }}>
                                <div className='bg-gradient-to-br from-bgreen to-green-500 p-4 space-y-2 text-black'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[22px] font-psemibold'>Anual</p>
                                        <span className='bg-black text-bgreen rounded-full px-3 py-1 text-[11px] font-psemibold tracking-wider uppercase'>
                                            Mais vendido
                                        </span>
                                    </div>
                                    <div className='flex items-baseline gap-1'>
                                        <p className='font-bold text-[32px]'>R$97,70</p>
                                        <span className='text-[16px] font-regular opacity-70'>/mês</span>
                                    </div>
                                    <p className='text-[12px] font-medium opacity-60'>O melhor custo-benefício para resultados definitivos</p>
                                    <div className='pt-3'>
                                        <button
                                            onClick={() => {
                                                trackEvent("InitiateCheckout", {
                                                    content_name: "Plano Anual",
                                                    content_type: "subscription",
                                                    value: 97.7,
                                                    currency: "BRL"
                                                });
                                                window.open("https://buy.stripe.com/aFa00ifnF7dzda6bMEfQI0E", "_blank");
                                            }}
                                            className="buttonHover font-psemibold bg-black text-bgreen p-3.5 w-full rounded-xl text-[17px] transition-all"
                                        >
                                            QUERO ESSE PLANO →
                                        </button>
                                    </div>
                                </div>
                                <div className='space-y-2.5 p-5 text-neutral-200 text-left text-[14px]'>
                                    {[
                                        'App exclusivo de acesso aos treinos',
                                        'Planilha personalizada de treinos',
                                        'Vídeos demonstrativos de cada exercício',
                                        <><span className="font-medium text-white">8 treinos</span> renovados a cada 45 dias</>,
                                        'Suporte direto comigo via WhatsApp',
                                        'E-book completo para o seu objetivo',
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div className='flex items-center gap-2.5'>
                                                <img className="w-[26px]" src="./imagens/check.png" alt="" />
                                                <p className='leading-[20px]'>{item}</p>
                                            </div>
                                            {i < 5 && <hr className='border-neutral-800 mt-2.5' />}
                                        </div>
                                    ))}
                                </div>
                                <p className="font-extralight text-[11.5px] text-neutral-500 px-5 pb-4">Cancelamento antecipado sujeito à taxa de uma mensalidade.</p>
                            </div>

                            {/* PLANO SEMESTRAL */}
                            <div className='reveal-scale plan-card lg:w-[380px] max-w-[470px] mx-auto lg:mx-0' style={{ transitionDelay: '0.15s' }}>
                                <div className='bg-neutral-800 p-4 space-y-2'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[22px] font-psemibold'>Semestral</p>
                                    </div>
                                    <div className='flex items-baseline gap-1'>
                                        <p className='font-bold text-[32px]'>R$107,70</p>
                                        <span className='text-[16px] font-regular text-neutral-400'>/mês</span>
                                    </div>
                                    <p className='text-[12px] font-medium text-neutral-500'>Equilíbrio perfeito entre compromisso e resultado</p>
                                    <div className='pt-3'>
                                        <button
                                            onClick={() => {
                                                trackEvent("InitiateCheckout", {
                                                    content_name: "Plano Semestral",
                                                    content_type: "subscription",
                                                    value: 107.7,
                                                    currency: "BRL"
                                                });
                                                window.open("https://buy.stripe.com/eVqbJ08Zh55r4DA180fQI0F", "_blank");
                                            }}
                                            className="buttonHover font-psemibold bg-bgreen text-black p-3.5 w-full rounded-xl text-[17px]"
                                        >
                                            QUERO ESSE PLANO →
                                        </button>
                                    </div>
                                </div>
                                <div className='space-y-2.5 p-5 text-neutral-200 text-left text-[14px]'>
                                    {[
                                        'App exclusivo de acesso aos treinos',
                                        'Planilha personalizada de treinos',
                                        'Vídeos demonstrativos de cada exercício',
                                        <><span className="font-medium text-white">4 treinos</span> renovados a cada 45 dias</>,
                                        'Suporte direto comigo via WhatsApp',
                                        'E-book completo para o seu objetivo',
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div className='flex items-center gap-2.5'>
                                                <img className="w-[26px]" src="./imagens/check.png" alt="" />
                                                <p className='leading-[20px]'>{item}</p>
                                            </div>
                                            {i < 5 && <hr className='border-neutral-800 mt-2.5' />}
                                        </div>
                                    ))}
                                </div>
                                <p className="font-extralight text-[11.5px] text-neutral-500 px-5 pb-4">Cancelamento antecipado sujeito à taxa de uma mensalidade.</p>
                            </div>

                            {/* PLANO TRIMESTRAL */}
                            <div className='reveal-scale plan-card lg:w-[380px] max-w-[470px] mx-auto lg:mx-0' style={{ transitionDelay: '0.3s' }}>
                                <div className='bg-neutral-800 p-4 space-y-2'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[22px] font-psemibold'>Trimestral</p>
                                    </div>
                                    <div className='flex items-baseline gap-1'>
                                        <p className='font-bold text-[32px]'>R$127,70</p>
                                        <span className='text-[16px] font-regular text-neutral-400'>/mês</span>
                                    </div>
                                    <p className='text-[12px] font-medium text-neutral-500'>Ideal para começar sua jornada de transformação</p>
                                    <div className='pt-3'>
                                        <button
                                            onClick={() => {
                                                trackEvent("InitiateCheckout", {
                                                    content_name: "Plano Trimestral",
                                                    content_type: "subscription",
                                                    value: 127.7,
                                                    currency: "BRL"
                                                });
                                                window.open("https://buy.stripe.com/9B6eVc5N57dzgmicQIfQI0G", "_blank");
                                            }}
                                            className="buttonHover font-psemibold bg-bgreen text-black p-3.5 w-full rounded-xl text-[17px]"
                                        >
                                            QUERO ESSE PLANO →
                                        </button>
                                    </div>
                                </div>
                                <div className='space-y-2.5 p-5 text-neutral-200 text-left text-[14px]'>
                                    {[
                                        'App exclusivo de acesso aos treinos',
                                        'Planilha personalizada de treinos',
                                        'Vídeos demonstrativos de cada exercício',
                                        '2 treinos renovados a cada 45 dias',
                                        'Suporte direto comigo via WhatsApp',
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <div className='flex items-center gap-2.5'>
                                                <img className="w-[26px]" src="./imagens/check.png" alt="" />
                                                <p className='leading-[20px]'>{item}</p>
                                            </div>
                                            {i < 4 && <hr className='border-neutral-800 mt-2.5' />}
                                        </div>
                                    ))}
                                    <div>
                                        <div className='flex items-center gap-2.5'>
                                            <img className="w-[26px]" src="./imagens/close.png" alt="" />
                                            <p className='leading-[20px] text-neutral-500'>E-book completo para o seu objetivo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* SOBRE / AUTORIDADE                    */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-14 text-white' aria-label="Sobre Bruno Duarte" itemScope itemType="https://schema.org/Person">
                    <div className='max-w-[900px] mx-auto'>
                        <div className='reveal text-center mb-8'>
                            <span className='highlight-tag bg-bgreen/10 text-bgreen border border-bgreen/20'>
                                Quem vai te guiar
                            </span>
                        </div>

                        <div className='xl:flex xl:items-center xl:gap-10'>
                            <div className='reveal-left flex justify-center'>
                                <div className='rounded-2xl border-2 border-bgreen/30 relative overflow-hidden flex justify-center items-center w-[280px] h-[370px] shadow-xl shadow-bgreen/5'>
                                    <img src='./imagens/brunoduarte.jpg' className='absolute w-full object-cover scale-[110%] mt-[7px] mr-[30px]' alt="Bruno Duarte - Personal Trainer especialista em mulheres 30+" itemProp="image" />
                                </div>
                            </div>
                            <div className='reveal-right xl:max-w-[550px] max-w-[500px] mx-auto xl:mx-0'>
                                <div className='mt-8 xl:mt-0'>
                                    <p className='text-[18px] text-neutral-400'>Meu nome é</p>
                                    <h2 className='text-[30px] text-bgreen font-bold leading-[34px]' itemProp="name">BRUNO DUARTE</h2>
                                </div>
                                <div className='mt-6 space-y-4 text-[15px] text-neutral-300 leading-[24px]' itemProp="description">
                                    <p>
                                        Sou <span itemProp="jobTitle">Personal Trainer</span> com mais de <span className='text-bgreen font-psemibold'>15 anos de experiência</span> e centenas de mulheres transformadas.
                                        Graduado em Educação Física, especialista em musculação, emagrecimento e alta performance. Eu não vendo ilusão — eu entrego <span className='text-white font-medium'>resultado comprovado.</span>
                                    </p>
                                    <p>
                                        Já guiei centenas de mulheres com rotinas apertadas, filhos, trabalho e mil responsabilidades. E vi cada uma delas <span className='text-bgreen font-psemibold'>reconquistar a confiança</span> quando tiveram o acompanhamento certo.
                                    </p>
                                    <p className='font-medium text-white text-[16px]'>
                                        A próxima pode ser você.
                                    </p>
                                </div>
                                <div className='flex gap-3 mt-6'>
                                    <a href="https://www.instagram.com/brunoduartepersonal" target="_blank" rel="noopener noreferrer">
                                        <img src="./imagens/instagram.png" className="buttonHover w-[40px]" alt="Instagram" />
                                    </a>
                                    <a
                                        href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="./imagens/whatsapp.png" className="buttonHover w-[40px]" alt="WhatsApp" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* FAQ - PERGUNTAS FREQUENTES             */}
                {/* ═══════════════════════════════════════ */}
                <section className='px-4 py-10 text-white' aria-label="Perguntas frequentes">
                    <div className='max-w-[600px] mx-auto'>
                        <div className='reveal text-center mb-8'>
                            <h2 className='text-[28px] font-psemibold'>Perguntas <span className='text-bgreen'>frequentes</span></h2>
                            <p className='text-neutral-400 mt-2 text-[14px]'>Tire suas dúvidas antes de começar</p>
                        </div>

                        <div className='reveal space-y-3'>
                            <FAQItem
                                question="Funciona mesmo para quem tem mais de 30 anos?"
                                answer="Com certeza. Na verdade, a consultoria foi pensada especialmente para mulheres 30+. Eu levo em conta as mudanças hormonais, a desaceleração do metabolismo e a rotina corrida que você tem. É um plano feito para o SEU corpo, não para uma adolescente de 18 anos."
                            />
                            <FAQItem
                                question="Consigo resultados treinando em casa?"
                                answer="Sim! O seu treino é personalizado de acordo com o local onde você treina. Se treina em casa, em academia, ou alterna entre os dois — eu monto o plano adequado para você."
                            />
                            <FAQItem
                                question="Preciso seguir uma dieta restritiva?"
                                answer="De jeito nenhum. Eu trabalho com orientação alimentar prática e flexível, baseada nas suas preferências. Nada de cortar tudo, passar fome ou viver de frango e batata doce. O objetivo é criar hábitos que você consiga manter para a vida toda."
                            />
                            <FAQItem
                                question="Como é feito o acompanhamento?"
                                answer="Diretamente comigo via WhatsApp. Toda semana eu avalio sua evolução, tiro dúvidas e faço ajustes no seu treino e alimentação. Você nunca fica sozinha no processo."
                            />
                            <FAQItem
                                question="E se eu não gostar do plano?"
                                answer="Em mais de 15 anos e centenas de alunas, isso nunca aconteceu. Mas se precisar de qualquer ajuste, é só me chamar. Eu refaço e adapto quantas vezes for necessário até ficar perfeito para você."
                            />
                            <FAQItem
                                question="Tenho pouco tempo, funciona mesmo assim?"
                                answer="Funciona. A maioria das minhas alunas são mães, profissionais e mulheres com rotinas intensas. Eu monto treinos otimizados para o tempo que você tem disponível — seja 30 minutos ou 1 hora."
                            />
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* URGÊNCIA FINAL                        */}
                {/* ═══════════════════════════════════════ */}
                <section className='urgency-section text-white' aria-label="Últimas vagas disponíveis">
                    <div className='relative z-10 p-6 sm:p-10 text-center max-w-[550px] mx-auto'>
                        <p className='text-[32px] sm:text-[38px] font-bold leading-[36px] sm:leading-[42px]'>🚨 VAGAS LIMITADAS</p>
                        <div className='space-y-4 mt-5 text-[15px] sm:text-[16px]'>
                            <p>
                                As vagas são <span className='font-psemibold'>extremamente limitadas</span> para garantir um acompanhamento individualizado e de altíssima qualidade com cada aluna.
                            </p>
                            <p>
                                Se você chegou até aqui, <span className='font-psemibold'>é porque algo dentro de você já decidiu.</span> Não deixe o medo ou a procrastinação roubarem mais tempo da mulher que você quer ser.
                            </p>
                            <p className='font-psemibold text-[17px]'>
                                A mudança começa com UMA decisão. Tome a sua agora. 👇
                            </p>
                        </div>
                        <div className='mt-7'>
                            <button
                                onClick={() => {
                                    trackEvent("ScrollToPlans", {
                                        content_name: "Quero mudar de vida",
                                        content_type: "engagement"
                                    });
                                    scrollToPlanos();
                                }}
                                className='buttonHover bg-white text-black p-4 w-full rounded-xl max-w-[420px] text-[19px] font-bold transition-all hover:scale-[1.02]'
                            >
                                QUERO COMEÇAR AGORA →
                            </button>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════ */}
                {/* FOOTER                                */}
                {/* ═══════════════════════════════════════ */}
                <footer className='text-center text-white mt-10 px-6 bg-[rgb(8,8,8)] space-y-4'>
                    <div className='flex justify-center'>
                        <img src='./imagens/logo.png' className='w-[90px] opacity-60' alt="Logo" />
                    </div>
                    <p className='text-[13px] text-neutral-500 mt-4 font-extralight'>© Bruno Duarte 2025 - Todos os direitos reservados.</p>
                    <div className='section-divider'></div>
                    <a
                        href="https://wa.me/5522999197523"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className='text-[12px] mt-6 pb-6 text-neutral-600 buttonHover'>Desenvolvido por <span className='font-medium text-neutral-500'>Arthur Alves</span></p>
                    </a>
                </footer>
            </main>
        </>
    )
}

export default Home