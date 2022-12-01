function maiorNumero(){

const form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e){
    e.preventDefault();

const numeroA = document.getElementById("numeroA").value;
const numeroB = document.getElementById("numeroB").value;

const mensagemSucesso = "Sucesso: O número B é maior que o número A."
const mensagemFalha = "Falha: O número B é menor que o número A."

if(numeroB > numeroA){
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

}else{
    const containMensagemFalha = document.querySelector('.error-message');
    containMensagemFalha.innerHTML = mensagemFalha;
    containMensagemFalha.style.display = 'block';
}

})

}

function limparCamposEMensagem(){
    document.getElementById('numeroA').value = '';
    document.getElementById('numeroB').value = '';
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';
}
