import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react'

  
  const carro1 = {
    modelo: "Tempra",
    ano: 1997,
    cor: "Vermelho",
    flex: true,
  }
  const carro2 = {
    modelo: "Corolla",
    ano: 2017,
    cor: "Preto",
    flex: false,
  }
  const carro3 = {
    modelo: "Volvo XC50",
    ano: 2022,
    cor: "Azul Petróleo",
    flex: true,
  }
  const carro4 = {
    modelo: "Land Rover Discovery 4",
    ano: 2015,
    cor: "Marrom",
    flex: false,
  }

  export function Garagem({nome, mudaNome}) {
    const [automovel, setAutomovel] = useState(carro1) /* ({modelo: "Fiat Bravo", cor: "Grafite", ano: 2015, flex: false}) essa é a desestruturação básica padrão de um único objeto */

    const mudaCarro = () => {
      setAutomovel(carro2)
    }
    const mudaCarro1 = () => {
      setAutomovel(carro3)
    }
    const mudaCarro2 = () => {
      setAutomovel(carro4)
    }

    return (
      <GaragemContainer>
        <h1>Garagem da {nome}</h1>
        <Botao onClick={mudaNome}>Muda nome</Botao>
        <Botao onClick={mudaCarro}>Muda carro</Botao>
        <Botao onClick={mudaCarro1}>Muda carro1</Botao>
        <Botao onClick={mudaCarro2}>Muda carro2</Botao>
  
        <Estacionamento>
          <Carro
            adicionadoPor={nome}
            automovel={automovel} 
          />
        </Estacionamento>
      </GaragemContainer>
    )
  }


/* export function Garagem({nome, mudaNome}) Aqui eu estou recebendo as props nome e setNome vindas do componente App {
  
  const [automovel, setAutomovel] = useState({modelo:"Fiat Bravo", cor:"Grafite", ano: 2017, flex: true})

  function mudaNome(nome){ 
    setNome(nome)
  }
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={()=>mudaNome("Silvana")}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          automovel={automovel} 
          adicionadoPor={nome} 
        
        />
        
      </Estacionamento>
    </GaragemContainer>
  )
} */

/* Aqui em adicionadoPor eu estou enviando a props nome que recebi do componente App para o componente Carro.  */






/* AULA TURMA A */


/* export function Garagem({ nome, mudaNome }) {
  const [automovel, setAutomovel] = useState(
    {modelo: "Fiat Bravo", cor: "Grená", ano: 2017, flex: true} */
     /* Aqui na Garagem fizemos a mesma coisa do App, criamos um novo estado e passamos as informações do carro que estavam dentro do return para esse estado. Nesse caso o automóvel é um objeto que tem o modelo corsa, cor branco, ano 2020 e flex. E enviamos por props para o nosso componente Carro, conforme consta na tag carro dentro do return */

  /* return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          adicionadoPor={nome}
          automovel={automovel} 
        
        />
      </Estacionamento>
    </GaragemContainer>
  )
} */

/* Ao invés de passar os estados nome e automovel inteiros como fiz acima, eu posso enviar para o componente Carro via props cada propriedade do carro separadamente, dessa forma:

return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={nome}
          flex={automovel.flex}
        />
      </Estacionamento>
    </GaragemContainer>
  ) */

