import Spinner from "../components/Spinner";
import Template from "../components/Template";

export default function Imprimindo() {
  return (
    <Template w_image={"h-[386px]"}>
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
