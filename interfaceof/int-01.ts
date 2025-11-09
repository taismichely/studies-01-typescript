class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const livro = new Produto("Marvel", 40);
console.log(livro);
