function verificarPalavra() {
    const palavra = document.querySelector('#palavra').value.toLowerCase()
    const palavraCorreta = "paçoca"

    if (palavra == palavraCorreta) {
        window.location.href = "correto.html"
    }else{
        window.location.href = "erro.html"
    }
}