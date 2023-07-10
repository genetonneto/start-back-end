/* Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e mostrar 
 * (imprimir os dados com quatro casas decimais): 
 * a) a área do quadrado que tem lado A 
 * b) a área do triângulo retângulo que base A e altura B
 * c) a área do trapézio que tem bases A e B, e altura C
 */

package aula02;
import java.util.Scanner;
public class Atividade07 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Insira o valor de A: ");
		double a = sc.nextDouble();
		
		System.out.print("Insira o valor de B: ");
		double b = sc.nextDouble();
		
		System.out.print("Insira o valor de C: ");
		double c = sc.nextDouble();
				
		
		double quadrado = Math.pow(a, 2); 
		System.out.println("Valor do quadrado: " + quadrado);
		
		double trianguloRetangulo = (a * b) / 2;
		System.out.println("Area do triangulo retangulo: " + trianguloRetangulo);
		
		double trapezio = ((a + b) * c) / 2;
		System.out.println("Area do trapezio: " + trapezio);
		
		
		sc.close();
	}

}
