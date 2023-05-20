// Faça uma função que recebe dois parâmetros e retorna o resto da divisão deles.

function parametro(n1, n2) {
    if ((n1 % 2 == 0) && (n2 % 2 == 0)) {
        return (`n1 = ${n1}`+ ` n2 = ${n2}`);
        // console.log(n1, n2);
    }
}

var resto = parametro(2,8);
console.log(resto)