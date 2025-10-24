// Utilizando o Type para tornar o código limpo e com uma melhor visão com suas aplicações

type Pessoas = {
  nome: string;
  age: number;
  ocupation: string;
};

function setDados(dados: Pessoas) {
  document.body.innerHTML += `
  <div>
    <p>${dados.nome}</p>
    <p>Tem ${dados.age} anos</p>
    <p> Sua profissão é ${dados.ocupation}</p>
  </div>
  `;
}

setDados({
  nome: "Diego",
  age: 35,
  ocupation: "Developer",
});

setDados({
  nome: "Lucas",
  age: 18,
  ocupation: "Trainee",
});
