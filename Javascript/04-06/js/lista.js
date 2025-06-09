const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2014
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2011
    }
    
];

function displayCars() {
    //Variavel
    const cardList = document.getElementById("card-list");

    cars.forEach ((car) => {
        // Criamos um elemento div pelo javaScript
        const cardDiv = document.createElement("div");
        // Criamos uma class css car
        cardDiv.classList.add("car")

        //Criando o modelo
        const cardModel = document.createElement("h2");
        cardModel.textContent = `${car.brand} ${car.model}`;

        

        //Criando o ano
        const cardYear = document.createElement("p");
        cardYear.textContent = `Ano: ${car.year}`;


        cardDiv.appendChild(cardModel);
        cardDiv.appendChild(cardYear);
        cardList.appendChild(cardDiv);
    })
}
displayCars();