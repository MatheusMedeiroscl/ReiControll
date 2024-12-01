
const txtClientName = document.getElementById("txtClientName");
const txtCompanyName = document.getElementById("txtCompanyName");
const txtCNPJ = document.getElementById("txtCNPJ");
const txtAddress = document.getElementById("txtAddress");




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

            txtClientName.innerText = data.owner_name;
            txtCompanyName.innerText = data.company_name;
            txtCNPJ.innerHTML = `<strong>CNPJ: </strong> ${data.cnpj}`;
            txtAddress.innerHTML = `<strong>Endereço: </strong> ${data.adress}`;
            


        }
    } catch (error) {
        console.log("erro ao procurar o client")
        alert("erro ao procurar o client")

    }
}

getClient(postId)   

