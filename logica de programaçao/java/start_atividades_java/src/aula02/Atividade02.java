/*
 * Fazer um programa para ler dois valores inteiros X e Y, 
 * e depois mostrar na tela o valor da soma destes números.
 */

package aula02;

import java.util.Scanner;

public class Atividade02 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite o valor de X: ");
		int x = sc.nextInt();
		
		System.out.print("Digite o valor de Y: ");
		int y = sc.nextInt();
		
		int resultado = x + y;
		
		System.out.println("Resultado da soma : " + resultado);
		
		sc.close();

	}

}
