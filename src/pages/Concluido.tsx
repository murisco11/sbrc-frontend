import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Template from "../components/Template";

interface Props {}

export default function Concluido({}: Props) {
  const router = useNavigate();

  useEffect(() => {
    const intervalo = setInterval(() => {
      router("/");
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Template w_image="h-[300px]" l_top={1}>
      <h1 className="rounded-lg p-4 text-3xl font-bold text-center">
        Obrigado pela sua presença!
      </h1>
      <p className="text-xl text-center">
        Agradecemos por se inscrever no <b>SBRC 2025</b>.<br />
        Esperamos vê-lo(a) em breve em nossos próximos eventos.
      </p>
    </Template>
  );
}
