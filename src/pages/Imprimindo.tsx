
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
        const arrayFinal = arrayDeStrings.map((e: string) => {
          return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        });

        const response = await fetch("http://localhost:3000/receber-array", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ arrayFinal }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Resposta do servidor:", data);
          router("/concluido");
        } else {
          console.error(
            "Erro na requisição:",
            response.status,
            await response.text()
          );
        }
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
