const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".list");

button.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHTML = `<li>${inputValue}</li>`;
    
    lista.innerHTML += templateHTML;

    nome.value = "";
});

