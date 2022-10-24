import { Carro } from '../Carro'
import { Button, EstilizacaoDaGaragem } from './styles'

export function Garagem({ nome, mensagemAprentacao }) {
  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {nome}</h1>
      <Button onClick={mensagemAprentacao}>Mensagem</Button>
      <Carro adicionadoPor={nome} cor={'Vermelho'} ano={2022} flex />
      <Carro adicionadoPor={nome} cor={'Verde'} ano={2020} flex />
      <Carro adicionadoPor={nome} cor={'Amarelo'} ano={2009} />
      <Carro adicionadoPor={nome} cor={'Rosa'} ano={2022} />
    </EstilizacaoDaGaragem>
  )
}
