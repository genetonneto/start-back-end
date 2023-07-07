// Faça uma função que recebe um número entre 12 e 20. Se a pessoa digitar um número diferente, mostrar a mensagem "número inválido". Se digitar corretamente, escrever no console o número recebido.

function parametro(numero) {
    for (i = 12; i <= 20; i++) {
        if (numero != i) {
            return "Numero invalido";
        } else {
            return "Numero recebido";
        }
    }
}

var resultado = parametro(1);
console.log(resultado);