const URL = "http://localhost:9090/product";


//GET ID FROM URL 
const urlSearchParams = new URLSearchParams(window.location.search); // entrega um obj com os parametros da url
const postId = urlSearchParams.get("id");
console.log(postId)


const txtnameProd = document.getElementById("txtnameProd");
const nameTipoProd = document.getElementById("nameTipoProd");
const txtEstoque = document.getElementById("txtEstoque");
const txtValidade = document.getElementById("txtValidade");





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

            txtnameProd.innerText = data.name;
            nameTipoProd.innerText = data.product_type;
            txtEstoque.innerHTML = `<strong>Estoque: </strong> ${data.storage}`;
            txtValidade.innerHTML = `<strong>Validade: </strong> ${data.validity}`;
            


        }
    } catch (error) {
        console.log("erro ao procurar o client")
        alert("erro ao procurar o client")

    }
}

getClient(postId)   
