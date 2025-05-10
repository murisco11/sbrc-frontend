import { Routes, Route } from "react-router-dom";
import TelaInicial from "./pages/TelaInicial";
import DigitarCpf from "./pages/DigitarCpf";
import Dados from "./pages/Dados";
import Imprimindo from "./pages/Imprimindo";
import Concluido from "./pages/Concluido";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TelaInicial />} />
      <Route path="/digitar_cpf" element={<DigitarCpf />} />
      <Route path="/dados" element={<Dados />} />
      <Route path="/imprimindo" element={<Imprimindo />} />
      <Route path="/concluido" element={<Concluido />} />
    </Routes>
  );
}
