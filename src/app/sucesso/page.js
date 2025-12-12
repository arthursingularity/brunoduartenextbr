"use client";
import { useEffect } from "react";
import { event } from "@/lib/metaPixel";

export default function Sucesso() {

  useEffect(() => {
    event("Purchase", {
      value: 1,
      currency: "BRL",
    });
  }, []);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-semibold text-green-500">
        Compra realizada com sucesso, obrigado!
      </h1>
    </div>
  );
}
