import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {
 const [nome, setNome]=useState("Silvana")  /* Aqui eu estabeleço a variável inicial ("Silvana") */

const mudaNome = () => {
  setNome("Danielle") /* Aqui eu altero a variável inicial, de "Silvana" para "Danielle" */
  console.log(setNome);
}; 

   return (
    <div className="App">
      <GlobalStyled />

      <Garagem 
      nome={nome} 
      mudaNome={mudaNome}
      /> 
    </div>  
  )
}

/* Criamos aqui um estado onde o nome é o nome da variável, o setNome é a função que altera essa variável, e passamos um estado inicial para essa função, que é o nome "Labenu" */

 /* Toda vez que eu preciso alterar um estado, eu preciso usar a função set + nome do estado, nesse caso setNome  */

 /*  Para essa informação que está no estado ser renderizada na tela, ao invés de passar a string atual "Labenu" eu passo meu estado, que nesse caso é o {nome}  */

 /* O React não renderiza e atualiza na tela automaticamente a alteração de uma variável, por isso precisamos usar o state (estado) para que essa alteração ocorra, passando o nome do estado criado por props no return 

O useState permite alterar/atualizar algum campo/informação da página sem precisar atualizar a página inteira */

/* No useState podemos desestruturar uma ou mais variáveis em objetos e arrays e enviar via props, no return, para outros componentes filhos */

