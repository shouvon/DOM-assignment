let container= document.getElementById("container");
let display= document.getElementById("display");

function keyDown(e){
    display.style.color="red";
    display.innerText=e.key + " is keydown";
}
document.addEventListener("keydown",keyDown);


function keyUp(e){
    display.style.color="green";
    display.innerText=e.key + " is keyup";
}
document.addEventListener("keyup",keyUp);