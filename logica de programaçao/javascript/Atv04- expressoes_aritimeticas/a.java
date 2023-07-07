/* Supondo que A, B e C são variáveis do tipo inteiro,
em que  A = 5, B = 10 e C = 8, e uma variável D com valor de 1.5, 
quais os resultados das expressões aritméticas */

package expressoes_aritimeticas;

public class a {

	public static void main(String[] args) {

		// a)2 * A % 3 - C;
		int a = 5;
//		int b = 10;
		int c = 8;
//		double d = 1.5; 
		double resultado = (2 * a) % (3 - c);
		System.out.println(resultado);
	}

}
