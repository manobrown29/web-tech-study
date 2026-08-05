const apagarBtn = document.querySelector("#apagar")

apagarBtn.addEventListener("click", function() {
    localStorage.clear()

    listaValores.innerHTML = "";
})