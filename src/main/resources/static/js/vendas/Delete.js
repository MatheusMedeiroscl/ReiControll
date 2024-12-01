const URL = "http://localhost:9090/buy";


//GET ID FROM URL 
const urlSearchParams = new URLSearchParams(window.location.search); // entrega um obj com os parametros da url
const postId = urlSearchParams.get("id");
console.log(postId)

const btnDelete = document.getElementById("btnDelete")

btnDelete.addEventListener("click", () =>{
    async function deleteVenda(id) {
        try{
            const response = await fetch(`${URL}/${id}`, {
                method: "DELETE", 
                headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Venda deletada")
                window.location.href = "../../views/vendas/home.html";
            })

        }catch(erro){
            console.log("erro ao deletar o client" + erro)
            alert("erro ao deletar o client")
        }

        
    }

    deleteVenda(postId)
})