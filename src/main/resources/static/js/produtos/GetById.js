
const txtProdName = document.getElementById("txtProdName");
const txtProdtype = document.getElementById("txtProdtype");
const txtStorage = document.getElementById("txtStorage");
const txtValid = document.getElementById("txtValid");


/*CARREGA  PRODUTO */
async function getProduct(id) {
    try {

        const response = await fetch( `${URL}/${id}`)
        
        //valida a requisão
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        } else {

            //recolhe o JSON solicitado
            const data = await response.json();
            console.log(data); 

            txtProdName.innerText = data.name;
            txtProdtype.innerText = data.product_type;
            txtStorage.innerHTML = `<strong>Estoque: </strong> ${data.storage}`;
            txtValid.innerHTML = `<strong>Validade: </strong> ${data.validity}`;
            


        }
    } catch (error) {
        console.log("erro ao procurar o client")
        alert("erro ao procurar o client")

    }
}

getProduct(postId)   