/* Quando você usa um aplicativo ou um site, às vezes precisa interagir com ele, como preencher um formulário ou comprar algo. Quando você faz essas ações, o que está na tela pode mudar, como o que você digitou ou o produto que você comprou. Para que essas mudanças aconteçam, o aplicativo precisa "memorizar" alguns valores, como o que você digitou ou o que está no seu carrinho de compras. No React, essa memória específica do que está acontecendo na tela e muda com o tempo é chamada de "estado".

Para atualizar um componente com novos dados, duas coisas precisam acontecer:
1. Acionar o React para renderizar novamente o componente com novos dados (re-renderização).
2. Reter os dados entre as renderizações.

Solução: Para acionar uma nova renderização e reter os dados no React, precisamos implementar as variáveis de estado.

Para implementar uma variável de estado, importe useState do React na parte superior do arquivo:

import { useState } from 'react';

Em seguida, substitua esta linha:

let contador = 0;

por

const [contador, setContador] = useState(0);

[contador é o valor inicial, setcontador é a função que atualiza o estado]

contador agora é uma variável de estado e setContador é a função que atualiza a variável de estado.

É assim que eles trabalham juntos na função incrementar:

import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1)
    console.log(contador);
  };

  return (
    <div className="App">
      <h1>{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

Resumindo: Para criar e usar uma variável de estado em React, é preciso importar useState do React e substituir a variável local por uma variável de estado, utilizando a função useState.

Em termos simples, o useState é uma função especial no React que permite que você gerencie o estado em um componente do React.

No React, `useState, assim como qualquer outra função que comece com use, é  também chamada de Hook. Para esse tipo de função temos algumas regras que chamamos de regras dos hooks:

1. Só podem ser chamados dentro de componentes React.
2. Só podem ser chamados no início do escopo dos componentes.

Você não pode chamar Hooks dentro de condições, loops ou outras funções aninhadas. Hooks são funções, mas é útil pensar neles como declarações que são necessárias para o funcionamento de seu componente. Você “usa” os recursos do React na parte superior do seu componente, de maneira semelhante à forma como “importa” os módulos na parte superior do seu arquivo.

O set sinaliza que a função guardada é responsável por atualizar o estado.

Aqui estão exemplos de implementações corretas:

const [contagem, setContagem] = useState(0)

const [titulo, setTitulo] = useState("")

const [descricao, setDescricao] = useState("")

Se quisermos atualizar o valor de cada um dos estados podemos fazer como os exemplos abaixo:

setContagem(contagem + 1)

setTitulo("Aprenda como usar um estado em React")

setDescricao("Faça a importação do useState e implemente-o no início do seu componente rReact")

Importante: Você pode ter quantas variáveis de estado de quantos tipos quiser em um componente. 

Resumo:

1. Qualquer função que comece com use no React é um Hook
2. Chame os Hooks somente em componentes React.
3. Hooks só podem ser usados no início do escopo dos componentes.
4. Sempre que for implementar variáveis de estado importe o {useState} entre chaves e no topo do componente
5. Implemente o estado usando a desestruturação de arrays
6. Siga as convenções estabelecidas pelas pessoas desenvolvedoras para nomear as variáveis de estado.
7. Utilize a primeira posição do array retornado por useState() para obter o valor do estado.
8. Use a segunda posição do array retornado por useState() para atualizar o estado.

Desestruturação

- Sintaxe mais simples para criar variáveis a partir de objetos e arrays
- Permite atribuir propriedades (em caso de objetos) ou posições (em caso de arrays) de forma mais direta
- Muito usado com funções que retornam mais de um valor, como o hook de useState!
- É uma forma de guardar valores de arrays e objetos em variáveis

Desestruturação - Objetos

Ao lidar com objetos, é comum acessar suas propriedades e atribuí-las a variáveis. Antes, isso era feito de forma manual, uma propriedade de cada vez:

//Objeto 
const pessoa = {
  nome: 'Maria',
  idade: 30,
  cidade: 'São Paulo',
  profissao: 'Engenheira',
  salario: 10000
}

//Sintaxe tradicional
const nome = pessoa.nome
const idade = pessoa.idade
const cidade = pessoa.cidade
const profissao = pessoa.profissao
const salario = pessoa.salario

Com a desestruturação, é possível atribuir as propriedades a variáveis com os mesmos nomes de forma mais simples e direta:

//Objeto 
const pessoa = {
  nome: 'Maria',
  idade: 30,
  cidade: 'São Paulo',
  profissao: 'Engenheira',
  salario: 10000
}

//Desestruturação
const {nome, idade, cidade, profissao, salario} = pessoa

Desestruturação - Array

Com arrays, é comum acessar suas posições e atribuí-las a variáveis. Antes, isso era feito de forma manual, uma posição de cada vez:

//array
const nomes = ['Ana', 'Beatriz', 'Carlos', 'Daniel', 'Eduarda', 'Fernanda', 'Gabriel', 'Helena', 'Isabela', 'João']

//Sintaxe tradicional
const nome1 = nomes[0]
const nome2 = nomes[1]
const nome3 = nomes[2]
const nome4 = nomes[3]
const nome5 = nomes[4]
const nome6 = nomes[5]
const nome7 = nomes[6]
const nome8 = nomes[7]
const nome9 = nomes[8]
const nome10 = nomes[9]

Com a desestruturação, é possível atribuir as posições a variáveis com nomes específicos de forma mais simples e direta:

//array
const nomes = ['Ana', 'Beatriz', 'Carlos', 'Daniel', 'Eduarda', 'Fernanda', 'Gabriel', 'Helena', 'Isabela', 'João']

//Desestruturação
const [nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10] = nomes

Objetos utilizam chaves {} e arrays utilizam colchetes [] na desestruturação: essa é a principal diferença entre a desestruturação de objetos e arrays. Para desestruturar um objeto, utilizamos chaves {} e para desestruturar um array, utilizamos colchetes [].

Objetos utilizam o nome da propriedade para criar as variáveis: na desestruturação de um objeto, o nome das variáveis criadas é o mesmo nome da propriedade do objeto. Já na desestruturação de um array, as variáveis criadas podem receber qualquer nome que escolhermos.

Arrays criam variáveis em ordem: na desestruturação de um array, as variáveis são criadas em ordem, de acordo com a posição do elemento no array. Já na desestruturação de um objeto, as variáveis são criadas de acordo com o nome da propriedade do objeto.
*/
