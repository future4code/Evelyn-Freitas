const guardarInfoPost = () => {
    let tituloPost = document.getElementById("titulo-post");
    let autorPost = document.getElementById("autor-post");
    let conteudoPost = document.getElementById("conteudo-post");
    
    let infoPost = {
        titulo: tituloPost.value,
        autor: autorPost.value,
        conteudo: conteudoPost.value
    }
    
    let arrayPost = [infoPost];
    arrayPost.inner
    infoPost.value = ""
}