/*
 *Fazer um programa para ler a distância total (em km) 
 *percorrida por um carro, bem como o total de combustível 
 *gasto por este carro ao percorrer tal distância. 
 *Seu programa deve mostrar o consumo médio do carro, 
 *com três casas decimais.
 */

package aula02;
import java.util.Scanner;
public class Atividade06 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite a disctancia percorrida: ");
		float distancia = sc.nextFloat();
		
		System.out.print("Digite o combustivel gasto: ");
		float combustivel = sc.nextFloat();
		
		float consumoMedio = distancia / combustivel;
		System.out.println("Consumo medio: " + consumoMedio);
		
		
		sc.close();
	}

}
