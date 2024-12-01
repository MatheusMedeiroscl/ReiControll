
const clientName = document.getElementById("txtClientName");
const companyName = document.getElementById("txtCompanyName");
const cnpj = document.getElementById("txtCNPJ");
const address = document.getElementById("txtAddress");




/*CARREGA  USUÁRIO */
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
           address.innerHTML = `<strong>Endereço: </strong> ${data.adress}`;
            


        }
    } catch (error) {
        console.log("erro ao procurar o client")
        alert("erro ao procurar o client")

    }
}

getClient(postId)   

