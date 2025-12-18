"use client";

import { trackEvent } from "@/lib/metaPixel";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Formulario() {
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const totalSteps = 4;
    const [sending, setSending] = useState(false);

    useEffect(() => {
        emailjs.init("NrYw_EiFWBGHgsaVH");

        trackEvent("CompleteRegistration", {
            content_name: "Início da Anamnese",
            content_type: "post_purchase",
        });
    }, []);

    const baseInputClass =
        "bg-transparent border rounded h-[43px] pl-2 pr-8 outline-none text-white appearance-none cursor-pointer " +
        "border-neutral-300 hover:border-bgreen focus:border-bgreen";

    const femininoFields = [
        "Você possui ciclo menstrual ativo?",
        "Seu ciclo costuma ser:",
        "Data aproximada do início da última menstruação:",
        "Durante o período menstrual ou pré-menstrual, você costuma:",
        "Caso sinta sintomas, eles costumam atrapalhar seus treinos?"
    ];

    const isValidEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const onlyNumbers = (value) => value.replace(/\D/g, "");

    const formatPhone = (numbers) => {
        if (!numbers) return "";

        if (numbers.length <= 2) return `(${numbers}`;
        if (numbers.length <= 6)
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        if (numbers.length <= 10)
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    };

    const formatDate = (value) => {
        const numbers = onlyNumbers(value);

        if (numbers.length === 0) return "";
        if (numbers.length <= 2) return numbers;
        if (numbers.length <= 4)
            return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;

        return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
    };

    const formatDecimal = (value, maxLength) => {
        let cleaned = value.replace(/[^0-9.,]/g, "");
        cleaned = cleaned.replace(",", ".");
        const parts = cleaned.split(".");
        if (parts.length > 2) cleaned = parts[0] + "." + parts[1];
        return cleaned.slice(0, maxLength);
    };

    const steps = [
        [
            "Nome completo",
            "Gênero",
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
            "Faz dieta e/ou suplementação? Explique",
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
        let formattedValue = value;

        if (label === "Telefone") {
            formattedValue = onlyNumbers(value).slice(0, 11);
        }

        if (label === "Data de nascimento") {
            formattedValue = formatDate(value);
        }

        if (label === "Peso") {
            formattedValue = formatDecimal(value, 6);
        }

        if (label === "Altura") {
            formattedValue = formatDecimal(value, 4);
        }

        if (
            label === "FC repouso" ||
            label === "Quantos dias por semana você pode treinar?" ||
            label === "Quantos horas por dia você pode treinar?"
        ) {
            formattedValue = onlyNumbers(value).slice(0, 4);
        }

        setAnswers((prev) => ({
            ...prev,
            [label]: formattedValue,
        }));
    };

    const handleNext = () => {
        const currentStepFields = steps[step - 1];

        for (let label of currentStepFields) {
            const value = answers[label];

            if (!value || value.trim() === "") {
                setError(`Preencha o campo: ${label}`);
                return;
            }

            if (label === "Email" && !isValidEmail(value)) {
                setError("Digite um e-mail válido.");
                return;
            }
        }

        setError("");

        if (step < totalSteps) {
            trackEvent("anamnese_step", {
                step,
                content_name: `Etapa ${step} concluída`,
                content_type: "form_progress",
            });

            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        trackEvent("anamnese_back", {
            step: step,
            content_type: "navigation",
        });

        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        if (sending) return;
        setSending(true);
        const allFields = steps.flat();
        const hasEmptyField = allFields.some(
            (label) => !answers[label] || answers[label].trim() === ""
        );

        if (!isValidEmail(answers["Email"])) {
            setError("Digite um e-mail válido.");
            return;
        }

        if (hasEmptyField) {
            setError("Por favor, preencha todos os campos antes de enviar o formulário.");
            return;
        }

        trackEvent("AnamneseComplete", {
            content_name: "Anamnese Finalizada",
            content_type: "form_complete",
        });

        const nomeCompleto = answers["Nome completo"] || "Sem nome";

        const message = Object.entries(answers)
            .map(
                ([pergunta, resposta]) =>
                    `<b>${pergunta}:</b> ${resposta}<br><br>`
            )
            .join("");

        const templateParams = {
            to_email: "brunoassispersonal@gmail.com",
            subject: `Consultoria Online - Anamnese de ${nomeCompleto}`,
            message,
            name: nomeCompleto,
            email: answers["Email"], // 👈 ESSENCIAL
        };

        emailjs
            .send(
                "service_6oz7wms",
                "template_pqmznwk",
                templateParams
            )
            .then(() => {
                alert("Formulário enviado com sucesso! 🎉");
                setAnswers({});
                setStep(1);
                setSending(false);
            })
            .catch((err) => {
                console.error("EmailJS ERROR:", err);
                alert(err.text || err.message);
                setSending(false);
            });
    };

    const progressWidth = `${(step / totalSteps) * 100}%`;

    const RadioGroup = ({ label, options }) => (
        <div className="flex flex-col space-y-2 mt-3">
            <p>{label}</p>
            <div className="flex flex-col space-y-2 pl-2">
                {options.map((opt) => (
                    <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer hover:text-bgreen"
                    >
                        <input
                            type="radio"
                            name={label}
                            value={opt}
                            checked={answers[label] === opt}
                            onChange={(e) => handleChange(label, e.target.value)}
                            className="accent-bgreen cursor-pointer"
                        />
                        <span>{opt}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <div className="font-light flex justify-center text-white p-6">
            <div className="w-[500px]">
                <p className="text-center text-bgreen text-[36px] font-medium">
                    Anamnese
                </p>
                <p></p>
                <hr className="border-1 border-neutral-500 mt-8" />
                <p className="text-center mt-5">
                    Responda ao questionário para que possamos obter melhores resultados.
                </p>
                <div className="w-full bg-gray-700 h-2 rounded mt-8">
                    <div
                        className="bg-bgreen h-2 rounded transition-all duration-500"
                        style={{ width: progressWidth }}
                    ></div>
                </div>
                <p className="text-center mt-2">
                    Etapa {step} de {totalSteps}
                </p>

                <div className="flex justify-center mt-10">
                    <form
                        className="w-full"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (step === totalSteps) handleSubmit();
                        }}
                    >
                        <div className="space-y-4">
                            {steps[step - 1].map((label, index) => (
                                <div key={index} className="flex flex-col space-y-1 relative">
                                    <p>{label}</p>

                                    {label === "Gênero" ? (
                                        <>
                                            <select
                                                value={answers[label] || ""}
                                                onChange={(e) => handleChange(label, e.target.value)}
                                                className={`bg-transparent border rounded h-[43px] pl-2 pr-8 outline-none
                                                        text-white appearance-none cursor-pointer
                                                        ${error.includes(label)
                                                        ? "border-red-500"
                                                        : "border-neutral-300 hover:border-bgreen focus:border-bgreen"
                                                    }`}
                                            >
                                                <option value="" disabled className="text-gray-400">
                                                    Selecione
                                                </option>
                                                <option value="Masculino" className="text-black">
                                                    Masculino
                                                </option>
                                                <option value="Feminino" className="text-black">
                                                    Feminino
                                                </option>
                                                <option value="Outro" className="text-black">
                                                    Outro
                                                </option>
                                                <option value="Prefiro não informar" className="text-black">
                                                    Prefiro não informar
                                                </option>
                                            </select>

                                            {/* Setinha customizada */}
                                            <span className="pointer-events-none absolute right-3 top-[38px] text-bgreen">
                                                ▼
                                            </span>

                                            {/* BLOCO CONDICIONAL FEMININO */}
                                            {answers["Gênero"] === "Feminino" && (
                                                <div className="mt-4 space-y-4 border-l border-bgreen pl-4">
                                                    <RadioGroup
                                                        label="Você possui ciclo menstrual ativo?"
                                                        options={["Sim", "Não"]}
                                                    />

                                                    <RadioGroup
                                                        label="Seu ciclo costuma ser:"
                                                        options={["Regular", "Irregular", "Não sei informar"]}
                                                    />

                                                    <div className="flex flex-col space-y-1">
                                                        <p>Data aproximada do início da última menstruação:</p>
                                                        <input
                                                            value={answers["Data aproximada do início da última menstruação:"] || ""}
                                                            onChange={(e) =>
                                                                handleChange(
                                                                    "Data aproximada do início da última menstruação:",
                                                                    formatDate(e.target.value)
                                                                )
                                                            }
                                                            inputMode="numeric"
                                                            maxLength={10}
                                                            placeholder="DD/MM/AAAA"
                                                            className="bg-transparent border rounded h-[43px] caret-bgreen pl-2 outline-none
                        border-neutral-300 hover:border-bgreen focus:border-bgreen"
                                                        />
                                                    </div>

                                                    <RadioGroup
                                                        label="Durante o período menstrual ou pré-menstrual, você costuma:"
                                                        options={[
                                                            "Manter a mesma disposição e força",
                                                            "Sentir queda de energia ou força",
                                                            "Sentir dores, cólicas ou outros sintomas relevantes",
                                                        ]}
                                                    />

                                                    <RadioGroup
                                                        label="Caso sinta sintomas, eles costumam atrapalhar seus treinos?"
                                                        options={["Não", "Levemente", "Bastante"]}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <input
                                            value={
                                                label === "Telefone"
                                                    ? formatPhone(answers[label] || "")
                                                    : answers[label] || ""
                                            }
                                            onChange={(e) => handleChange(label, e.target.value)}
                                            inputMode={
                                                label === "Telefone" || label === "Data de nascimento"
                                                    ? "numeric"
                                                    : label === "Peso" || label === "Altura"
                                                        ? "decimal"
                                                        : "text"
                                            }
                                            maxLength={
                                                label === "Peso"
                                                    ? 6
                                                    : label === "Altura"
                                                        ? 4
                                                        : label === "Telefone"
                                                            ? 15
                                                            : label === "Data de nascimento"
                                                                ? 10
                                                                : undefined
                                            }
                                            className={`bg-transparent border rounded h-[43px] caret-bgreen pl-2 outline-none
                                            ${error.includes(label)
                                                    ? "border-red-500"
                                                    : "border-neutral-300 hover:border-bgreen focus:border-bgreen"
                                                }`}
                                        />
                                    )}
                                </div>


                            ))}
                        </div>

                        {error && (
                            <div className="bg-red-600 text-white p-3 mt-10 rounded text-center">
                                {error}
                            </div>
                        )}

                        <div className="flex justify-between mt-10 mb-6">
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
                                type={step === totalSteps ? "submit" : "button"}
                                onClick={step === totalSteps ? undefined : handleNext}
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
