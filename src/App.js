import Garagem from "./Componentes/Garagem";
import { GlobalStyled } from "./globalStyled";

export default function App() {
  const nome = "Turma";
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}
