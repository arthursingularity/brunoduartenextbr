"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { event } from "@/lib/metaPixel";

export default function Sucesso() {
  const router = useRouter();

  useEffect(() => {
    const alreadyTracked = sessionStorage.getItem("purchase_tracked");

    if (!alreadyTracked) {
      event("Purchase", {
        value: 1,
        currency: "BRL",
      });

      sessionStorage.setItem("purchase_tracked", "true");
    }

    const timer = setTimeout(() => {
      router.push("/formulario");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-semibold text-green-500">
        Compra realizada com sucesso, obrigado!
      </h1>
      <p className="mt-4 text-gray-300">
        Você será redirecionado para o formulário em instantes...
      </p>
    </div>
  );
}