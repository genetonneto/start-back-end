// Faça uma função que recebe a idade de uma pessoa  anos, meses e dias e retorna essa idade expressa  dias.

function parametro(anos, meses, dias) {
    var diasAno = 365;
    var diasMes = 30;
    var idadeDias = ((anos * diasAno) + (meses * diasMes) + dias);

    return idadeDias;
}

var idadeDias = parametro(24, 5, 24);
console.log("A idade é " + idadeDias + " dias.");