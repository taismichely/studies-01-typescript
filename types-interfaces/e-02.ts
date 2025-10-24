// Interface funciona da mesma maneira que TypeError, porém
// possui uma sintaxe diferente. As interfaces são utilizadas
// para definirmos o objetos.

// Types são usados para tipos primitivos, enquanto interface para objetos

interface InterfaceVeiculos {
  nome: string;
  placa: string;
  cor: string;
  modelo: string;
  ano: number;
  disponivel: boolean;
}

function setVeiculos(dados: InterfaceVeiculos) {
  document.body.innerHTML += `
  <div>
    <h1>Veivulos</h1>
    <p>${dados.nome}</p>
    <p>Placa: ${dados.placa}</p>
    <p>Cor: ${dados.cor}</p>
    <p>Modelo: ${dados.modelo}</p>
  </div>
  `;
}

setVeiculos({
  nome: "Citroen",
  placa: "abcdedf",
  cor: "Prata",
  modelo: "Picasso C3",
  ano: 2013,
  disponivel: true,
});
