const botaoDeTema = (document.getElementById('botao-alterar-tema'))
const body = document.querySelector("body")
const imgBotaoDeTema = document.querySelector('.botao-alterar-tema')

botaoDeTema.addEventListener("click", () => {
    //retorna um boolean
    const verificaModoEscuro = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if(verificaModoEscuro){
        imgBotaoDeTema.setAttribute("src", "./src/img/moon.png")
    }else{
        imgBotaoDeTema.setAttribute("src", "./src/img/sun.png")
        body.classList.contains("modo-escuro")
    }

})
