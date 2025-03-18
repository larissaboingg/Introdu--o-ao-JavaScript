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
function inverterPalavra (texto) {
    console.log (texto.split('').reverse().join(''))
}

inverterPalavra(JavaScript)