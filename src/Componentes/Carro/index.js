import { CarroContainer } from './styles'

export function Carro({ automovel, adicionadoPor }) /* Aqui eu estou recebendo as props automovel e adicionadoPor vindas da Garagem. Essa é a primeira desestruturação, troquei o nome props por automovel */ 

{

const {modelo, cor, ano, flex} = automovel
  return (
    <CarroContainer> 
      <h2>{modelo}</h2> 
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}

/* 
Aqui é a segunda desestruturação, ao invés de colocar {automovel.modelo} como está abaixo, eu posso colocar somente o nome das propriedades do objeto ex. {modelo} {cor} {ano}.  

return (
  <CarroContainer>
    <h2>{automovel.modelo}</h2> 
    <ul>
      <li>Cor: {automovel.cor}</li>
      <li>Ano: {automovel.ano}</li>
      <li>Flex: {automovel.flex ? 'Sim' : 'Não'}</li>
      <li>Adicionado: {adicionadoPor}</li>
    </ul>
  </CarroContainer>
) */

/* Aqui no componente Carro nós chamamos o estado automovel que criamos na Garagem adicionando o nome do estado em cada propriedaade do carro */

/* Caso eu chame as props da Garagem pra cá separadas por propriedades do carro, eu preciso alterar o código, retirando o nome do estado de cada propriedade para que fique dessa forma:

export function Carro({ modelo, cor, ano, flex, adicionadoPor }) {
  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}*/