const perguntas = [
  {
    pergunta: "Qual é o apelido popular de Recife?",
    respostas: [
      "Cidade das Pontes",
      "Veneza Brasileira",
      "Capital do Nordeste"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o principal rio que corta a cidade de Recife?",
    respostas: [
      "Rio Tietê",
      "Rio São Francisco",
      "Rio Capibaribe"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o famoso escritor nascido em Recife e autor de 'Memórias Póstumas de Brás Cubas'?",
    respostas: [
      "Machado de Assis",
      "Ariano Suassuna",
      "Manuel Bandeira"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do famoso mercado público em Recife, conhecido por sua arquitetura em ferro?",
    respostas: [
      "Mercado de São José",
      "Mercado da Boa Vista",
      "Mercado de São Cristóvão"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do forte histórico localizado na entrada do porto de Recife?",
    respostas: [
      "Forte do Brum",
      "Forte de Copacabana",
      "Forte de São Marcelo"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano Recife foi fundada?",
    respostas: [
      "1500",
      "1537",
      "1617"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do bairro boêmio de Recife, conhecido por sua vida noturna agitada?",
    respostas: [
      "Boa Viagem",
      "Casa Forte",
      "Recife Antigo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do festival de música que acontece anualmente em Recife durante o Carnaval?",
    respostas: [
      "Rock in Rio",
      "Olinda Beer",
      "RecBeat"
    ],
    correta: 2
  },
  {
    pergunta: "Recife é conhecida por ser a capital de qual estado brasileiro?",
    respostas: [
      "Pernambuco",
      "Bahia",
      "Ceará"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do principal time de futebol de Recife?",
    respostas: [
      "Sport Club do Recife",
      "Clube Náutico Capibaribe",
      "Santa Cruz Futebol Clube"
    ],
    correta: 0
  }
];

 
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta'+ perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta

       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)        
       }

       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    
    quizItem.querySelector('dl dt').remove()
    
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }