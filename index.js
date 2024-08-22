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

    if(nome ==""){//não considerar omes com somente espaçoes! dica: remover espaçoes em branco
      alert("Nome deve ser preenchido")
    }

}

function validaCPF(cpf) {
    if(cpf == ""){
        return false;
    }

    //if() {
     //verificar se cpf contem letras
    //}
    //verificar se cpf contém qualquer coisa que não seja ".","-" ou números (0-9)
    //verificar se o tamanho do cpg é 11 ou 14
    //validar cpf confome a regra 
    //retorna true se o cpf for válido, caso contrário retorna false
}
 //regra de validação: mutiplicar os  primeiros digitos de 10 até 2 respectivamente, pegar o resto da divisão do resultado por 11//
 //se o resto for menor que 2 o digito verificador 1 tem que ser 0//
 //se o resto for maior ou igual a 2 o digito verificador 1 tem que ser igual ao resto//


 //"=="compara só valor//
//"==="compara valor e tipo de variavel//
//