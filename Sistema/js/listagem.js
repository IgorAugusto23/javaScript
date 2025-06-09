const listaValores = document.querySelector("#listaValores")

// Carregar valores salvos ao iniciar a página
carregarValoresSalvos();

// função para carregar
function carregarValoresSalvos() {
    listaValores.innerHTML = ""; // Limpar a lista antes de adicionar valores

    for (let i = 0 ; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if(chave.startsWith("ValorSalvo")) {
            const valor = localStorage.getItem(chave);
            const listItem = document.createElement("li");
            listItem.textContent = valor;
            listaValores.appendChild(listItem);
        }
    }
}