"use client";

import React from 'react'
import { useState, useRef} from 'react';

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
    {
        nome: 'p1',
        print: '/imagens/print1.jpeg',
    },
    {
        nome: 'p2',
        print: '/imagens/print2.jpeg',
    },
    {
        nome: 'p3',
        print: '/imagens/print3.jpeg',
    },
    {
        nome: 'p4',
        print: '/imagens/print4.jpeg',
    },
    {
        nome: 'p5',
        print: '/imagens/print5.jpeg',
    },
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);
    const touchStartX = useRef(null);
    const planosRef = useRef(null);

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
            setCurrentVideo((prev) => prev + 1); // swipe para esquerda → avançar
        } else if (diff < -50 && currentVideo > 0) {
            setCurrentVideo((prev) => prev - 1); // swipe para direita → voltar
        }

        touchStartX.current = null;
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide2 = () => {
        setCurrentIndex2((prev) => (prev + 1) % prints.length);
    };

    const prevSlide2 = () => {
        setCurrentIndex2((prev) => (prev - 1 + prints.length) % prints.length);
    };

    const current = slides[currentIndex];
    const current2 = prints[currentIndex2];

    return (
        <div>
            <div className='font-light'>
                <a
                    href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='buttonHover bg-green-500 rounded-full p-1.5 fixed z-50 bottom-2 right-2'>
                        <img src='./imagens/whatsapp.svg' className='w-[40px]' />
                    </div>
                </a>

                <div className='text-white flex justify-center'>
                    <div className='text-center p-3 z-10 relative mt-2'>
                        <div className='flex justify-center left-[15px]'>
                            <img src='./imagens/logo.png' className='w-[130px]' />
                        </div>
                        <p className='text-[21px] font-psemibold mt-5'>Você vai se olhar no espelho e se sentir <span className='text-bgreen'>mais confiante, seguro(a) e feliz</span>, por dentro e por fora.</p>
                        <div className='flex justify-center mt-7'>
                            <video
                                className="bg-neutral-900 rounded-lg w-[900px] border border-neutral-600"
                                src="https://res.cloudinary.com/dsgkc7epl/video/upload/v1761693312/28-10-25_v%C3%ADdeo_final_nfcfnb.mp4"
                                poster="./imagens/thumb.JPEG"
                                controls
                                playsInline
                            />
                        </div>
                        <p className='mt-7'>💪 Junte-se a mais de 300 alunos nessa jornada de saúde e autoestima.</p>
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <button
                        onClick={scrollToPlanos}
                        className='buttonHover bg-verde p-3 w-[80%] max-w-[400px] rounded-[8px] text-black text-[18px] font-medium'>Quero resultados reais</button>
                </div>

                <div className='space-y-12 text-white p-3 mt-10'>
                    <div>
                        <p className='text-[26px] font-medium text-center'>Essa é para você que…</p>
                        <div className='flex justify-center max-w-[600px] mx-auto'>
                            <div className='mt-5 space-y-4 border border-neutral-700 p-4 rounded-[16px] text-white'>
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>Quer emagrecer ou definir <span className='font-regular text-bgreen'>sem passar fome</span> ou ganhar massa muscular <span className='font-regular text-bgreen'>sem comer demais.</span></p>
                                </div>
                                <hr className='border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>Quer um corpo mais <span className='font-regular text-bgreen'>bonito</span>, mas também mais <span className='font-regular text-bgreen'>saudável e forte.</span></p>
                                </div>
                                <hr className='border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>Já treina, mas <span className='font-regular text-bgreen'>parou de evoluir.</span></p>
                                </div>
                                <hr className='border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'><span className='font-regular text-bgreen'>Já tentou sozinho(a)</span>, mas não conseguiu manter os resultados.</p>
                                </div>
                                <hr className='border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>Está cansado(a) de <span className='font-regular text-bgreen'>treinos prontos</span> que não funcionam pra você.</p>
                                </div>
                                <hr className='border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>Precisa de alguém que te <span className='font-regular text-bgreen'>acompanhe de verdade</span>, passo a passo.</p>
                                </div>
                                <hr className='border-neutral-700' />
                                <div className='flex items-center space-x-2'>
                                    <img className="w-[40px]" src="./imagens/check.png" />
                                    <p className='leading-[20px]'>Quer criar hábitos saudáveis <span className='font-regular text-bgreen'>mesmo com a rotina puxada.</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-8'>
                            <button
                                onClick={scrollToPlanos}
                                className='buttonHover bg-verde p-3 w-[80%] max-w-[400px] rounded-[8px] text-black text-[18px] font-medium'
                                >
                                    Quero uma vaga
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="DivAntesDepois text-center mt-10 relative rounded-[16px] bg-neutral-800 max-w-[600px] mx-auto">
                            <p className="text-[30px] font-medium -mb-2 pt-5 text-white">
                                Resultados <span className="text-bgreen">reais</span>
                            </p>
                            <p className="text-[26.5px] font-light mb-4 text-white">dos meus aluno(a)s</p>

                            <div className="relative flex items-center justify-center">
                                {/* Botão voltar */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-0 z-20 bg-neutral-600 ml-1.5 buttonHover text-white rounded p-0.5 mb-14 sm:mb-0"
                                >
                                    <img className="w-[25px]" src="./imagens/setaesq.png" />
                                </button>

                                {/* Imagens Antes e Depois */}
                                <div className="w-[90%] max-w-[500px] h-auto relative">
                                    <img
                                        src={current.img}
                                        alt={`Resultado ${current.nome}`}
                                        className="w-full h-full object-cover rounded-[8px]"
                                    />
                                </div>

                                {/* Botão avançar */}
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-0 z-20 mr-1.5 bg-neutral-600 buttonHover text-white rounded p-0.5 mb-14 sm:mb-0"
                                >
                                    <img className="w-[25px]" src="./imagens/setadir.png" />
                                </button>
                            </div>

                            {/* Botão principal */}
                            <div className='text-center mt-4 pb-6'>
                                <button
                                    onClick={scrollToPlanos}
                                    className='buttonHover bg-verde p-3 w-[80%] max-w-[400px] rounded-[8px] text-black text-[18px] font-medium'
                                >
                                    Quero transformar o meu corpo
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='pb-8'>
                        <div className='leading-[30px]'>
                            <p className='text-[32px] font-medium text-bgreen text-center'>Trabalho SÉRIO,</p>
                            <p className='text-[21px] text-center'>Método que <span className='font-medium'>FUNCIONA.</span></p>
                        </div>
                        <div className='text-center relative bg-neutral-800 rounded-[16px] overflow-hidden p-3 mt-8 max-w-[400px] mx-auto xl:max-w-[700px]'>
                            <p className="text-[25px] mt-2">Conversas <span className='font-medium text-bgreen'>reais</span></p>
                            <div className='bg-neutral-700 relative rounded-[8px] p-2 mx-auto mt-5'>
                                <div className='flex justify-center space-x-2 mt-0 relative'>
                                    <div className='w-full border border-neutral-500 rounded-[6px] relative overflow-hidden'>
                                        <div className='relative w-full max-h-[380px] xl:max-h-[580px] bg-neutral-500 overflow-hidden flex justify-center items-center'>
                                            <span
                                                onClick={prevSlide2}
                                                className='z-20 left-1 bg-neutral-500 rounded p-[2px] absolute cursor-pointer buttonHover'
                                            >
                                                <img className="w-[25px]" src="./imagens/setaesq.png" />
                                            </span>
                                            <span
                                                onClick={nextSlide2}
                                                className='z-20 right-1 bg-neutral-500 rounded p-[2px] absolute cursor-pointer hover:brightness-90 transition'
                                            >
                                                <img className="w-[25px]" src="./imagens/setadir.png" />
                                            </span>
                                            <img
                                                src='./imagens/logo.png'
                                                className='absolute w-10 right-[2px] bottom-[2px] z-10'
                                                alt='Logo'
                                            />
                                            <img
                                                src={current2.print}
                                                className='w-full h-full object-cover'
                                                alt='Antes'
                                            />
                                        </div>
                                    </div>
                                    <div className='absolute z-50'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-[650px] relative bg-bgreen rounded-[16px] overflow-hidden sm:w-[700px] sm:mx-auto'>
                        <div>
                            <div className='absolute left-0 text-left font-regular text-black p-3'>
                                <div className='leading-[23px]'>
                                    <p className='text-[19px]'>Não é apenas</p>
                                    <p className='text-[26px] font-psemibold'>um treino.</p>
                                </div>
                                <div className='mt-[130px] leading-[19px] text-[15.5px]'>
                                    <p>É um plano <span className='font-psemibold'>de verdade</span></p>
                                    <p>que vai <span className='font-psemibold'>mudar a sua vida.</span></p>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className='absolute z-10 bottom-0 space-y-3 text-[14px] leading-[19px] font-medium w-full p-3'>
                                    <div className='flex justify-center space-x-3 w-full'>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                            <p>Treino 100% personalizado para a sua rotina e objetivo.</p>
                                        </div>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(7px)' }}>
                                            <p>Dicas práticas de alimentação de acordo com as suas preferências.</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center space-x-3'>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                            <p>App com vídeos, instruções e atualizações mensais.</p>
                                        </div>
                                        <div className='w-[50%] h-[105px] p-3 rounded-[8px] bg-neutral-700/50 backdrop-blur-lg text-center flex items-center' style={{ WebkitBackdropFilter: 'blur(17px)' }}>
                                            <p>Acompanhamento direto comigo via WhatsApp.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src='./imagens/principal.png' className='absolute -right-[35px] w-[350px] mt-3' />
                        </div>
                    </div>

                    <div>
                        <p className='text-[28px] font-medium text-center leading-[31px]'>Maximize os seus resultados</p>
                        <div
                            className='max-w-[350px] h-[430px] mx-auto overflow-hidden relative mt-6 rounded-[16px] border border-neutral-600'
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
                                        className={`w-full h-full absolute top-0 object-cover scale-[100%] brightness-[45%] transition-opacity duration-500 ${index === currentVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                    />
                                ))}
                                <div className='absolute z-10 bottom-0 w-full p-3'>
                                    <div className='space-y-1'>
                                        <p className='font-medium text-[24px] text-bgreen'>Dicas de treino</p>
                                        <p className='leading-[20px] text-neutral-300'>Vídeos explicativos com dicas de treino para melhorar as suas rotinas.</p>
                                    </div>
                                    <div className='barrinha flex justify-center mt-3'>
                                        <div className='h-[15px] p-1.5 px-10 bg-bgreen rounded-full flex justify-center items-center space-x-1.5'>
                                            {videos.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`rounded-full transition-all duration-300 ${index === currentVideo
                                                        ? 'bg-black w-[17px] h-[7px]'
                                                        : 'bg-black w-[7px] h-[7px]'
                                                        }`}
                                                ></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-[28px] font-medium text-center'>Como funciona?</p>
                        <div className='mt-6 flex space-x-3 justify-center'>
                            <div className='space-y-4 max-w-[500px]'>
                                <div className='text-[15px] p-4 space-y-3 bg-neutral-800 rounded-[16px] border border-neutral-600'>
                                    <p className='text-[20px] font-medium text-black bg-bgreen w-[30px] h-[30px] rounded-[8px] flex items-center justify-center'>1</p>
                                    <p className='text-[23px] font-medium text-bgreen'>Análise</p>
                                    <p className='text-neutral-200'>Após a confirmação do pagamento, você receberá um formulário detalhado onde irá descrever sua rotina, nível de treinamento, preferências alimentares, horários disponíveis, lesões e fotos do seu físico atual.</p>
                                </div>

                                <div className='text-[15px] p-4 space-y-3 bg-neutral-800 rounded-[16px] border border-neutral-600'>
                                    <p className='text-[20px] font-medium text-black bg-bgreen w-[30px] h-[30px] rounded-[8px] flex items-center justify-center'>2</p>
                                    <p className='text-[23px] font-medium text-bgreen leading-[29px]'>Montagem do seu plano</p>
                                    <p className='text-neutral-200'>Com base nas informações recebidas, seu plano será estruturado do zero. Você receberá seu protocolo de dieta e treino em até 5 dias úteis.</p>
                                </div>

                                <div className='text-[15px] p-4 space-y-3 bg-neutral-800 rounded-[16px] border border-neutral-600'>
                                    <p className='text-[20px] font-medium text-black bg-bgreen w-[30px] h-[30px] rounded-[8px] flex items-center justify-center'>3</p>
                                    <p className='text-[23px] font-medium text-bgreen'>Acompanhamento</p>
                                    <p className='text-neutral-200'>Toda semana seu plano será avaliado. Ajustes serão feitos conforme necessidade: seja por uma demanda sua (dificuldade de seguir, mudança de rotina etc.) ou por uma estratégia minha para acelerar seus resultados.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={planosRef} className="text-center relative">
                        <p className='text-[30px] font-medium text-center pb-4'>Planos disponíveis</p>
                        <hr className='border-neutral-700' />
                        <p className="text-[18px] font-light mt-4 mb-4">
                            <span className="text-yellow-400 font-medium">⚠️ Atenção:</span> após finalizar a compra, <span className="font-medium text-red-500">não feche a página.</span> Você será redirecionado(a) para responder a anamnese.
                        </p>
                        <hr className='border-neutral-700' />
                        <div className='space-y-4 mt-6 lg:flex lg:gap-4 lg:justify-center lg:space-y-0'>
                            <div className='border p-2 border-bgreen bg-neutral-800 rounded-[16px] text-center overflow-hidden lg:w-[370px] max-w-[470px] mx-auto lg:mx-0'>
                                <div className='bg-bgreen rounded-[8px] p-2 space-y-2 text-black'>
                                    <div className='flex justify-between'>
                                        <p className='text-[21px] font-medium pl-1'>Anual</p>
                                        <p className='bg-neutral-700 text-white rounded-[6px] font-regular flex justify-center items-center h-[26px] px-2 text-[11px]'>Mais vendido</p>
                                    </div>
                                    <p className='font-medium text-[27px] text-left ml-1'>R$97,70 <span className='text-[17px] font-regular'>/mês</span></p>
                                    <div className='text-center pt-3 text-white'>
                                        <a
                                            href="https://buy.stripe.com/aFa00ifnF7dzda6bMEfQI0E"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='buttonHover font-medium bg-neutral-600 p-3 w-full rounded-[6px] text-[18px]'>Quero esse plano</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='space-y-2 p-3 text-neutral-200 text-left'>
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>App de acesso aos treinos</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Planilha personalizada de Treinos</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Vídeos dos exercícios</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'><span className="font-medium text-white">8 treinos</span> trocados a cada 45 dias</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Suporte diretamente comigo via whatsapp.</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>E-book completo de acordo com o seu objetivo</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Acesso ao grupo VIP - Time Bruno Duarte</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                </div>
                                <p className="font-extralight text-[12.5px] text-neutral-100 pb-1">Em planos anual e semestral, o cancelamento antecipado está sujeito à taxa correspondente a uma mensalidade.</p>
                            </div>
                            <div className='p-2 bg-neutral-800 rounded-[16px] text-center overflow-hidden lg:w-[370px] max-w-[470px] mx-auto lg:mx-0'>
                                <div className='bg-neutral-700 rounded-[8px] p-2 space-y-2'>
                                    <div className='flex justify-between'>
                                        <p className='text-[21px] font-medium pl-1'>Semestral</p>
                                    </div>
                                    <p className='font-medium text-[27px] text-left ml-1'>R$107,70 <span className='text-[17px] font-regular text-neutral-300'>/mês</span></p>
                                    <div className='text-center pt-3'>
                                        <a
                                            href="https://buy.stripe.com/eVqbJ08Zh55r4DA180fQI0F"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='buttonHover font-medium bg-verde text-black p-3 w-full rounded-[6px] text-[18px]'>Quero esse plano</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='space-y-2 p-3 text-neutral-200 text-left'>
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>App de acesso aos treinos</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Planilha personalizada de Treinos</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Vídeos dos exercícios</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'><span className="font-medium text-white">4 treinos</span> trocados a cada 45 dias</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Suporte diretamente comigo via whatsapp.</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>E-book completo de acordo com o seu objetivo</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/close.png" />
                                        <p className='leading-[20px]'>Acesso ao grupo VIP - Time Bruno Duarte</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                </div>
                                <p className="font-extralight text-[12.5px] text-neutral-100 pb-1">Em planos anual e semestral, o cancelamento antecipado está sujeito à taxa correspondente a uma mensalidade.</p>
                            </div>
                            <div className='p-2 bg-neutral-800 rounded-[16px] text-center overflow-hidden lg:w-[370px] max-w-[470px] mx-auto lg:mx-0'>
                                <div className='bg-neutral-700 rounded-[8px] p-2 space-y-2'>
                                    <div className='flex justify-between'>
                                        <p className='text-[21px] font-medium pl-1'>Trimestral</p>
                                    </div>
                                    <p className='font-medium text-[27px] text-left ml-1'>R$127,70 <span className='text-[17px] font-regular text-neutral-300'>/mês</span></p>
                                    <div className='text-center pt-3'>
                                        <a
                                            href="https://buy.stripe.com/9B6eVc5N57dzgmicQIfQI0G"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className='buttonHover font-medium bg-verde text-black p-3 w-full rounded-[6px] text-[18px]'>Quero esse plano</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='space-y-2 p-3 text-neutral-200 text-left'>
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>App de acesso aos treinos</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Planilha personalizada de Treinos</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Vídeos dos exercícios</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>2 treinos trocados a cada 45 dias</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/check.png" />
                                        <p className='leading-[20px]'>Suporte diretamente comigo via whatsapp.</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/close.png" />
                                        <p className='leading-[20px]'>E-book completo de acordo com o seu objetivo</p>
                                    </div>
                                    <hr className='border-neutral-700' />
                                    <div className='flex items-center space-x-2'>
                                        <img className="w-[30px]" src="./imagens/close.png" />
                                        <p className='leading-[20px]'>Acesso ao grupo VIP - Time Bruno Duarte</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-7 xl:py-10 bg-neutral-900 text-white mt-6'>
                    <div className='space-y-5 mt-5 xl:mt-0'>
                        <div className='flex justify-center'>
                            <div className='xl:flex xl:space-x-8 items-center'>
                                <div className='flex justify-center'>
                                    <div className='rounded-[8px] border border-bgreen relative overflow-hidden flex justify-center items-center w-[300px] h-[400px]'>
                                        <img src='./imagens/brunoduarte.jpg' className='absolute w-full object-cover scale-[110%] mt-[7px] mr-[30px]' />
                                    </div>
                                </div>
                                <div className='xl:max-w-[600px] max-w-[400px]'>
                                    <div className='leading-[31px] mt-7'>
                                        <p className='text-[22px]'>Meu nome é</p>
                                        <p className='text-[28px] text-bgreen font-bold'>BRUNO DUARTE</p>
                                    </div>
                                    <div className='mt-7 space-y-5 text-neutral-200'>
                                        <p>Sou Personal Trainer  com mais de <span className='text-bgreen font-psemibold'>15 anos de experiência</span>, ajudando centenas de mulheres a conquistarem o corpo dos seus sonhos com saúde, foco e disciplina.</p>
                                        <p>Graduado em Educação Física e especialista em musculação, emagrecimento e alta performance, meu compromisso é transformar resultados em estilo de vida.</p>
                                        <p>Já acompanhei centenas de pessoas, mesmo com rotinas apertadas, e vi de perto o poder da consistência com o <span className='font-psemibold text-white'>acompanhamento certo.</span></p>
                                    </div>
                                    <div className='flex space-x-3 mt-7 pb-5'>
                                        <a href="https://www.instagram.com/brunoduartepersonal" target="_blank" rel="noopener noreferrer">
                                            <img src="./imagens/instagram.png" className="buttonHover w-[40px]" />
                                        </a>
                                        <a
                                            href="https://wa.me/553196450850?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20online."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src="./imagens/whatsapp.png" className="buttonHover w-[40px]" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pb-2 bg-red-600'>
                    <div className='p-5 text-center text-white'>
                        <p className='text-[29px] font-bold'>🚨 POUCAS VAGAS</p>
                        <div className='space-y-5 mt-4 max-w-[400px] mx-auto'>
                            <p>As vagas são limitadas pra garantir meu acompanhamento <span className='font-psemibold'>direto e especializado com cada aluno.</span></p>
                            <p>Se você quer <span className='font-psemibold'>mudar de verdade</span>, e não só tentar mais uma vez, agora é a sua chance.</p>
                            <p>Clique no botão abaixo e comece hoje a construção da sua melhor versão 👇</p>
                        </div>
                        <div className='text-center mt-6'>
                            <button
                                onClick={scrollToPlanos}
                                className='buttonHover bg-verde p-4 w-full rounded-[8px] max-w-[400px] text-black text-[20px] font-psemibold'
                            >Quero mudar de vida
                            </button>
                        </div>
                    </div>
                </div>
                <div className='text-center text-white font-extralight space-y-5 p-6 bg-neutral-900'>
                    <div className='flex justify-center'>
                        <img src='./imagens/logo.png' className='w-[100px]' />
                    </div>
                    <p className='text-[15px]'>© Bruno Duarte 2025 - Todos os direitos reservados.</p>
                    <hr className='border-neutral-700 max-w-[700px] mx-auto pb-4' />
                    <a
                        href="https://wa.me/5522988223766"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className='text-[13px] buttonHover'>Desenvolvido por <span className='font-medium'>Arthur Alves</span></p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home