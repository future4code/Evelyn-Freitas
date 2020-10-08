const guardarInfoPost = () => {
    let tituloPost = document.getElementById("titulo-post");
    let autorPost = document.getElementById("autor-post");
    let conteudoPost = document.getElementById("conteudo-post");
    console.log(tituloPost.value);
    console.log(autorPost.value);
    console.log(conteudoPost.value);
    let infoPost = {
        titulo: 'tituloPost',
        autor: 'autorPost',
        conteudo: 'conteudoPost'
    }
    console.log(infoPost.value);
}