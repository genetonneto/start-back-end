/*
 * Fazer um programa para calcular o troco no 
 * processo de pagamento de um produto de uma mercearia. 
 * O programa deve ler o preço unitário do produto, 
 * a quantidade de unidades compradas deste produto, 
 * e o valor em dinheiro dado pelo cliente 
 * (suponha que haja dinheiro suficiente). 
 * Seu programa deve mostrar o valor do troco a ser devolvido ao
 * cliente.
 * 
 */

package aula02;
import java.util.Scanner;
public class Atividade03 {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		
		System.out.print("Valor do produto: ");
		int valorProduto = sc.nextInt();
	
		System.out.print("Quantidade comprada: ");
		int quantidade = sc.nextInt();
		
		System.out.print("Valor recebido: ");
		double valorRecebido = sc.nextDouble();
		
		// Resultado =  Valor * Quantidade
		// Troco = ValorRecebido = resultado
		
		double totalCompra = valorProduto * quantidade;
		System.out.println("Total da compra: " + totalCompra);
		
		double troco = valorRecebido - totalCompra; 
//		System.out.println("Troco : " + troco);
	
		if (troco <= 0) {
			System.out.println(0);
		} else {
			System.out.println("Troco : " + troco);
		}
		
		sc.close();
	}

}
