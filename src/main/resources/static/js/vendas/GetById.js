
const txtdata = document.getElementById("txtdata");
const txtClient = document.getElementById("txtClient");
const txtProd = document.getElementById("txtProd");




/*CARREGA  VENDAS */

async function getVenda(id) {
    try {

        const response = await fetch( `${URL}/${id}`)
        
        //valida a requisão
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        } else {

            //recolhe o JSON solicitado
            const data = await response.json();
            console.log(data); 

            txtdata.innerHTML = `Data: ${data.day_purchase}`;
            txtClient.innerHTML = `<strong>Comprador: </strong> ${data.client.owner_name}`;
            txtProd.innerHTML = `<strong>Produto: </strong> ${data.products.name}`;
            


        }
    } catch (error) {
        console.log("erro ao procurar as Vendas")
        alert("erro ao procurar as Vendas")

    }
}

getVenda(postId)   
