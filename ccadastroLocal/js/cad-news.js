const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")

salvarBtn.addEventListener("click", function(event) {
    event.preventDefault()
    const valor = campo.value

    if(valor.trim() == ""){
        alert("Escreva algo")
    }

    //Salvar no localStorage
    const chave = `ValorSalvo_${Date.now()}`
    localStorage.setItem(chave, valor)

    //limpar campo após salvar
    campo.value = ""
});