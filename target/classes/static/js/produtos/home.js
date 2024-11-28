const URL = "http://localhost:9090/product";


/* --MOSTRA TODOS OS PRODUTOS CADASTRADOS-- */
//carrega a função ao carregar a página
document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector("#ProductTable");

    // função assicrona para pegar e exibir dados
    async function getAll() {
        try {

            // realiza a requisição
            const response = await fetch(URL);

            //valida a requisição
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            } else {

                //recolhe o JSON solicitado 
                const data = await response.json();
                console.log(data);

                //manipula os dados do JSON
                data.forEach((product) => {
                    const row = document.createElement("tr");

                    const idCell = document.createElement("td");
                    idCell.innerText = product.id;

                    const nameCell = document.createElement("td");
                    nameCell.innerText = product.name;

                    const typeProdCell = document.createElement("td");
                    typeProdCell.innerText = product.product_type;

                    const storageCell = document.createElement("td");
                    storageCell.innerText = product.storage;

                    const validCell = document.createElement("td");
                    validCell.innerText = product.validity;

                    const actionsCell = document.createElement("td");

                    actionsCell.innerHTML = `<button class="details" data-id="${product.id}">Detalhes</button>`;

                    // Adiciona as células na linha
                    row.appendChild(idCell);
                    row.appendChild(nameCell);
                    row.appendChild(typeProdCell);
                    row.appendChild(storageCell);
                    row.appendChild(validCell);
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
