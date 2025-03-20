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

//atividade 8 
function media () {
    let n1 = prompt("Digite sua primeira nota:")*1;
    let n2 = prompt("Digite sua segunda nota:")*1;
    let n3 = prompt("Digite sua terceira nota:")*1;
    console.log ((n1 + n2 + n3)/3.0)
}
media()

//atividade 9
let m3 =[];
let nm3 = [];
let a = 0;
let b = 0;

for (let i = 1; i < 21; i++){
    if(i%3 == 0){
        m3[a] = i;  
        a++;
    } else {
        nm3[b] = i;
        b++;
    }   
}

function tabela(m3,nm3){
    console.log ("Multiplos de 3:" + m3);
    console.log ("Não multiplos de 3:" + nm3);
}

tabela()

//atividade 10
let palindromo = prompt("Digite uma palavra")
function verificarPalindromo(palindromo){
    if (palindromo === palindromo.split("").reverse().join("")){
        console.log("true");
    } else { 
        console.log("false");
    }
}
verificarPalindromo(palindromo)