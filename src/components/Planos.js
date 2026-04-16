import React, { forwardRef } from 'react';
import { trackEvent } from '../utils/analytics';

export const Pricing = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='px-4 py-10 text-white' id="planos" aria-label="Planos e preços">
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
                    {/* PLANO SEMESTRAL */}
                    <div className='reveal-scale plan-card plan-card-featured lg:w-[380px] max-w-[470px] mx-auto lg:mx-0' style={{ transitionDelay: '0.3s' }}>
                        <div className='bg-gradient-to-br from-bgreen to-green-500 p-4 py-3 space-y-2 text-black'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[22px] font-psemibold'>Semestral</p>
                                <span className='bg-black text-bgreen rounded-full px-3 py-1 text-[11px] font-psemibold tracking-wider uppercase'>
                                    Mais vantajoso
                                </span>
                            </div>
                            <div className='leading-[1.3]'>
                                <p className='text-red-500 font-semibold line-through'>De R$ 1320</p>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-[32px]'>R$658 <span className='text-[16px] font-medium opacity-80'>à vista</span></p>
                                    <p className='text-[16px] font-regular opacity-90'>ou 6x de <span className='font-semibold text-black'>R$109,70</span></p>
                                </div>
                            </div>
                            <div className='pt-3'>
                                <button
                                    onClick={() => {
                                        trackEvent("InitiateCheckout", {
                                            content_name: "Plano Semestral",
                                            content_type: "subscription",
                                            value: 658,
                                            currency: "BRL"
                                        });
                                        window.open("https://wa.me/553196450850?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20Plano%20Semestral%20da%20consultoria.", "_blank");
                                    }}
                                    className="buttonHover font-psemibold bg-black text-bgreen p-3.5 w-full rounded-xl text-[17px]"
                                >
                                    QUERO ESSE PLANO →
                                </button>
                            </div>
                        </div>
                        <div className='space-y-2.5 p-4 text-neutral-200 text-left text-[14px]'>
                            {[
                                'Acompanhamento com montagem de treinos personalizados para seus objetivos, trocados a cada 45 dias',
                                'App de treinos com vídeos dos exercícios',
                                'Suporte diário para retirar dúvidas',
                                'Caso ainda tenha dúvidas, pode gravar o exercício e me enviar para avaliação e correção',
                                'Avaliação periódica de resultados por fotos',
                                'Contato feito por mim semanalmente para acompanhar a evolução',
                                'E-book com dicas para otimizar seus resultados',
                                'E-book com dicas de receitas fit para auxiliar no dia a dia',
                                <><span className="font-medium text-white">1 mês grátis</span></>,
                                <><span className="font-medium text-white">Bônus:</span> uma consulta com nutricionista</>,
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className='flex items-center gap-2.5'>
                                        <img className="w-[26px] flex-shrink-0" src="./imagens/check.png" alt="" />
                                        <p className='leading-[20px]'>{item}</p>
                                    </div>
                                    {i < 9 && <hr className='border-neutral-800 mt-2.5' />}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* PLANO TRIMESTRAL */}
                    <div className='reveal-scale plan-card lg:w-[380px] max-w-[470px] mx-auto lg:mx-0' style={{ transitionDelay: '0.15s' }}>
                        <div className='bg-neutral-800 p-4 py-3 space-y-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[22px] font-psemibold'>Trimestral</p>
                            </div>
                            <div className='leading-[1.3]'>
                                <p className='text-red-400 line-through font-medium'>De R$ 660</p>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold text-[32px]'>R$419 <span className='text-[16px] font-regular text-neutral-400'>à vista</span></p>
                                    <p className='text-[16px] font-regular text-neutral-300'>ou 3x de <span className='font-semibold text-white'>R$139,70</span></p>
                                </div>
                            </div>

                            <div className='pt-3'>
                                <button
                                    onClick={() => {
                                        trackEvent("InitiateCheckout", {
                                            content_name: "Plano Trimestral",
                                            content_type: "subscription",
                                            value: 419,
                                            currency: "BRL"
                                        });
                                        window.open("https://wa.me/553196450850?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20Plano%20Trimestral%20da%20consultoria.", "_blank");
                                    }}
                                    className="buttonHover font-psemibold bg-bgreen text-black p-3.5 w-full rounded-xl text-[17px]"
                                >
                                    QUERO ESSE PLANO →
                                </button>
                            </div>
                        </div>
                        <div className='space-y-2.5 p-4 text-neutral-200 text-left text-[14px]'>
                            {[
                                'Acompanhamento com montagem de treinos personalizados para seus objetivos, trocados a cada 45 dias',
                                'App de treinos com vídeos dos exercícios',
                                'Suporte diário para retirar dúvidas',
                                'Caso ainda tenha dúvidas, pode gravar o exercício e me enviar para avaliação e correção',
                                'Avaliação periódica de resultados por fotos',
                                'Contato feito por mim semanalmente para acompanhar a evolução',
                                'E-book com dicas para otimizar seus resultados',
                                'E-book com dicas de receitas fit para auxiliar no dia a dia',
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className='flex items-center gap-2.5'>
                                        <img className="w-[26px] flex-shrink-0" src="./imagens/check.png" alt="" />
                                        <p className='leading-[20px]'>{item}</p>
                                    </div>
                                    {i < 7 && <hr className='border-neutral-800 mt-2.5' />}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* PLANO MENSAL */}
                    <div className='reveal-scale plan-card lg:w-[380px] max-w-[470px] mx-auto lg:mx-0' style={{ transitionDelay: '0s' }}>
                        <div className='bg-neutral-800 p-4 space-y-2'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[22px] font-psemibold'>Mensal</p>
                            </div>
                            <div className='flex items-baseline gap-1'>
                                <p className='font-bold text-[32px]'>R$220</p>
                                <span className='text-[16px] font-regular text-neutral-400'>/mês</span>
                            </div>
                            <div className='pt-3'>
                                <button
                                    onClick={() => {
                                        trackEvent("InitiateCheckout", {
                                            content_name: "Plano Mensal",
                                            content_type: "subscription",
                                            value: 220,
                                            currency: "BRL"
                                        });
                                        window.open("https://wa.me/553196450850?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20Plano%20Mensal%20da%20consultoria.", "_blank");
                                    }}
                                    className="buttonHover font-psemibold bg-bgreen text-black p-3.5 w-full rounded-xl text-[17px] transition-all"
                                >
                                    QUERO ESSE PLANO →
                                </button>
                            </div>
                        </div>
                        <div className='space-y-2.5 p-4 text-neutral-200 text-left text-[14px]'>
                            {[
                                'Acompanhamento com montagem de treinos personalizados para seus objetivos, trocados a cada 45 dias',
                                'App de treinos com vídeos dos exercícios',
                                'Suporte diário para retirar dúvidas',
                                'Caso ainda tenha dúvidas, pode gravar o exercício e me enviar para avaliação e correção',
                                'Avaliação periódica de resultados por fotos',
                                'Contato feito por mim semanalmente para acompanhar a evolução',
                                'E-book com dicas para otimizar seus resultados',
                                'E-book com dicas de receitas fit para auxiliar no dia a dia',
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className='flex items-center gap-2.5'>
                                        <img className="w-[26px] flex-shrink-0" src="./imagens/check.png" alt="" />
                                        <p className='leading-[20px]'>{item}</p>
                                    </div>
                                    {i < 7 && <hr className='border-neutral-800 mt-2.5' />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* GARANTIA & AVISOS */}
                <div className='reveal mt-10 max-w-[800px] mx-auto glass-card p-5 border-bgreen/30 border'>
                    <div className='flex flex-col sm:flex-row items-center gap-6 text-[15px] text-neutral-300'>
                        <div>
                            <h3 className='text-2xl font-psemibold text-bgreen mb-2 text-center'>GARANTIA INCONDICIONAL DE 7 DIAS</h3>
                            <span>Se depois de 7 dias você não se adaptar ao método, eu devolvo 100% do seu dinheiro. Sem complicação.</span>
                        </div>
                        <p className="flex items-center">
                            <span className="text-[20px]"></span> Pagamento recorrente no cartão de crédito, não ocupando o limite com o valor total do plano.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
});

export function Urgency({ scrollToPlanos }) {
    return (
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
    );
}
