document.addEventListener("DOMContentLoaded", function () {
    const URL = "http://localhost:9090/client";
    const tableBody = document.querySelector("#ClientTable");

    if (!tableBody) {
        console.error("Elemento '#ClientTable' não encontrado no DOM.");
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

                data.map((client) => {

                    const row = document.createElement("tr");

                    const idCell = document.createElement("td");
                    idCell.innerText = client.id;

                    const nameCell = document.createElement("td");
                    nameCell.innerText = client.owner_name;

                    const companyCell = document.createElement("td");
                    companyCell.innerText = client.company_name;
        
                    const cnpjCell = document.createElement("td");
                    cnpjCell.innerText = client.cnpj;

                    const actionsCell = document.createElement("td");
                    actionsCell.innerHTML = `<button class="details" data-id="${client.id}">Detalhes</button>`;
        
        
                    // Adiciona as células na linha
                    row.appendChild(idCell);
                    row.appendChild(nameCell);
                    row.appendChild(companyCell);
                    row.appendChild(cnpjCell);
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