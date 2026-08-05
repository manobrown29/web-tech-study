const buttonRegra = document.querySelector("#btnMostrarRegra")
const btnMostrarDica = document.querySelector("#btnMostrarDica")
const btnMostrarDistancias = document.querySelector("#btnMostrarDistancias")

const mostrarImgRegra = document.querySelector("#mostrarImgRegra")
const mostrarImgDica = document.querySelector("#mostrarImgDica")
const mostrarImgDistancias = document.querySelector("#mostrarImgDistancias")

const sairRegra = document.querySelector(".sairRegra")
const sairDica = document.querySelector(".sairDica")
const sairDistancia = document.querySelector(".sairDistancia")


mostrarImgRegra.style.display = "none"
mostrarImgDica.style.display = "none"
mostrarImgDistancias.style.display = "none"


buttonRegra.addEventListener("click", function () {

    mostrarImgRegra.style.display = "block"
    mostrarImgDica.style.display = "none"
    mostrarImgDistancias.style.display = "none"

    sairRegra.style.display = "none"
    sairDica.style.display = "block"
    sairDistancia.style.display = "block"

    buttonRegra.style.display = "none"
    btnMostrarDica.style.display = "block"
    btnMostrarDistancias.style.display = "block"

})


btnMostrarDica.addEventListener("click", function () {

    mostrarImgRegra.style.display = "none"
    mostrarImgDica.style.display = "block"
    mostrarImgDistancias.style.display = "none"

    sairRegra.style.display = "block"
    sairDica.style.display = "none"
    sairDistancia.style.display = "block"

    buttonRegra.style.display = "block"
    btnMostrarDica.style.display = "none"
    btnMostrarDistancias.style.display = "block"

})

btnMostrarDistancias.addEventListener("click", function () {

    mostrarImgRegra.style.display = "none"
    mostrarImgDica.style.display = "none"
    mostrarImgDistancias.style.display = "block"

    sairRegra.style.display = "block"
    sairDica.style.display = "block"
    sairDistancia.style.display = "none"

    buttonRegra.style.display = "block"
    btnMostrarDica.style.display = "block"
    btnMostrarDistancias.style.display = "none"

})