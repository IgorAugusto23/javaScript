// Variaveis
let anoCopa = 1930;
let anoLimite = prompt("Qual é o ano limite?");

// Mostrar frase
function mostrarFrase(frase) {
    document.write(frase + "<br>");
}

// Logica
while(anoCopa <= anoLimite) {
    mostrarFrase(anoCopa + " Tem copa")
    anoCopa += 4;
}

mostrarFrase("Copa do mundo! " + anoCopa);