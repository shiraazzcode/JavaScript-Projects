const RandomQuotes = [
    "hello",
    "This is quote",
    "Death is near",
    "Life is beautiful",
    "Hardest choice requires strongest will",
    "I am inevitable",
    "You can do it",
    "Never Give up!",
    "See you again"
];

let btn = document.getElementById("btn");
let text = document.getElementById("quote");
btn.addEventListener("click", ()=>{
    const index = Math.floor(Math.random() * RandomQuotes.length);
    text.innerText = RandomQuotes[index];

});