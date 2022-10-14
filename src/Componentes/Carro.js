import { EstilizacaoDoCarro } from "./styledCarro";

function Carro(props) {
  return (
    <div>
      <EstilizacaoDoCarro>
        <h2>Volksvagem</h2>
        <li>Cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
        <li>adicionadoPor: {props.adicionadoPor}</li>
      </EstilizacaoDoCarro>
    </div>
  );
}

export default Carro;
