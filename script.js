const botaoEnviar = document.getElementById("botaoEnviar");

botaoEnviar.addEventListener("click", validaFormulario)

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");

function validaFormulario(){

  if(nome.value != "" && 
  email.value != "" && 
  mensagem.value != ""){
    alert("Obrigada por compartilhar a sua História de Pet comigo!")
  }else{
    alert("Por favor, preencha os campos Nome e Email e Mensagem.")
  }
}