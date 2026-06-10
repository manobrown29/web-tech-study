const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")

function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value

    if(inputNotaValue == ""){
        alert("Digite a nota!!")
        return false;
    }
    
    if(inputNota.value >= 6){
        alert("O aluno foi aprovado")
    }else{
        alert("O aluno foi reprovado")
    }
}       