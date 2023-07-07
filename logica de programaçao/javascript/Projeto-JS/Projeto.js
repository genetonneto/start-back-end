var sistema = true; // Sistema recebe valor true
var quantEstoque = [0, 0, 0]; // Array oara armazenar a quantidade de peças iniciais no estoque
var saldoInicial = false; // O saldo inicial vai ser de false, ja que ainda não foram inseridos dados dentro do array

if (sistema) { // Se o sistema for TRUE, ele vai ser iniciado
  function solicitarSaldoInicial() {

    for (i = 0; i < quantEstoque.length; i++) { // O for vai ser utilizado junto com o metodo LENGTH para ler todos os dados da linha do array;
      quantEstoque[i] = parseInt(prompt("Digite o saldo inicial da Peça " + (i + 1) + ":")); // Inserção dos dados dentro do array;
    }

    saldoInicial = true; // O valor do saldo era false, porém, como o sistema foi iniciado, e teve inserção de dados no array, ele passa a receber um valor positivo;
    alert("Saldo inicial das peças definido com sucesso!");
  }

  if (!saldoInicial) { // Se o saldo for diferente de true
    solicitarSaldoInicial(); // Uma função de chamada para solicitar o saldo inicial é ativada, isso faz com que o sistema não fique vazio, obrigatoriamente o sistema deve ser iniciado;
  }

  var operacao = 0;
  var compraRealizada = 0;
  var vendaRealizada = 0;
  var continuar = "s";

  while (operacao !== 3 && continuar === "s") { // Quando a operação não for extritamente igual a 3 (numero de peças dentro do array), e o quando o usuario escolher Sim, para continuar;
    operacao = parseInt(prompt("Selecione uma operação:\n1 - Compra\n2 - Venda\n3 - Encerrar sistema")); // As opções seram apresentadas para o usuario;

    if (operacao === 1) { // Se a operação for extritamente igual/identico a 1 | OBS: PREFERI CRIAR UMA VARIAVEL OPERAÇÃO AO INVES DE PASSAR OS DADOS DE COMPRA E VENDA PELA VARIAVEL compraRealizada e vendaRealizada, PARA EVITAR CONFLITO ENTRE OS DADOS, CRIANDO UMA VARIAVEL OPERAÇÃO É MAIS CONSISO PARA O FUNCIONAMENTO DO SISTEMA
      var quantidadeCompra = parseInt(prompt("Digite a quantidade de peças compradas:")); // Retorna a quantidade de peças compradas;
      compraRealizada += quantidadeCompra; // A compra realizada vai ser somada com a quantidade de peças que foi comprada;

      for (i = 0; i < quantEstoque.length && quantidadeCompra > 0; i++) { // Quando a quantidade de peças do estoque/array e da compra forem maiores que 0 | OBS: O metodo LENGTH é utilizado para percorrer todas as linhas do array;
        var estoqueAtual = quantEstoque[i]; // O valor do meu estoque vai ser alterado, sendo assim, ele passa a receber o valor do estoque depois de percorrer todo o meu array;
        var espacoDisponivel = quantEstoque[i] - estoqueAtual; // Em seguida, o espaço disponivel vai ser igual a subtração do valor do estoque atual (lembrando que ele vai percorrer todas as linhas do estoque/array para realizar a leitura dos dados);

        if (espacoDisponivel >= quantidadeCompra) { // Se o espaço disponivel for maior ou igual a quantidade comprada
          quantEstoque[i] += quantidadeCompra; // A quantidade no estoque vai ser somada com a quantidade que foi comprada
          quantidadeCompra = 0;

        } else { // Caso contrario
          quantEstoque[i] = quantEstoque[i]; // A quantidade no estoque continua sendo a mesma;
          quantidadeCompra -= espacoDisponivel; // E a quantidade comprada vai ser subtraida pelo espaço disponivel;
        }
      }

      alert("As peças foram adicionadas ao estoque"); // Se tudo der certo, uma informação é mostrada na tela informando que os dados foram adicionados ao estoque/array;

    } else if (operacao === 2) { // Se a operação for identica a 2
      var quantidadeVenda = parseInt(prompt("Digite a quantidade de peças vendidas:")); // Uma operação/pergunta de quantidade vendidas é adicionada a tela;
      var quantidadeDisponivel = 0;

      for (i = 0; i < quantEstoque.length; i++) { // Enquanto o valor do estoque for menor que 0 (O valor do estoque ainda esta vazio, por isso a variavel 0 acima);
        quantidadeDisponivel += quantEstoque[i]; // A quantidade disponivel no estoque vai ser somada com a qunatidade do estoque
      }

      if (quantidadeVenda <= quantidadeDisponivel) { // Se a quantidade da venda for menor da que se tem disponivel no estoque/array;
        vendaRealizada += quantidadeVenda; // A venda realizada é somada com a quantidade da venda
        var quantidadeRestante = quantidadeVenda; // Armazena o valor restante da venda ou o que ainda se tem no estoque;

        for (i = 0; i < quantEstoque.length && quantidadeRestante > 0; i++) { // Percorre todo o meu array/quantidade do estoque e enquanto a quantidade restante for maior que 0;
          var estoqueAtual = quantEstoque[i]; // Armazena a quantidade no estoque atual;

          if (estoqueAtual >= quantidadeRestante) { // Se o meu estoque atual for maior que a quantidade restante
            quantEstoque[i] -= quantidadeRestante; // A quantidade do meu estoque contado (depois de percorrer o array), vai ser subtraida pela quantidade restande;
            quantidadeRestante = 0;

          } else {
            quantEstoque[i] = 0;
            quantidadeRestante -= estoqueAtual;
          }
        }

        alert("As peças foram removidas do estoque");

      } else {
        alert("Quantidade insuficiente em estoque para realizar a venda!");
      }

    } else if (operacao === 3) { // Encerrando a operação/sistema;
      alert("Encerrando o sistema...");

    } else {
      alert("Operação inválida!");
    }


    // Criando a operação de continuidade, se a operação vai ou não ser continuada
    var saldoEstoque = "";

    for (i = 0; i < quantEstoque.length; i++) {
      saldoEstoque += "Peça " + (i + 1) + ": " + quantEstoque[i] + "\n";
    }

    alert("Saldo atualizado do estoque:\n" + saldoEstoque);

    continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
  }

  if (continuar !== "n") {
    var quantidadeEstoque = 0;

    for (i = 0; i < quantEstoque.length; i++) {
      quantidadeEstoque += quantEstoque[i];
    }

    // Gerando resultado de cada operação;
    alert("Quantidade de peças compradas: " + compraRealizada);
    alert("Quantidade de peças vendidas: " + vendaRealizada);
    alert("Quantidade de peças em estoque: " + quantidadeEstoque);

  } else {
    alert("Sistema encerrado.");
  }
} else {
  alert("Sistema Desligado");
}
