import React from 'react';
import { trackEvent } from '../utils/analytics';

export function WhatsAppFloat() {
    return (
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
            <div className='hover:brightness-75 transition-all cursor-pointer bg-green-500 rounded-full p-2 fixed z-50 bottom-4 right-4 shadow-lg shadow-green-500/20'>
                <img src='./imagens/whatsapp.svg' className='w-[42px]' alt="WhatsApp" />
            </div>
        </a>
    );
}

export function Hero({ scrollToPlanos }) {
    return (
        <header role="banner">
            <section className='text-white relative' aria-label="Apresentação da consultoria online">
                <div className='text-center px-4 pt-6 pb-2 relative z-10 max-w-[800px] mx-auto'>
                    <div className='flex justify-center animate-fadeIn'>
                        <img src='./imagens/logo.png' className='w-[110px]' alt="Bruno Duarte Personal" />
                    </div>

                    <div className='mt-5 animate-fadeInUp' style={{ animationDelay: '0.2s' }}>
                        <span className='inline-block px-[14px] py-[4px] rounded-[20px] text-[12px] font-psemibold tracking-[1.5px] uppercase bg-bgreen/10 text-bgreen border border-bgreen/20'>
                            +300 mulheres transformadas
                        </span>
                    </div>

                    <h1 className='text-[24px] sm:text-[30px] font-psemibold mt-6 leading-[30px] sm:leading-[38px] animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
                        Você tem <span className='text-bgreen text-glow'>mais de 30 anos</span> e sente que seu corpo não responde mais como antes?
                    </h1>

                    <div className='flex justify-center mt-8 animate-fadeInUp' style={{ animationDelay: '0.8s' }}>
                        <video
                            className="bg-neutral-900 rounded-2xl w-full max-w-[700px] border border-neutral-700/50 shadow-2xl shadow-black/50"
                            src="https://res.cloudinary.com/dsgkc7epl/video/upload/v1761693312/28-10-25_v%C3%ADdeo_final_nfcfnb.mp4"
                            poster="./imagens/thumb.JPEG"
                            controls
                            playsInline
                        />
                    </div>

                    <p className='text-[16px] sm:text-[18px] text-neutral-300 mt-8 leading-[24px] animate-fadeInUp max-w-[600px] mx-auto' style={{ animationDelay: '0.6s' }}>
                        Chega de treinos genéricos que não funcionam. Eu vou te mostrar o <span className='font-medium text-white'>caminho exato</span> para reconquistar sua confiança, secar a gordura e esculpir o corpo que você merece — <span className='text-bgreen font-medium'>mesmo com a rotina corrida.</span>
                    </p>
                </div>

                <div className='text-center mt-4 pb-8 px-5 animate-fadeInUp' style={{ animationDelay: '1.1s' }}>
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
    );
}

export function Stats() {
    return (
        <section className='py-10 px-4' aria-label="Números e estatísticas">
            <div className='section-divider'></div>
            <div className='reveal flex justify-between items-center mb-10 mt-10 gap-1 sm:gap-12 max-w-[600px] mx-auto w-full px-2 sm:px-0'>
                <div className='text-center flex-1'>
                    <p className='font-bold text-[25px] sm:text-[33px] text-bgreen leading-none'>15+</p>
                    <p className='font-light text-[10px] sm:text-[13px] text-white/60 mt-1 uppercase tracking-[0.5px] sm:tracking-[1px]'>Anos de<br />experiência</p>
                </div>
                <div className='w-[1px] h-10 sm:h-12 bg-neutral-800 shrink-0'></div>
                <div className='text-center flex-1'>
                    <p className='font-bold text-[25px] sm:text-[33px] text-bgreen leading-none'>300+</p>
                    <p className='font-light text-[10px] sm:text-[13px] text-white/60 mt-1 uppercase tracking-[0.5px] sm:tracking-[1px]'>Alunas<br />transformadas</p>
                </div>
                <div className='w-[1px] h-10 sm:h-12 bg-neutral-800 shrink-0'></div>
                <div className='text-center flex-1'>
                    <p className='font-bold text-[25px] sm:text-[33px] text-bgreen leading-none'>98%</p>
                    <p className='font-light text-[10px] sm:text-[13px] text-white/60 mt-1 uppercase tracking-[0.5px] sm:tracking-[1px]'>Taxa de<br />satisfação</p>
                </div>
            </div>
            <div className='section-divider'></div>
        </section>
    );
}

export function TargetAudience({ scrollToPlanos }) {
    return (
        <section className='text-white px-4 py-10' aria-label="Para quem é a consultoria">
            <div className='max-w-[650px] mx-auto'>
                <div className='reveal text-center'>
                    <span className='inline-block px-[14px] py-[4px] rounded-[20px] text-[12px] font-psemibold tracking-[1.5px] uppercase bg-red-500/10 text-red-400 border border-red-500/20'>
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

                <div className='text-center mt-8 reveal px-5'>
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
    );
}
