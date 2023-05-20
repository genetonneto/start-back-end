// Faça uma função que retorna uma pergunta ao usuário sobre seu nome.

function perguntarNome() {
    var nome = prompt("Qual é o seu nome?");
    return nome;
  }
  
  var nomeUsuario = perguntarNome();
  console.log("Olá, " + nomeUsuario + "! Como posso ajudar?");
  