const form = document.getElementById("updateClient");
const client = document.getElementById("clientName");
const company = document.getElementById("companyName");
const cnpjUpdate = document.getElementById("cnpj");
const addressUpdate = document.getElementById("address");

// GET ID FROM URL 
const urlUpdateParams = new URLSearchParams(window.location.search); // entrega um obj com os parâmetros da url
const postIdUpdate = urlUpdateParams.get("id");

// Função para carregar os dados do cliente
async function loadClientData(id) {
    try {
        const response = await fetch(`${URL}/${id}`); // Supondo que essa URL retorna os dados do cliente
        const data = await response.json();

        // Preenche os campos com os dados existentes
        client.value = data.owner_name;
        company.value = data.company_name;
        cnpjUpdate.value = data.cnpj;
        addressUpdate.value = data.address;
    } catch (error) {
        console.error("Erro ao carregar os dados do cliente:", error);
    }
}

// Chama a função para carregar os dados assim que a página carregar
loadClientData(postIdUpdate);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    async function updateClient(id) {
        // Carrega os dados existentes
        const clientData = {};

        // Verifica se os campos foram modificados e adiciona ao objeto clientData
        if (client.value) clientData.owner_name = client.value;
        if (company.value) clientData.company_name = company.value;
        if (cnpjUpdate.value) clientData.cnpj = cnpjUpdate.value;
        if (addressUpdate.value) clientData.address = addressUpdate.value;

        try {
            const response = await fetch(`${URL}/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clientData),
            });

            const data = await response.json();
            console.log(data);
            alert("Usuário Atualizado com sucesso!");
            location.reload(); // Isso vai atualizar a página e carregar os dados mais recentes

        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    updateClient(postIdUpdate);
});
