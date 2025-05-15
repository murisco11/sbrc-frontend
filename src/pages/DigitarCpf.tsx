import { useState } from "react";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";

export default function DigitarCpf() {
  const [cpf, setCpf] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [imageHeight, setImageHeight] = useState<string>("h-[386px]");

  const [lTop, setLTop] = useState<number>(0);

  const router = useNavigate();

  const validateCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (sum % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return false;

    return true;
  };

  const redirectPage = () => {
    if (!validateCPF(cpf)) {
      setError("Esse CPF não é válido");
      setTimeout(() => setError(null), 5000);
      return;
    }
    router(`/dados/?cpf=${cpf}`);
  };

  const handleDigit = (num: string) => {
    if (cpf.length < 11) {
      setCpf((prev) => prev + num);
    }
  };

  const handleBackspace = () => {
    setCpf((prev) => prev.slice(0, -1));
  };

  return (
    <Template w_image={imageHeight} l_top={lTop}>
      <>
        <h1 className="text-2xl font-bold text-center">
          Para continuarmos, digite aqui o
          <br />
          seu CPF para encontrarmos sua inscrição
        </h1>

        {error && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 text-2xl px-8 py-4 rounded shadow-lg text-center w-[60%] max-w-xl">
            {error}
          </div>
        )}

        <div className="p-4">
          <input
            type="text"
            placeholder="Digite aqui o seu CPF"
            className="w-80 h-16 text-xl px-4 text-center text-base text-[#333] bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4d4d4d] focus:border-[#4d4d4d] transition duration-300"
            value={cpf}

            onFocus={() => {
              setShowKeyboard(true);
              setImageHeight("h-[0px]");
              setLTop(12)
            }}
            readOnly
          />
        </div>

        {showKeyboard && (
          <div className="grid grid-cols-3 gap-4 justify-center items-center m3-6 px-10">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button
                key={num}
                onClick={() => handleDigit(num)}
                className="bg-gray-200 text-black text-2xl font-bold py-6 px-8 rounded-lg shadow hover:bg-gray-300 transition"
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => handleDigit("0")}
              className="bg-gray-200 text-black text-2xl font-bold p-6 px-8 rounded-lg shadow hover:bg-gray-300 transition col-span-1"
            >
              0
            </button>

            <button
              onClick={handleBackspace}
              className="col-span-2 bg-red-500 text-white text-xl font-bold py-3 rounded-lg shadow hover:bg-red-600 transition h-full"
            >
              Apagar
            </button>
          </div>
        )}

        <div className="m-1">
          <button
            className="font-bold rounded-lg text-lg w-74 h-16 bg-[#4d4d4d] text-white flex items-center justify-center shadow-xl hover:bg-[#2e2e2e] transition duration-300"
            onClick={redirectPage}
          >
            Verificar CPF
          </button>
        </div>
      </>
    </Template>
  );
}
