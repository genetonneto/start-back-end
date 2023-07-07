// Faça uma função que receba uma quantidade de chuva dada em polegadas e imprima o equivalente em milímetros (25,4 mm = 1 polegada).

function parametro(chuvaPolegadas) {
    const polegadasMilimetros = 25.4;
    const chuvaMilimetros = chuvaPolegadas * polegadasMilimetros;

    console.log(chuvaPolegadas + " polegadas equivalem a " + chuvaMilimetros + " milímetros.");
}

parametro(1);