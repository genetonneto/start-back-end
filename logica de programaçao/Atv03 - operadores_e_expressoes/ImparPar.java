// Ler um número e verificar se ele é par ou ímpar. Quando for "par" armazenar esse valor em na variável P e quando for "ímpar" armazená-lo em I. Exibir P e I no final do processamento.


package operadores_e_expressoes;

public class ImparPar {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		
		int numero = 8;
		
		if (numero % 2 == 0) {
			int par = numero;
			System.out.println(par + " e um numero par");
		} else {
			int impar = numero;
			System.out.println(impar + " e um numero impar");
		}
		
	}

}
