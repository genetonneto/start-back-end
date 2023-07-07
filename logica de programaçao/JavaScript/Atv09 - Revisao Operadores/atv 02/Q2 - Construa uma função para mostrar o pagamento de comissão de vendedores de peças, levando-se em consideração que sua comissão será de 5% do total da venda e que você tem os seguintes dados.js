/* 
Construa uma função para mostrar o pagamento de comissão de vendedores de peças, levando-se em consideração que sua comissão será de 5% do total da venda e que você tem os seguintes dados:

a)dentificação do vendedor

b)Código da peça

c)Preço unitário da peça

d)Quantidade vendida
*/

function parametro(identVendedor, codiPeça, preçoUnit, quantVendida) {
    var totalVenda = preçoUnit * quantVendida;
    var comissao = totalVenda * 0.05;
    console.log("Identificação do Vendedor:", identVendedor);
    console.log("Código da Peça:", codiPeça);
    console.log("Preço Unitário da Peça:", preçoUnit);
    console.log("Quantidade Vendida:", quantVendida);
    console.log("Total da Venda:", totalVenda);
    console.log("Comissão a ser Paga:", comissao);
  }
  
  // Exemplo de uso da função:
  parametro("Vend1", "P123", 10, 20);
  