// Faça uma função que conte de 1 a 100 e a cada múltiplo de 7 escreva no console a mensagem: “Múltiplo de 7”.

function parametro(numero) {
    for (i = numero; i <= 100; i++) {
        if (i % 7 == 0) {
            console.log("Múltiplo de 7");
        } else {
            console.log(i);
        }
    }
}

parametro(1);