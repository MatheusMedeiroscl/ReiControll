const URL = "http://localhost:9090/client";


/* --MOSTRA TODOS AS CLIENTES CADASTRADOS-- */
//carrega a função ao carregar a página
document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector("#ClientTable");

    // função assicrona para pegar e exibir dados    
    async function getAll() {
        try {
            // realiza a requisição
            const response = await fetch(URL);

            //valida a requisão
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            } else {

                //recolhe o JSON solicitado
                const data = await response.json();
                console.log(data);

                //manipula o JSON
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

                    const adressCell = document.createElement("td");
                    adressCell.innerText = client.adress;

                    const actionsCell = document.createElement("td");
                    actionsCell.innerHTML = `<button class="details" data-id="${client.id}">Detalhes</button>`;
        
        
                    // Adiciona as células na linha
                    row.appendChild(idCell);
                    row.appendChild(nameCell);
                    row.appendChild(companyCell);
                    row.appendChild(cnpjCell);
                    row.appendChild(adressCell);
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

