import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, mensagemAprentacao }) {
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mensagemAprentacao}>Mensagem</Botao>

      <Estacionamento>
        <Carro adicionadoPor={nome} cor={'Vermelho'} ano={2022} flex />
        <Carro adicionadoPor={nome} cor={'Verde'} ano={2020} flex />
        <Carro adicionadoPor={nome} cor={'Amarelo'} ano={2009} />
        <Carro adicionadoPor={nome} cor={'Rosa'} ano={2022} />
      </Estacionamento>
    </GaragemContainer>
  )
}
