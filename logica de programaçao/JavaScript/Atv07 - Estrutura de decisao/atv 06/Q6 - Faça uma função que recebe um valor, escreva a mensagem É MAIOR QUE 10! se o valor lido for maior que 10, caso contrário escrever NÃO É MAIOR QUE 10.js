// Faça uma função que recebe um valor, escreva a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

function parametro(valor) {
    if (valor > 10) {
        return "Maior que 10!";
    } else if (valor < 10) {
        return "Não e maior que 10!";
    } else {
        return "Valor igual a 10!"
    }
}

var resultado = parametro(-100);
console.log(resultado);