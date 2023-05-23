/* 
Faça uma função que recebe duas notas, para:

Calcular a média do aluno,

Retornar a informação se o aluno for aprovado ou não,

Utilize a estrutura de decisão if… else.

Sabe-se que todo aluno que tiver a média maior ou igual a 5 está aprovado.
*/

function parametro(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    
    if (media >= 5) {
        return "Aluno aprovado";
    } else {
        return "Aluno reprovado";
    }
}

var resultado = parametro(5,5);
console.log(resultado);