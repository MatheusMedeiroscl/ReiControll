const URL = "http://localhost:9090/client";


//GET ID FROM URL 
const urlSearchParams = new URLSearchParams(window.location.search); // entrega um obj com os parametros da url
const postId = urlSearchParams.get("id");
console.log(postId)


/*DELETE DO USUÁRIO */
const btnDelete = document.getElementById("btnDelete")

    btnDelete.addEventListener("click", () =>{
        async function deleteClient(id) {
            try{

                const response = await fetch( `${URL}/${id}`,{
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    
                    }
                }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    alert("Usuário deletado");
                    window.location.href = "../../views/cliente/home.html";
                });



            }catch{
                console.log("erro ao deletar o client")
                alert("erro ao deletar o client")
            }
            
        }

        deleteClient(postId)

})


