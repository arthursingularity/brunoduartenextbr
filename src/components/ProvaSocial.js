import React, { useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

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

export function BeforeAfter({ scrollToPlanos }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide for before/after photos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const current = slides[currentIndex];

    return (
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
    );
}

const prints = [
    { nome: 'p1', print: '/imagens/print1.jpeg' },
    { nome: 'p2', print: '/imagens/print2.jpeg' },
    { nome: 'p3', print: '/imagens/print3.jpeg' },
    { nome: 'p4', print: '/imagens/print4.jpeg' },
    { nome: 'p5', print: '/imagens/print5.jpeg' },
];

export function SocialProof() {
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const nextSlide2 = () => setCurrentIndex2((prev) => (prev + 1) % prints.length);
    const prevSlide2 = () => setCurrentIndex2((prev) => (prev - 1 + prints.length) % prints.length);

    const current2 = prints[currentIndex2];

    return (
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
    );
}
