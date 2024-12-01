const form = document.getElementById("updateVenda")
const dataVenda = document.getElementById("dataVenda")

// GET ID FROM URL 
const urlUpdateParams = new URLSearchParams(window.location.search); // entrega um obj com os parâmetros da url
const postIdUpdate = urlUpdateParams.get("id");

async function loadVenda(id) {
    try {
        const response = await fetch(`${URL}/${id}`); // Supondo que essa URL retorna os dados do cliente
        const data = await response.json();

   
    } catch (error) {
        console.error("Erro ao carregar os dados da venda:", error);
    }
}

// Chama a função para carregar os dados assim que a página carregar
loadVenda(postIdUpdate);

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    async function updateVenda(id) {
        const vendaData = {};

        if(dataVenda.value) vendaData.day_purchase = dataVenda.value

        try{
            const response = await fetch(`${URL}/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vendaData),
            });
            
            const data = await response.json()
            console.log(data)
            alert("venda atualizada com sucesso!")
            location.reload()

        }catch (error){
            console.error("Erro na requisição:", error);
    
        }
        
    }
    updateVenda(postIdUpdate)
})