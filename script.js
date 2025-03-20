//atividade1
function verificarParImpar (numero) {
    if(numero % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }
}
verificarParImpar (11)



//atividade2
function calculo (numero1, numero2) {
    console.log ("Soma:" +(numero1 + numero2));
    console.log ("Subração:"+(numero1 - numero2));
    console.log ("Multiplicação:"+(numero1 * numero2));
    console.log ("Divisão:"+(numero1 / numero2))

}
calculo (10,10)

//atividade 3
let count = 10;
while (count >= 1) {
    console.log (count);
    count--;
}


//atividade 4
let texto = prompt("Digite uma palavra: ");

function inverterTexto(texto) {
    console.log(texto.split("").reverse().join(""));
} 
inverterTexto(texto);


//atividade 5

function contarCaracteres(palavra) {
    console.log (palavra.split(""));
    for (let i=0; i<palavra.lenght ; i++){

    };
}
let palavra = prompt("Digite uma palavra: ");
contarCaracteres(palavra)

//atividade 6
let carro = {
    marca : prompt("Digite a marca do carro:"),
    modelo : prompt("Digite o modelo do carro:"),
    ano : prompt("Digite o ano do carro:"),
    crr: function() {
       console.log(this.modelo);
}
};
carro.crr()

//atividade 7
function mensagemPersonalizada() {
    let nome = prompt("Escreva seu nome:");
    let mensagem = "Olá";
    console.log (mensagem + " "+ nome);
}
mensagemPersonalizada()