/*

 Sabendo que A=5, B=4 e C=3 e D=6, informe se as expressões abaixo são verdadeiras ou falsas.

    true        false 
a)(A > C) AND (C <= D)  ==     FALSE


    false           true
b)(A + B) > 10 OR (A + B) = (C + D)  == TRUE


    true          true
c)(A >= C) AND (D >= C)  ==  TRUE


    false       false 
d)(B > D) AND (A <= C) ==    FALSE    
    

    false       false
e)(D <= A) OR (C >= B) ==    FALSE

*/


/* Q4 
Construa uma função que receba um número.
a)Se positivo mostrar a informação de que ele é positivo.
b)Se for negativo, mostrar a informação de que ele é negativo.
*/

function paramtro(numero) {
    if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }
  }

paramtro(10); 