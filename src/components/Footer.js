import React, { useState } from 'react';

export function About() {
    return (
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
    );
}

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
                <p className='text-[12px] mt-6 pb-6 buttonHover'>Desenvolvido por <span className='font-medium text-neutral-500'>Arthur Alves</span></p>
            </a>
        </footer>
    );
}
