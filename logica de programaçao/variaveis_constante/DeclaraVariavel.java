/*
Escreva as declarações de variáveis para armazenar as respostas das perguntas abaixo:

Você gosta de ouvir música?
Você gosta de dançar?
Você toca algum instrumento musical? Se sim, qual?

*/

package variaveis_cosntante;

import java.util.Scanner;

public class DeclaraVariavel {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scanner = new Scanner (System.in);
		
		System.out.println("Voce gosta de musica ? \n");
		boolean resultadoMusic = scanner.nextBoolean();
		
		System.out.println("Voce gosta de dançar ? \n");
		boolean resultadoDanc = scanner.nextBoolean();
		
		System.out.println("Voce toca algum estrumento musical ? \n");
		boolean resultadoEst = scanner.nextBoolean();
		
		if (resultadoEst == true) {
			System.out.println("Qual estrumento voce toca ?");
			String resultadoFinal = scanner.nextLine();
			System.out.println(scanner.nextLine());
		}
		
		
	}

}
