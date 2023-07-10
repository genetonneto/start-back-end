/*
 * Fazer um programa para ler o valor "r" do raio de um círculo, 
 * e depois mostrar o valor da área do círculo com três casas decimais.
 * A fórmula da área do círculo é a seguinte: 
 * area = 𝜋. r². 
 * Você pode usar o valor de 𝜋 fornecido pela biblioteca da sua 
 * linguagem de programação, ou então, se preferir, 
 * use diretamente o valor 3.14159.
 */

package aula02;
import java.util.Scanner;
public class Atividade04 {

	public static void main(String[] args) {

		double pi = 3.14;
		double raio = Math.pow(2, 2);
		double area = pi * raio;
		
		System.out.println(area);

		
	
	}

}
