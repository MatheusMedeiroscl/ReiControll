const URL = "http://localhost:9090/buy";

const form = document.querySelector("#createVenda");
const data = document.getElementById("data");
const clientID = document.getElementById("clientID");
const produtoID = document.getElementById("prodID");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    async function createVenda() {
        // Monta os dados da venda
        const vendData = {
            day_purchase: data.value, // Captura o valor do input (string)
            client: {
                id: clientID.value,
            },
            products: {
                id: produtoID.value,
            },
        };

        // Validação dos campos
           if (!vendData.day_purchase || !vendData.client.id || !vendData.products.id) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        try {
            // Envia os dados para a API
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vendData),
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            const result = await response.json();
            alert("Venda cadastrada com sucesso!");
            console.log("Venda cadastrada com sucesso:", result);
            form.reset(); // Reseta o formulário
        } catch (error) {
            console.error("Erro ao criar a venda:", error);
            alert("Ocorreu um erro ao criar a venda. Tente novamente.");
        }
    }

    createVenda();
});
