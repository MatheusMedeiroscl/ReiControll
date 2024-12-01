const URL = "http://localhost:9090/client";

/* --CRIAR NOVOS CLIENTES-- */
const form = document.getElementById("createClient");
const clientName = document.getElementById("clientName");
const companyName = document.getElementById("companyName");
const cnpj = document.getElementById("cnpj");
const adress = document.getElementById("adress");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    async function createUser() {
        // Cria o objeto com os dados do formulário
        const clientData = {
            owner_name: clientName.value,
            company_name: companyName.value,
            cnpj: cnpj.value,
            adress: adress.value
        };

        // Valida se todos os campos foram preenchidos
        if (!clientData.owner_name || !clientData.company_name || !clientData.cnpj || !clientData.adress) {
            console.error("Todos os campos são obrigatórios.");
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            // Realiza a requisição
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Corrigido para minúsculas
                },
                body: JSON.stringify(clientData), // Converte os dados para JSON
            });

            // Valida a requisição
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            // Exibe mensagem de sucesso
            const result = await response.json();
            console.log("Cliente criado com sucesso:", result);
            alert("Cliente criado com sucesso!");
            window.location.href = "../../views/cliente/home.html";

        } catch (error) {
            console.error("Erro ao criar cliente:", error);
            alert("Ocorreu um erro ao criar o cliente. Tente novamente mais tarde.");
        }
    }

    // Chama a função de criação do cliente
    createUser();
});
