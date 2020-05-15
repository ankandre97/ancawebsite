
//get references to elements
const txtDrinks = document.getElementById("drinks");
const txtSize = document.getElementById("size");
const txtMilk = document.getElementById("milk");
const txtSugar = document.getElementById("sugar");
const txtCream = document.getElementById("cream");
const txtShoots = document.getElementById("shoots");
const txtOutput = document.getElementById("output");


const btnAdd = document.getElementById("add");
const btnSubmit = document.getElementById("submit")

let btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", submit);

function submit() {
    event.preventDefault();
    console.log("Your order has been confirmed.Thank you");
}




const btnSubmit;

if (confirm("Do you want to confirm your order?") == true) {
    btnSubmit = "Your order has been successfully submitted!Thank you.";
} else {
    btnSubmit = "Save Cancelled!";
}
//implement calculate event handler
function add() {

    const drinks = parseInt(txtDrinks.value);
    const size = parseInt(txtSize.value);

    const takeTotal = drinks * size;
    txtOutput.innerText = `${size} ordered ${drinks} today
    Total price for your drink is: £${takeTotal.toFixed(2)}`;
}
