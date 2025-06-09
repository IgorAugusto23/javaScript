const inputNota = document.getElementById("nota");

function verificarNota(){
   const valor = inputNota.value;
   // validando o formulario
   if (valor == "") {
        alert("Digite sua nota");
        return;
   } 
   
   
   // LOGICA

    if (valor >= 6) {
        alert("Você passou de ano");
    } else {
        alert("Você esta reprovado");
    }

    // Limpando a caixa
    inputNota.value = "";
}