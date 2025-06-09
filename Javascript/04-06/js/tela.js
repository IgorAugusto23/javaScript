const messageDiv = document.querySelector("#message");
const button = document.querySelector("button");
const checkBox = document.querySelector("#conditionCheckbox");


const clickCheckbox = function (){
    const isCondition = checkBox.checked;

    if (isCondition) {
        messageDiv.innerHTML = "A condição é verdadeira";
    } else {
        messageDiv.innerHTML = "A condição é falsa";
    }
}


button.addEventListener("click",clickCheckbox );