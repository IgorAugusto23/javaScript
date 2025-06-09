const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionando evento de cliqe ao botão salvar
salvarBtn.addEventListener("click", function(){
    const valor = campo.value;

    // Validação
    if(valor === "") {
        alert("Campo obrigatório");
        return false;
    }

    // Salvar no LocalStorage
    const chave = `ValorSalvo_${Date.now()}`
    // Funcionalidade do LocalStorage
    localStorage.setItem(chave, valor);

    // Limpar campo após salvar
    campo.value = "";

    // Exibir valores salvos
    carregarValoresSalvos();
});