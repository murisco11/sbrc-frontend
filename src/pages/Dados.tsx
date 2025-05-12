import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import participantes from "../data/participantes.json";
import HandleButton from "../components/HandleButton";
import Template from "../components/Template";

interface ParticipanteProps {
  CPF: string;
  Nome: string;
  Evento: string;
  Afiliação: string;
}

export default function Dados() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const cpf = queryParams.get("cpf");

  const lista = participantes as ParticipanteProps[];
  const participante = lista.find((p) => p.CPF === cpf) || null;

  useEffect(() => {
    if (!participante) {
      const timer = setTimeout(() => navigate("/"), 15000);
      return () => clearTimeout(timer);
    } else {
      const arrayDeDados = [
        participante.Nome,
        participante.Afiliação,
        participante.Evento,
      ];

      localStorage.setItem("participante", JSON.stringify(arrayDeDados));
    }
  }, [participante, navigate]);

  return (
    <Template w_image="h-[320px]" l_top={-2}>
      <div className="flex flex-col items-center w-90% flex-1 px-30 mb-30">
        {participante ? (
          <>
            <p className="font-bold text-2xl text-center mb-5">
              Os seus dados estão corretos?
            </p>

            <div className="bg-[white] bg-opacity-20 backdrop-blur-sm p-2 w-full max-w-sm rounded-lg shadow-lg mb-4 space-y-2">
              <div className="p-4 rounded-md font-semibold bg-[#4d4d4d] text-white text-center text-sm">
                {participante.Nome}
              </div>
              <div className="p-4 rounded-md font-semibold bg-[#4d4d4d] text-white text-center text-sm">
                {participante.Afiliação}
              </div>
              <div className="p-4 rounded-md font-semibold bg-[#4d4d4d] text-white text-center text-sm">
                {participante.Evento}
              </div>
            </div>

            <HandleButton
              width="64"
              text="Confirmar"
              link="/imprimindo"
              color="#4d4d4d"
            />
          </>
        ) : (
          // <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 w-full max-w-sm rounded-lg shadow-lg">
          <>
            <p className="font-bold text-2xl text-center">
              Inscrição pendente ou não encontrada em nosso sistema!
              <br />
              <br />
            </p>
            <p className="mt-2 text-center text-2xl">
              Por favor, dirija-se ao balcão de atendimento para receber suporte
            </p>
            {/* </div> */}
          </>
        )}
      </div>
    </Template>
  );
}
