"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
emailjs.init("NrYw_EiFWBGHgsaVH");

function Formulario() {
    const [step, setStep] = useState(1); // etapa atual
    const totalSteps = 4;

    // Inputs separados por etapa
    const steps = [
        [
            "Nome completo",
            "Rede social(ex: @bruno - instagram)",
            "Email",
            "Telefone",
            "Data de nascimento",
            "Endereço",
            "Profissão",
            "FC repouso",
            "Peso",
            "Altura",
            "Como chegou até a mim ou minha consultoria?",
            "O que você espera com a consultoria online?",
            "Qual é o seu objetivo principal? Se há mais de um, cite-os",
        ],
        [
            "Onde pretende treinar?(ex: academia, casa com equipamentos, academia de condomínio...)",
            "Se na resposta anterior você disse casa ou academia de condomínio, quais equipamentos ou aparelhos você possui?",
            "Quantos dias por semana você pode treinar?",
            "Quantos horas por dia você pode treinar?",
            "Você já pratica musculação?",
            "Ha quanto tempo pratica?",
            "Caso tenha parado a prática, a quanto tempo está parado(a)?",
            "Se você treina atualmente, me fale um pouco sobre seu treino(tipo de divisão, número de exercícios por dia e etc).",
            "Existe alguma parte do seu corpo que o/a incomoda esteticamente? Se sim, qual ou quais?",
            "Pela sua percepção, você acha que ganha massa muscular facilmente?",
            "Faz quantas refeições por dia?",
            "Faz dieta e/ou suplementação? Explique"
        ],
        [
            "Fuma? Quantos cigarros por dia? Se parou, a quanto tempo?",
            "Consome bebidas alcoólicas? Quais e com qual frequência?",
            "Possui colesterol, triglicérides ou glicose alta?",
            "Possui alguma alteração cardíaca? Algum parente com problemas cardíacos? Quem?",
            "É hipertenso?",
            "É diabético, ou possui algum parente que seja?",
            "Tem problemas pulmonares?",
            "Toma algum tipo de medicamento? Qual?",
            "Durante a prática de exercícios, alguma vez já sentiu tonteira?",
        ],
        [
            "Pratica outra atividade física? Se sim, qual e com que frequência?",
            "Fez alguma cirurgia? Qual?",
            "Possui dores na coluna, articulações ou dores musculares?",
            "Tem alguma recomendação médica para a prática de atividade física? Se sim, qual?",
            "Foi uma criança ou adolescente com sobrepeso?",
            "Seus pais são obesos ou têm sobrepeso?",
            "Observações e comentários",
        ],
    ];

    const [answers, setAnswers] = useState({});

    const handleChange = (label, value) => {
        setAnswers(prev => ({ ...prev, [label]: value }));
    };

    const handleNext = () => {
        // Pega os campos da etapa atual
        const currentStepFields = steps[step - 1];

        // Verifica se algum está vazio
        const hasEmptyField = currentStepFields.some(label => !answers[label] || answers[label].trim() === "");

        if (hasEmptyField) {
            alert("Por favor, preencha todos os campos obrigatórios antes de continuar.");
            return; // não avança
        }

        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        // Garante que todos os campos de todas as etapas foram preenchidos
        const allFields = steps.flat();
        const hasEmptyField = allFields.some(label => !answers[label] || answers[label].trim() === "");

        if (hasEmptyField) {
            alert("Por favor, preencha todos os campos antes de enviar o formulário.");
            return;
        }

        const nomeCompleto = answers["Nome completo"] || "Sem nome";
        const message = Object.entries(answers)
            .map(([pergunta, resposta]) => `<b>${pergunta}:</b> ${resposta}<br><br>`)
            .join("");

        const templateParams = {
            to_email: "brunoassispersonal@gmail.com",
            subject: `Consultoria Online - Anamnese de ${nomeCompleto}`,
            message: message,
            name: nomeCompleto,
        };

        emailjs
            .send(
                "service_6oz7wms",
                "template_pqmznwk",
                templateParams
            )
            .then(() => {
                alert("Formulário enviado com sucesso! 🎉");
                window.location.reload();
            })
            .catch((err) => {
                console.error(err);
                alert("Ocorreu um erro ao enviar.");
            });
    };

    const progressWidth = `${(step / totalSteps) * 100}%`;

    return (
        <div className="font-light flex justify-center text-white p-6">
            <div className="w-[500px]">
                {/* Título */}
                <p className="text-center text-bgreen text-[36px] font-medium">
                    Anamnese
                </p>
                <hr className="border-1 border-neutral-500 mt-8" />
                <p className="text-center mt-5">
                    Responda ao questionário para que possamos obter melhores resultados.
                </p>

                {/* Barra de progresso */}
                <div className="w-full bg-gray-700 h-2 rounded mt-8">
                    <div
                        className="bg-bgreen h-2 rounded transition-all duration-500"
                        style={{ width: progressWidth }}
                    ></div>
                </div>
                <p className="text-center mt-2">Etapa {step} de {totalSteps}</p>

                {/* Formulário */}
                <div className="flex justify-center mt-10">
                    <form className="w-full">
                        {/* Container dos inputs */}
                        <div className="space-y-4">
                            {steps[step - 1].map((label, index) => (
                                <div key={index} className="flex flex-col space-y-1">
                                    <p>{label}</p>
                                    <input
                                        value={answers[label] || ""}
                                        onChange={(e) => handleChange(label, e.target.value)}
                                        className="bg-transparent border border-neutral-300 rounded h-[43px] caret-bgreen pl-2 outline-none hover:border-bgreen"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Botões - fora do container dos inputs */}
                        <div className="flex justify-between mt-10">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="buttonHover px-6 py-2 rounded text-black text-[18px] font-medium bg-neutral-400"
                                >
                                    Voltar
                                </button>
                            ) : (
                                <div></div>
                            )}

                            <button
                                type="button"
                                onClick={step === totalSteps ? handleSubmit : handleNext}
                                className="buttonHover px-6 py-2 rounded text-black text-[18px] font-medium bg-verde"
                            >
                                {step === totalSteps ? "Finalizar" : "Próximo"}
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default Formulario;