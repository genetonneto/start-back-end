/*

Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

Para homens: (72.7*h) - 58

Para mulheres: (62.1*h) - 44.7   

(h = altura)

*/

package operadores_e_expressoes;

public class PesoIdeal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		float alturaMas = 1.81f;
		float alturaFem = 1.65f;
		
		char sexo = 'F';
		
		float pesoMas = 72.7f; 
		float pesoFem = 62.1f;
		
		double homem = (pesoMas * alturaMas) - 58;
		double mulher = (pesoFem * alturaFem) - 44.7;
		
		if (sexo == 'M') {
			System.out.println("Peso ideal do Homem: " + homem);
		} else {
			System.out.println("Peso ideal da Mulher: " + mulher);
		}

	}

}
