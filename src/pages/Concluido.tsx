import Template from "../components/Template";
import HandleButton from "../components/HandleButton";

interface Props {}

export default function Concluido({}: Props) {
    return (
        <Template w_image="h-[300px]" l_top={1}>
            <div className="flex flex-col items-center justify-center space-y-7 p-4 bg-[rgba(255, 255, 255, 0.36)] rounded-lg  max-w-[500px] px-7 ml-10">
                <h1 className="bg-white rounded-lg p-4 text-3xl font-bold text-center text-[#4d4d4d]">Obrigado pela sua presença!</h1>
                <p className="text-xl text-center text-[#333]">
                    Agradecemos por se inscrever no <b>SBRC 2025</b>.<br />
                    Esperamos vê-lo(a) em breve em nossos próximos eventos.
                </p>
                <HandleButton
                    color="#4d4d4d"
                    width="64"
                    text="Voltar ao Início"
                    link="/"
                />
            </div>
        </Template>
    );
}