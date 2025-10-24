function setDados(dados) {
    document.body.innerHTML += "\n  <div>\n    <p>".concat(dados.nome, "</p>\n    <p>Tem ").concat(dados.age, " anos</p>\n    <p> Sua profiss\u00E3o \u00E9 ").concat(dados.ocupation, "</p>\n  </div>\n  ");
}
setDados({
    nome: 'Diego',
    age: 35,
    ocupation: 'Developer'
});
setDados({
    nome: 'Lucas',
    age: 18,
    ocupation: 'Trainee'
});
var senior = {
    nome: 'Guilherme',
    age: 46,
    ocupation: 'Devops Senior'
};
