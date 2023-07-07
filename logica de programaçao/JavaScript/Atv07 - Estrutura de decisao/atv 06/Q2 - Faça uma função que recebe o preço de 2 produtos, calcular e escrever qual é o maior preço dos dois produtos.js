// Faça uma função que recebe o preço de 2 produtos, calcular e escrever qual é o maior preço dos dois produtos.

function parametro(preçoProd1, preçoProd2) {
    if (preçoProd1 > preçoProd2) {
        return "Produto 1 e mais caro que o Produto 2";
    } else {
        return "Produto 2 e mais caro que o Produto 1";
    }
}

var resultado = parametro(100, 20);
console.log(resultado);