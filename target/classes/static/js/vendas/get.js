const URL = "http://localhost:9090/buy";


//GET ID FROM URL 
const urlSearchParams = new URLSearchParams(window.location.search); // entrega um obj com os parametros da url
const postId = urlSearchParams.get("id");
console.log(postId)


const txtdata = document.getElementById("txtdata");
const txtClient = document.getElementById("txtClient");
const txtProd = document.getElementById("txtProd");





    async function getClient(id) {
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
        console.log("erro ao procurar o client")
        alert("erro ao procurar o client")

    }
}

getClient(postId)   
