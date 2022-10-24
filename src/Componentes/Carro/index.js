import { EstilizacaoDoCarro } from './styles'

export function Carro({ modelo, cor, ano, flex, adicionadoPor }) {
    return (
        <EstilizacaoDoCarro>
            <h2>{modelo}</h2>
            <li>Cor: {cor}</li>
            <li>Ano: {ano}</li>
            <li>Flex: {flex}</li>
            <li>Adicionado: {adicionadoPor}</li>
        </EstilizacaoDoCarro>
    )
}
