// O cardápio de uma lanchonete é dado abaixo. Faça uma função que leia a quantidade de cada item que você consumiu e calcule e retorne a conta final.

function parametro(hamburguer, cheeseburguer, fritas, refrigerante, milkshake) {
    var quantHamb = 2;
    var quantChee = 1;
    var quantFritas = 1;
    var quantRefri = 1;
    var quantMilk = 2;

    return (quantHamb + quantChee + quantFritas + quantRefri + quantMilk);
}

var resultado = parametro(3.00, 2.50, 2.50, 1.00, 3.00);
console.log("Conta total = " + resultado);