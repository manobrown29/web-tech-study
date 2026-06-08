const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".list");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = nome.value;
    const inputValueIdade = idade.value;
    const inputValueTelefone = telefone.value;
    const templateHTML = `<li><p>Nome:</p>${inputValue}<span> <br> <p>Idade:</p>${inputValueIdade}</span> <br> <span><p>Tel:</p>${inputValueTelefone}</span> </li>`;
    
    lista.innerHTML = templateHTML
    nome.value = "";
    idade.value = "";
    telefone.value = "";
});

