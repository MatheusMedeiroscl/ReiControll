document.addEventListener("DOMContentLoaded", function () {
    const URL = "http://localhost:9090/buy";
    const tableBody = document.querySelector("#vendasTable");

    if (!tableBody) {
        console.error("Elemento '#vendasTable' não encontrado no DOM.");
        return;
    }

    async function getAll() {
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            } else {
                const data = await response.json();
                console.log(data);

                data.map((purchased) => {
                    const row = document.createElement("tr");

                    // ID da compra
                    const idCell = document.createElement("td");
                    idCell.innerText = purchased.id;

                    // Data da compra
                    const dataCell = document.createElement("td");
                    dataCell.innerText = purchased.day_purchase;

                    // Nome do cliente (owner_name)
                    const clientCell = document.createElement("td");
                    if (purchased.client && purchased.client.owner_name) {
                        clientCell.innerText = purchased.client.owner_name;
                    } else {
                        clientCell.innerText = "N/A"; // Fallback caso client ou owner_name não existam
                    }

                    // Nome do produto
                    const productCell = document.createElement("td");
                    if (purchased.products && purchased.products.name) {
                        productCell.innerText = purchased.products.name;
                    } else {
                        productCell.innerText = "Produto não disponível"; // Fallback caso o produto não exista
                    }

                    // Botão "detalhes"
                    const actionsCell = document.createElement("td");
                    actionsCell.innerHTML = `<button class="details" data-id="${purchased.id}">Detalhes</button>`;
           

                    // Adiciona as células na linha
                    row.appendChild(idCell);
                    row.appendChild(dataCell);
                    row.appendChild(clientCell);
                    row.appendChild(productCell);
                    row.appendChild(actionsCell);

                    // Adiciona a linha ao corpo da tabela
                    tableBody.appendChild(row);
                });

                // Adicionando evento de clique ao botão "detalhes"
                const detailButtons = document.querySelectorAll(".details");
                detailButtons.forEach(button => {
                    button.addEventListener("click", (event) => {
                        const productId = event.target.getAttribute("data-id");
                        window.location.href = `get.html?id=${productId}`;
                    });
                });
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    getAll();
});
