"use client";

import React, { useRef, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';
import { WhatsAppFloat, Hero, Stats, TargetAudience } from '../components/Header';
import { BeforeAfter, SocialProof } from '../components/ProvaSocial';
import { Deliverables, VideoTips, HowItWorks } from '../components/Metodologia';
import { Pricing, Urgency } from '../components/Planos';
import { About, FAQSection, Footer } from '../components/Footer';

export default function Home() {
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

    const scrollToPlanos = () => {
        planosRef.current?.scrollIntoView({ behavior: "smooth" });
    };

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
                            "name": "Plano Semestral",
                            "description": "Consultoria online com treino personalizado, app de treinos, suporte via WhatsApp, e-books, 1 mês grátis e consulta com nutricionista.",
                            "price": "658.00",
                            "priceCurrency": "BRL",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "price": "658.00",
                                "priceCurrency": "BRL",
                                "unitText": "6 meses",
                                "billingDuration": "P6M"
                            },
                            "availability": "https://schema.org/LimitedAvailability",
                            "url": "https://brunoduartepersonal.com.br/#planos"
                        },
                        {
                            "@type": "Offer",
                            "name": "Plano Trimestral",
                            "description": "Consultoria online com treino personalizado, app de treinos, suporte via WhatsApp e e-books.",
                            "price": "419.00",
                            "priceCurrency": "BRL",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "price": "419.00",
                                "priceCurrency": "BRL",
                                "unitText": "3 meses",
                                "billingDuration": "P3M"
                            },
                            "availability": "https://schema.org/LimitedAvailability",
                            "url": "https://brunoduartepersonal.com.br/#planos"
                        },
                        {
                            "@type": "Offer",
                            "name": "Plano Mensal",
                            "description": "Consultoria online com treino personalizado, app de treinos, suporte via WhatsApp e e-books.",
                            "price": "220.00",
                            "priceCurrency": "BRL",
                            "priceSpecification": {
                                "@type": "UnitPriceSpecification",
                                "price": "220.00",
                                "priceCurrency": "BRL",
                                "unitText": "mês",
                                "billingDuration": "P1M"
                            },
                            "availability": "https://schema.org/LimitedAvailability",
                            "url": "https://brunoduartepersonal.com.br/#planos"
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
                <WhatsAppFloat />
                <Hero scrollToPlanos={scrollToPlanos} />
                <Stats />
                <TargetAudience scrollToPlanos={scrollToPlanos} />
                <BeforeAfter scrollToPlanos={scrollToPlanos} />
                <Deliverables />
                <SocialProof />
                <VideoTips />
                <HowItWorks />
                <Pricing ref={planosRef} />
                <About />
                <FAQSection />
                <Urgency scrollToPlanos={scrollToPlanos} />
                <Footer />
            </main>
        </>
    );
}