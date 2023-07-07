// Faça uma função que recebe a idade de uma pessoa em anos como parâmetros de entrada e retorna essa idade em dias.

function idadeEmDias(idade) {
    var diasPorAno = 365;
    var idadeEmDias = idade * diasPorAno;
    return idadeEmDias;
  }

var idade = 24;
var idadeEmDias = idadeEmDias(idade);
console.log("A idade em dias é: " + idadeEmDias);
