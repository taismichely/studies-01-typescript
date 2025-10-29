// Defina a interface da API https://api.origamid.dev/json/notebook.json e mostre os dados na tela
async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
}

fetchProduct();
function showProduct(data: { nome: string }) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}
