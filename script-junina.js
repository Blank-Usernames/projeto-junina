function verificarPalavra() {
    const palavra = document.querySelector('#palavra').value.toLowerCase()
    const palavraCorreta = "paçoca"

    if (palavra == palavraCorreta) {
        window.location.href = "correto.html"
    }else{
        window.location.href = "erro.html"
    }
}

const enter = document.querySelector('#palavra')
enter.addEventListener('keypress',function(enterPress){
    if (enterPress.key === 'Enter') {
        enterPress.preventDefault()
        document.querySelector('button').click()
    }
})
