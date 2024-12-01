const URL = "http://localhost:9090/product";

const form = document.querySelector("#createProd")
const prodName = document.getElementById("prodName")
const prodType = document.getElementById("prodType")
const storage = document.getElementById("storage")
const valid = document.getElementById("valid")


form.addEventListener("submit", (e) =>{
    e.preventDefault();
   


    async function createProd() {
        const prodData = {
            name: prodName.value,
            product_type: prodType.value,
            storage: storage.value,
            validity: valid.value
        };

        if(!prodData.name | !prodData.product_type | !prodData.storage | !prodData.validity){
             console.error("Todos os campos são obrigatórios.");
            alert("Por favor, preencha todos os campos.");
            return;
        }
        try{


        const response = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Corrigido para minúsculas
            },
            body: JSON.stringify(prodData), // Converte os dados para JSON
        })

         // Valida a requisição
         if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        // Exibe mensagem de sucesso
        const result = await response.json();
        console.log("Produto criado com sucesso:", result);
        alert("Produto criado com sucesso!");
        window.location.href = "../../views/produto/home.html";

        }catch(error){
            console.log("erro ao criar produto", error)
        }

    }

    createProd()

})
