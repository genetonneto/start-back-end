/*
 * Fazer um programa para ler o nome e idade de duas pessoas.
 * Ao Final, mostrar uma mensagem com os nomes e 
 * a idade médias entre essas pessoas com uma casa decimal, 
 * conforme exemplo.
*/
package aula02; // Nome do pacote;

import java.util.Scanner; // Importação do objeto Scanner;

public class Atividade01 { 

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite o nome da primeira pessoa: ");
		String pessoa1 = sc.nextLine();
		
		System.out.print("Digite o nome da Segunda Pessoa: ");
		String pessoa2 = sc.nextLine();
		
		System.out.print("Digite a idade da primeira pessoa: ");
		int idadePessoa1 = sc.nextInt();
		System.out.print("Digite a idade da segunda pessoa: ");
		int idadePessoa2 = sc.nextInt();
		
		System.out.println("");
		System.out.println("Dados digitados da primeira pessoa: ");
		System.out.println("Nome da primeira pessoa : " + pessoa1);
		System.out.println("Idade da primeira pessoa: " + idadePessoa1);

		System.out.println("Dados digitados da segunda pessoa: ");
		System.out.println("Nome da Segunda pessoa : " + pessoa2);
		System.out.println("Idade da segunda pessoa: " + idadePessoa2);
		
		sc.close();
		
	}

}
