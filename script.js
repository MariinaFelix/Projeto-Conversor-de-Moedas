const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


convertButton.addEventListener("click", convertValues)
}

currencySelect.addEventListener("change", changeCurrency) 
    
    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImg = document.querySelector(".currency-img")

        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dólar Americano"
            currencyImg.src = ""
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImg.src="./assets/imgeuro.png"
        }

       




        currencySelect.addEventListener("change", changeCurrency)
}






convertButton.addEventListener("click", convertValues)



















