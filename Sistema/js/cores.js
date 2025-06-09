// Criar as variaveis
const selectCores = document.querySelector("#cores");
const caixaCor = document.querySelector("#caixaCor");  

//function
selectCores.addEventListener("change", function(){
    const corSelecionada = selectCores.value;

  console.log(corSelecionada)

  //Atualiza a cor de fundo da caixa
  caixaCor.style.backgroundColor = corSelecionada;
})