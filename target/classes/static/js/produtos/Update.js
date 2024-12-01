const form = document.getElementById("updateProduct")
const prodName = document.getElementById("prodName")
const prodType = document.getElementById("prodType")
const storage = document.getElementById("storage")
const valid = document.getElementById("valid")

// GET ID FROM URL 
const urlUpdateParams = new URLSearchParams(window.location.search); // entrega um obj com os parâmetros da url
const postIdUpdate = urlUpdateParams.get("id");

async function loadProdData(id) {
    try {
        const response = await fetch(`${URL}/${id}`); // Supondo que essa URL retorna os dados do cliente
        const data = await response.json();

   
    } catch (error) {
        console.error("Erro ao carregar os dados do produto:", error);
    }
}

// Chama a função para carregar os dados assim que a página carregar
loadProdData(postIdUpdate);


form.addEventListener("submit", (e) =>{
    e.preventDefault()

    async function updateProduct(id) {
        //instacia um obj
        const prodData = {};

        // Verifica se os campos foram modificados e adiciona ao objeto clientData
        if (prodName.value) prodData.name = prodName.value;
        if (prodType.value) prodData.product_type = prodType.value;
        if (storage.value) prodData.storage = storage.value;
        if (valid.value) prodData.validity = valid.value;

        try{
        const response = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prodData),
        });

        const data = await response.json();
        console.log(data);
        alert("produto atualizado com sucesso!");
        location.reload();

        }catch (error){
        console.error("Erro na requisição:", error);

        }
    }
    updateProduct(postIdUpdate)
})