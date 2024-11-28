const URL = "http://localhost:9090/client";


//GET ID FROM URL 
const urlSearchParams = new URLSearchParams(window.location.search); // entrega um obj com os parametros da url
const postId = urlSearchParams.get("id");
console.log(postId)


const clientName = document.getElementById("txtnameClient");
const companyName = document.getElementById("txtnameCompany");
const cnpj = document.getElementById("txtCNPJ");
const adress = document.getElementById("txtAdress");





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

           clientName.innerText = data.owner_name;
           companyName.innerText = data.company_name;
           cnpj.innerHTML = `<strong>CNPJ: </strong> ${data.cnpj}`;
           adress.innerHTML = `<strong>Endereço: </strong> ${data.adress}`;
            


        }
    } catch (error) {
        console.log("erro ao procurar o client")
        alert("erro ao procurar o client")

    }
}

getClient(postId)   
