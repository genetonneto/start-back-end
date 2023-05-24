/*
O inverno é uma estação maravilhosa, não é? Aquele fiozinho é bom demais. Faça uma função que represente as situações abaixo em que o humor das pessoas é definido de acordo com as tendências climáticas. Com base nas temperaturas dos últimos três dias, as pessoas podem estar tristes ou felizes.

Se a temperatura diminuiu do 1º para o 2º dia, mas aumentou ou permaneceu constante do 2º para o 3º , as pessoas ficam felizes (primeira figura).

Se a temperatura aumentou do 1º para o 2º dia, mas diminuiu ou permaneceu constante do 2º para o 3º , as pessoas ficaram tristes (segunda figura).

Se a temperatura aumentou do 1º para o 2º dia e do 2º para o 3º , mas aumentou do 2º para o 3º menos do que aumentou do 1º para o 2º , as pessoas estão triste (terceira figura).

Se a temperatura aumentou do 1º para o 2º dia e do 2º para o 3º , mas aumentou do 2º para o 3º pelo menos o que aumentou do 1º para o 2º , as pessoas estão felizes (quarta figura).

Se a temperatura diminuiu do 1º para o 2º dia e do 2º para o 3º , mas diminuiu do 2º para o 3º menos do que diminuiu do 1º para o 2º , as pessoas estão felizes (quinto dígito).

Se a temperatura diminuiu do 1º para o 2º dia e do 2º para o 3º , mas diminuiu do 2º para o 3º pelo menos o que havia diminuído do 1º para o 2º , as pessoas estão triste (sexta figura).

Se a temperatura permanecer constante do 1º ao 2º dia, as pessoas ficam felizes se a temperatura aumentou do 2º para o 3º ou triste caso contrário (respectivamente, sétimo e oitavo dígitos).


*/
function parametro(temperaturaDia1, temperaturaDia2, temperaturaDia3) {
  if (temperaturaDia1 > temperaturaDia2 && (temperaturaDia2 < temperaturaDia3 || temperaturaDia2 == temperaturaDia3)) {
    console.log("As pessoas ficam felizes.");
  } else if (temperaturaDia1 < temperaturaDia2 && (temperaturaDia2 > temperaturaDia3 || temperaturaDia2 == temperaturaDia3)) {
    console.log("As pessoas ficam tristes.");
  } else if (temperaturaDia1 < temperaturaDia2 && temperaturaDia2 < temperaturaDia3 && (temperaturaDia3 - temperaturaDia2) < (temperaturaDia2 - temperaturaDia1)) {
    console.log("As pessoas ficam tristes.");
  } else if (temperaturaDia1 < temperaturaDia2 && temperaturaDia2 < temperaturaDia3 && (temperaturaDia3 - temperaturaDia2) >= (temperaturaDia2 - temperaturaDia1)) {
    console.log("As pessoas ficam felizes.");
  } else if (temperaturaDia1 > temperaturaDia2 && temperaturaDia2 > temperaturaDia3 && (temperaturaDia2 - temperaturaDia3) < (temperaturaDia1 - temperaturaDia2)) {
    console.log("As pessoas ficam felizes.");
  } else if (temperaturaDia1 > temperaturaDia2 && temperaturaDia2 > temperaturaDia3 && (temperaturaDia2 - temperaturaDia3) >= (temperaturaDia1 - temperaturaDia2)) {
    console.log("As pessoas ficam tristes.");
  } else if (temperaturaDia1 == temperaturaDia2) {
    if (temperaturaDia2 < temperaturaDia3) {
      console.log("As pessoas ficam felizes.");
    } else {
      console.log("As pessoas ficam tristes.");
    }
  } else {
    console.log("Não é possível determinar o humor das pessoas com base nas temperaturas fornecidas.");
  }
}

parametro(15, 10, 12);
