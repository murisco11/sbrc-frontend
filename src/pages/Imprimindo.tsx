import { useEffect, useRef } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import Template from "../components/Template";

export default function Imprimindo() {
  const router = useNavigate();
  const carregado = useRef(false);
  const participanteRaw = localStorage.getItem("participante");

  const enviarParticipante = async () => {
    if (carregado.current) return;
    carregado.current = true;

    if (participanteRaw) {
      try {
        const arrayDeStrings = JSON.parse(participanteRaw);

        const nomeArray = arrayDeStrings[0].replace(" ", "_");
        const instituicaoArray = arrayDeStrings[1].replace(" ", "_");

        const url = `http://127.0.0.1:5000/gerar_e_imprimir_pdf?nome=${encodeURIComponent(
          nomeArray
        )}&instituicao=${encodeURIComponent(instituicaoArray)}`;

        const response = await fetch(url, {
          method: "GET",
        });

        console.log("Response", response);

        const intervalo = setInterval(() => {
          router("/concluido");
          clearInterval(intervalo);
        }, 5000);

      } catch (error) {
        console.error("Erro ao enviar o participante:", error);
      }
    } else {
      console.error("Participante não encontrado no localStorage");
    }
  };

  useEffect(() => {
    enviarParticipante();
  }, []);

  return (
    <Template w_image={"h-[386px]"} l_top={0}>
      <p className="font-bold text-2xl text-center">
        Sua inscrição foi confirmada ✅
      </p>
      <p className="font-bold text-xl text-center">
        Estamos imprimindo a sua inscrição, <br /> aguarde um momento
      </p>
      <Spinner />
    </Template>
  );
}
