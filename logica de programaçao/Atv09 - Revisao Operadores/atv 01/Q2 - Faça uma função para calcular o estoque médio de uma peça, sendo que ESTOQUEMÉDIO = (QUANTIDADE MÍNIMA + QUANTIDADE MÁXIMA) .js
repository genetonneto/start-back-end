// Faça uma função para calcular o estoque médio de uma peça, sendo que ESTOQUEMÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2

function parametro(estoqueMedio) {
    var quantidadeMin = 4;
    var quantidadeMax = 100;
    var estoqueMedio = (quantidadeMin + quantidadeMax) / 2
    return estoqueMedio;
}

var resultado = parametro(0);
console.log(resultado)