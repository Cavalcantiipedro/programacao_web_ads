let pagina = document;

let botaoSubmeter = document.getElementById("botao-s")

botaoSubmeter.addEventListener("click",submeter)

let nome = document.getElementById("nome").ariaValueMax;

let idade = document.getElementById("idade").ariaValueMax

let cpf = document.getElementById("cpf").ariaValueMax

let data = document.getElementById("data").ariaValueMax
console.log(nome);

function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome);

    let idade = document.getElementById("idade").value;
    console.log(idade);

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);

    let data = document.getElementById("data").value;
    console.log(data);

}