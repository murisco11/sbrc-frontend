import { useState } from "react";
import Template from "../components/Template";
import HandleButton from "../components/HandleButton";

export default function DigitarCpf() {
  const [cpf, setCpf] = useState<string>("");

  return (
    <Template w_image="h-[386px]" l_top={0}>
      <>
        <h1 className="text-2xl font-bold text-center">
          Para continuarmos, digite aqui o
          <br />
          seu CPF para encontrarmos sua inscrição
        </h1>
        <div className="p-4">
          <input
            type="text"
            placeholder="Digite aqui o seu CPF"
            className="w-80 h-16 text-xl px-4 text-center text-base text-[#333] bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4d4d4d] focus:border-[#4d4d4d] transition duration-300"
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <HandleButton
          color="#4d4d4d"
          width="64"
          link={`/dados/?cpf=${cpf}`}
          text="Verificar inscrição"
        />
      </>
    </Template>
  );
}
