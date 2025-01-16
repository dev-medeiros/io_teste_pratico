// Selecionando elementos
const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

// Função para criar um novo card
function createProductCard(name, description, price, categories) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div>
      <h3>${name}</h3>
      <p>${description}</p>
      <p><strong>Preço:</strong> R$${price.toFixed(2)}</p>
      <p><strong>Categorias:</strong> ${categories}</p>
    </div>
    <div>
      <button class="edit-btn"><i class="fas fa-edit"></i> Editar</button>
      <button class="delete-btn"><i class="fas fa-trash-alt"></i> Apagar</button>
    </div>
  `;

  // Botão Apagar
  card.querySelector(".delete-btn").addEventListener("click", () => {
    productList.removeChild(card);
  });

  // Botão Editar
  card.querySelector(".edit-btn").addEventListener("click", () => {
    // Preenche o formulário com os dados do card
    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("price").value = price;
    document.getElementById("categories").value = categories;
    // Remove o card da lista
    productList.removeChild(card);
  });

  // Adiciona o card à lista de produtos
  productList.appendChild(card);
}

// Manipulação do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtendo valores dos campos do formulário
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = parseFloat(document.getElementById("price").value);
  const categories = document.getElementById("categories").value;

  // Validações básicas
  if (!name || !description || !price || !categories) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Criar o card
  createProductCard(name, description, price, categories);

  // Resetar formulário
  form.reset();
});