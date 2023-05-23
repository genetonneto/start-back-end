/*
Faça uma função que receba o nome de 2 times e o número de gols marcados na partida (para cada time), para:

Escrever o nome do vencedor.

Caso não haja vencedor deverá ser retornada a palavra EMPATE.
*/

function parametro(sport, santa, golSport, golSanta) {
    if (sport || santa) {
        if (golSport > golSanta) {
            return ("Sport ganhou a partida");
        } else if (golSanta > golSport) {
            return ("Santa ganhou")
        } else {
            return ("Empate entre os dois times")
        }
    } 
}

var resultado = parametro("Sport", "Santa", 20, 0);
console.log(resultado);