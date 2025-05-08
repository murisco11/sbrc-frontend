import { useLocation } from "react-router-dom";
import participantes from "../data/participantes.json";
import HandleButton from "../components/HandleButton";
import Template from "../components/Template";

interface PartipanteProps {
  CPF: string;
  Nome: string;
  Evento: string;
  Afiliação: string;
}

export default function Dados() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cpf = queryParams.get("cpf");

  const particpantesString = JSON.stringify(participantes);
  const particpantesJson = JSON.parse(particpantesString);

  let participante = particpantesJson.find((p: PartipanteProps) => {
    return p.CPF === cpf;
  });

  if (cpf == "") {
    participante = null;
  }

  if (participante) {
    return (
      <Template w_image="h-[300px]" l_top={0}>
        <div className="flex flex-col justify-center bg-[rgba(255,255,255,0.9)] h-auto p-5 w-full max-w-md mx-auto space-y-6 shadow-[0_5px_20px_#4d4d4d] rounded-xl text-center">
          <p className="text-[#4d4d4d] font-bold text-2xl text-center">
            Os seus dados estão corretos?
          </p>
          <div className="mb-4">
            <div className="mt-1 p-3 rounded-sm font-semibold bg-[#4d4d4d] text-white">
              {participante.Nome}
            </div>
          </div>
          <div className="mb-4">
            <div className="mt-1 p-3 bg-[#4d4d4d]  rounded-sm font-semibold text-white">
              {participante.Afiliação}
            </div>
          </div>
          <div className="mb-4">
            <div className="mt-1 p-3 rounded-sm bg-[#4d4d4d] font-semibold text-white">
              {participante.Evento}
            </div>
          </div>
          <div className="flex flex-col items-center space-y-10">
            <HandleButton
              width="88"
              text="Sim! Os meus dados estão corretos"
              link="/imprimindo"
              color="#f7963e"
            />
          </div>
        </div>
      </Template>
    );
  } else {
    return (
      <Template w_image="h-[386px]" l_top={10}>
          <p className="font-bold text-2xl text-center">
            A sua inscrição possui alguma pendência <br /> ou não foi encontrada em nosso sistema! <br /> <br /> Por favor, dirija-se ao balcão de atendimento <br /> para receber suporte.
          </p>
      </Template>
    );
  }
}
