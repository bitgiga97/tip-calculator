//CUSTOM VARIABLES
const billAmount = document.getElementById("input");
const numberOfPeople = document.getElementById("inputNum");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("amount");
const billTotalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("reset");
const buttons = document.querySelectorAll(".percent");


// loop through tip buttons and add eventlistener to them, then calculate
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let tipvalue = e.target.innerText;
        tipvalue = tipvalue.substr(0, tipvalue.length - 1);
        if (billAmount.value === "") return;
        if (numberOfPeople.value === "") numberOfPeople.value = 1;

        calculateTip(
            parseFloat(billAmount.value),
            parseInt(tipvalue),
            parseInt(numberOfPeople.value)
        )
    })
});

customTipPercentage.addEventListener("input", (e) => {
    if (billAmount.value === "") {
        resetEveryThing();
        return;
    }
    if (numberOfPeople.value === "") numberOfPeople.value = 1;
    calculateTip(
        parseFloat(billAmount.value),
        parseFloat(e.target.value),
        parseInt(numberOfPeople.value)
    );

})

function calculateTip(billAmount, tipPercentage, numberOfPeople) {
    let tipAmount = (billAmount * (tipPercentage / 100) / numberOfPeople);
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);

    let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    billTotalPerPerson.innerHTML = `$${totalAmount}`;
}

resetButton.addEventListener("click", resetEveryThing);


//reset function
function resetEveryThing() {
    billTipAmount.innerHTML = "$0.00";
    billTotalPerPerson.innerHTML = "$0.00";
    billAmount.value = "";
    numberOfPeople.value = "";
    customTipPercentage.value = "";
}