import React, { useState, useRef } from 'react';

export function Deliverables() {
    return (
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
                                <p className='text-[28px] font-psemibold'>exclusivo.</p>
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
                        <img src='./imagens/principal.png' className='absolute -right-[40px] w-[340px] mt-3' alt="Personal Trainer" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const videos = [
    './imagens/video1.mp4',
    './imagens/video2.mp4',
    './imagens/video3.mp4'
];

export function VideoTips() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const touchStartX = useRef(null);

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

    return (
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
    );
}

export function HowItWorks() {
    return (
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
    );
}
