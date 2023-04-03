let decrementButton = document.getElementById("decrementBtn");
let incrementButton = document.getElementById("incrementBtn");
let displayValue = document.getElementById("displayValue");
let resetButton = document.getElementById("reset");

decrement = () => {
const value = Number(displayValue.innerText);
if(value > 0){
displayValue.innerText= value-1;
}
else{
    alert("Negetive number not allowed");
}
}

decrementButton.addEventListener("click",decrement);

increment = () => {
    const value = Number(displayValue.innerText);
    if(value >= 10){
        alert("Bigger then 10 number is not allowed");
    }
    else{
        displayValue.innerText= value+1;
    }
    }
    
    incrementButton.addEventListener("click",increment);

    reset = () => {
displayValue.innerText=0
    }
    resetButton.addEventListener("click",reset);