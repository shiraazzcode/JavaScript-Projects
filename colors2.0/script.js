let body = document.body;

let colors = ["Magenta", "Blue", "green", "red", "aqua", "black", "brown", "orange", "yellow"];

function randomColors(){
    let randomNumber = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[randomNumber];
}
setInterval(randomColors, 2000);