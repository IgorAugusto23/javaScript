// Variavel
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");
//Variavel texto
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt-email");


//Criando uma função
function mudar(event){
    event.preventDefault();
    
    //Validação de formulario
    if (nome.value == "" || cidade.value == "" || email.value == "") {
        alert("Preencha o campo vazio")
        return;
    }
    
    //Imprimir na tela
    titulo.innerHTML = nome.value
    subtitulo.innerHTML = cidade.value
    txtEmail.innerHTML = email.value

    //Limpar Campos
    nome.value = "";
    cidade.value = "";
    email.value = "";
}

