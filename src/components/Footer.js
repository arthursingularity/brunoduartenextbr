import React, { useState } from 'react';

export function About() {
    return (
        <section className='px-4 py-14 text-white' aria-label="Sobre Bruno Duarte" itemScope itemType="https://schema.org/Person">
            <div className='max-w-[900px] mx-auto'>
                <div className='reveal text-center mb-8'>
                    <span className='inline-block px-[14px] py-[4px] rounded-[20px] text-[12px] font-psemibold tracking-[1.5px] uppercase bg-bgreen/10 text-bgreen border border-bgreen/20'>
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
                        <div className='flex gap-4 mt-6'>
                            <a href="https://www.instagram.com/brunoduartepersonal" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:brightness-110 transition-all">
                                <div className="w-[42px] h-[42px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/20">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] text-white">
                                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z" />
                                    </svg>
                                </div>
                            </a>
                            <a
                                href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 hover:brightness-110 transition-all"
                            >
                                <div className="w-[42px] h-[42px] bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] text-white">
                                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item border border-white/5 rounded-[14px] overflow-hidden transition-all duration-300 ease bg-[#19191999] hover:border-bgreen/15" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button
                className="faq-question w-full px-5 py-[18px] cursor-pointer flex justify-between items-center font-medium text-[15px] text-white transition-all duration-300 ease bg-transparent border-none text-left leading-[1.4] hover:text-bgreen"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                type="button"
            >
                <span itemProp="name">{question}</span>
                <span className={`faq-icon transition-transform duration-300 ease text-bgreen text-[20px] ${isOpen ? 'open' : ''}`} aria-hidden="true">+</span>
            </button>
            <div
                className={`faq-answer px-5 text-white/70 font-light text-[14px] leading-[1.7] ${isOpen ? 'open' : ''}`}
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

export function FAQSection() {
    return (
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
                        answer="Não necessariamente. Dietas muito restritivas costumam ser difíceis de manter a longo prazo e, por isso, raramente geram resultados duradouros. O mais importante é construir uma alimentação equilibrada, adequada à sua rotina e às suas preferências, promovendo hábitos consistentes que possam ser mantidos de forma natural no dia a dia."
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
    );
}

export function Footer() {
    return (
        <footer className='text-center text-white mt-10 px-6 bg-[rgb(8,8,8)] space-y-4'>
            <div className='flex justify-center'>
                <img src='./imagens/logo.png' className='w-[90px]' alt="Logo" />
            </div>
            <p className='text-[13px] mt-4 font-extralight'>© Bruno Duarte 2025 - Todos os direitos reservados.</p>
            <div className='section-divider'></div>
            <a
                href="https://wa.me/5522999197523"
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className='text-[12px] mt-6 pb-6 hover:brightness-75 transition-all cursor-pointer'>Desenvolvido por <span className='font-medium text-neutral-500'>Arthur Alves</span></p>
            </a>
        </footer>
    );
}
