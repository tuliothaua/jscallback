//Varíaveis
let body = document.querySelector("body");
let prf = document.querySelector("#prf");
let valor = 0;


//Processo
function click1() {
    var fundo = prompt("Digite a cor de fundo desejada:\nex: red, blue, #63525a etc. ");
    body.style.backgroundColor = fundo;
}

function click2() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function click3() {
    var txt = prompt("Digite o texto desejado: ");
    prf.innerHTML = "(" + txt + ")";
}

function atualizar() {
    document.querySelector("#contador").textContent = valor;
}

function incrementar() {
    valor = valor + 1;
    atualizar();
}

function decrementar() {
    valor = valor - 1;
    atualizar();
}

function enviarFormulario(event){
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let mensagem = document.querySelector("#mensagem").value;
    event.preventDefault();
    alert("Valores Recebidos com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "Email: " + email + "\n\n" +
        "\t Mensagem: \n\n" + "- " +
        mensagem
);
}