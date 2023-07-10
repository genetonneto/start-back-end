/*
 *Fazer um programa para ler o nome de um(a) funcionário(a), 
 *o valor que ele(a) recebe por hora, e a quantidade de horas
 *trabalhadas por ele(a). 
 *Ao final, mostrar o valor do pagamento do funcionário com 
 *uma  mensagem explicativa, conforme exemplo.
 */

package aula02;
import java.util.Scanner;
public class Atividade05 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite o nome do funcionario : ");
		String nomeFuncionario = sc.nextLine();
		
		System.out.print("Digite o valor que recebe por hora: ");
		double valorHora = sc.nextDouble();
		
		System.out.print("Digite a quantidade de horas trabalhadas: ");
		float horasTrabalhadas = sc.nextFloat();
	
//		Valor hora * horas trabalhadas;
		
		double pagamentoFuncionario = valorHora * horasTrabalhadas;
		
		System.out.println("Nome: " + nomeFuncionario);
		System.out.println("Valor por hora: " + valorHora);
		System.out.println("Horas trabalhadas: " + horasTrabalhadas);
		System.out.println("O pagamento para " + nomeFuncionario + " foi de : " + pagamentoFuncionario);
	}

}
