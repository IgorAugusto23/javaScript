// Variavel
const range = document.querySelector("#range");
const rangeValue = document.querySelector("#rangeValue");
const trocarCor = document.querySelector("#trocarCor");
const voltarCor = document.querySelector("#voltarCor");

const rangeCor = function (){
    rangeValue.innerHTML = range.value;
}

const trocarCorBody = function(){
    document.body.style.background = "blue";
}
const voltarCorBody = function(){
    document.body.style.background = "";
}

//Função
range.addEventListener("input", rangeValue);

trocarCor.addEventListener("click", trocarCorBody);
voltarCor.addEventListener("click", voltarCorBody);
