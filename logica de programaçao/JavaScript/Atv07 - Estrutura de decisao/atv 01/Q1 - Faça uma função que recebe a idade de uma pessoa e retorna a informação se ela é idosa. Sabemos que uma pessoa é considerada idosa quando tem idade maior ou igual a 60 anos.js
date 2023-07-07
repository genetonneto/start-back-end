// Faça uma função que recebe a idade de uma pessoa e retorna a informação se ela é idosa. Sabemos que uma pessoa é considerada idosa quando tem idade maior ou igual a 60 anos.

function parametro(idade) {
    if (idade < 17) {
        return "A pessoa possui idade entre 1 a 17 anos"
    } else if (idade >= 18 && idade < 60) {
        return "A pessoa é maior de idade";
    } else {
        return "A pessoa é considerada idosa"
    }
}

var resultado = parametro(60);
console.log(resultado);