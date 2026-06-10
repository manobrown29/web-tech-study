function minhaFuncao(){
    document.write("Minha Função");
}

function pularLinha(){
    document.write("<br><br>");
}

function meuNome(nome){
    pularLinha();
    document.write(nome);
    pularLinha();
}

minhaFuncao();
pularLinha();
minhaFuncao();
meuNome("João Pedro");