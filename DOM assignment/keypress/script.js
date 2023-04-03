
let inputBox = document.getElementById('input-box') ;
let display = document.getElementById('display');

function keyPress(e){
    display.innerText="You entered " + e.key;
}
inputBox.addEventListener("keypress", keyPress);