const URl =  "https://localhost:9090/client"

//GET ID FROM URL 
const urlSearchParams = new URLSearchParams(window.location.search); // entrega um obj com os parametros da url
const postId = urlSearchParams.get("id");