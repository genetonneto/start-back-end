// Faça uma função que recebe o parâmetro raio, e retorne o resultado do cálculo da fórmula: PI = raio2

function parametro(raio) {
    var area = Math.PI * Math.pow(raio, 2);
    return area;
}

var raio = 5;
var areaDoCirculo = parametro(raio);
console.log("A área do círculo é: " + areaDoCirculo);
