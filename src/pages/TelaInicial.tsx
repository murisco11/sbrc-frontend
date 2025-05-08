import HandleButton from "../components/HandleButton";
import Template from "../components/Template";

export default function TelaInicial() {
  return (
    <Template w_image="h-[386px]" l_top={10}>
      
      <>
        <h1 className="text-2xl font-bold text-center">
          Seja muito bem-vindo (a)
          <br />
          ao <b>SBRC 2025</b>
        </h1>
        <HandleButton
          color="#4d4d4d"
          width="64"
          text="Clique aqui para iniciar"
          link="/digitar_cpf"
        />
      </>
    </Template>
  );
}
