class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const livro01 = new Produto("Marvel", 40);
console.log(livro01);

// Existem funções que retornam diferentes tipos de objetos. Com a palavara chave instanceof podemos varificar se um objeto é uma instancia (foi construido ou herda) de uma funcção construtora (class)

class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

const livro02 = new Produto("Livro 1", 50);
// Instanceof é para saber se o livro é herdado da classe Produto
console.log(livro02 instanceof Produto);

function buscarProduto(busca: string) {
  if (busca === "Receita") {
    return new Livro("Receita");
  }
  if (busca === "Minecraft") {
    return new Jogo(1);
  }
  return null;
}

const produto = buscarProduto("Minecraft");

if (produto instanceof Livro) {
  console.log(produto.autor);
}

if (produto instanceof Jogo) {
  console.log(produto.jogadores);
}
