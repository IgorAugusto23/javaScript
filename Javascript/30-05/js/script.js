// Variaveis
let inputIdade = document.getElementById("idade");
let resultado = document.getElementById("resultado");

//Criando função
function resultadoClick(event) {
    event.preventDefault();

    console.log(inputIdade.value)

    // Validação de formulario
     if (inputIdade.value == "") {
         alert("Digite o campo")
         return;
     }
    
    // Logica
    if (inputIdade.value >= 18) {
        resultado.innerHTML ="Pode entrar na festa!";
        
    } else {
        resultado.innerHTML = "Não pode entrar na festa!";
    }


    //Limpar Campo
    idade.value = "";
}