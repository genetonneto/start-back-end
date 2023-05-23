// Faça uma função que recebe a média do aluno, e retorne se ele for aprovado ou não.

function parametro(media) {
    if (media < 7){
        return "Aluno reprovado";
    } else {
        return "Aluno aprovado";
    }
}

var resultado = parametro(5);
console.log(resultado);