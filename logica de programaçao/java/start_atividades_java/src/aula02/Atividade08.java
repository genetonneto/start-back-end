/* Fazer um programa para ler uma duração de tempo em segundos, 
 * daí imprimir na tela esta duração no formato horas:minutos:segundos.
 */

package aula02;
import java.util.Scanner;
public class Atividade08 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.println("Insira o tempo: ");
		int tempo = sc.nextInt();
		
		int hora = tempo / 3600;
        int minuto = (tempo % 3600) / 60;
        int segundo = (tempo % 3600) % 60;
		
        System.out.print("Horario atual: " + hora + "/" + minuto + "/" + segundo);
        
//        Essa questão foi feita como o enunciado solicita, mas acredito que esta não é a maneira correta de realizar.
//        Acredito que a maneira correta seria realizar a chamada da linha 13 mais de uma vez, onde eu deveria ter mais de um numero sendo utilizado para as respectivas conversões. 
		
	}

}
