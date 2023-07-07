/* 
Faça uma função que receba a idade da pessoa, e informe:

Se a idade for igual a 65, dizer que a pessoa pode se aposentar por idade.

Se a idade for igual a 50, dizer que faltam 15 anos para se aposentar por idade.

Se a idade for igual a 35, dizer que faltam 30 anos para se aposentar por idade.

Qualquer idade diferente, dizer que procure o INSS.
*/

function parametro(idade) {
    if (idade == 65) {
        return "Pode se aposentar por idade";
    } else if (idade == 50) {
        return "Faltam 15 anos para se aposentar por idade";
    } else if (idade == 35) {
        return "Faltam 30 anos para se aposentar por idade";
    } else {
        return "Procure o INSS";
    }
} 

var resultado = parametro(24);
console.log(resultado);