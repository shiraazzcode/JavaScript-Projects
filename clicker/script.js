
//

console.log("hello")
const body = document.querySelector("body");
// where in the body is clicked?
body.addEventListener("click", (e)=>{
    //clicked position coordinates
    let x = e.clientX; //X horizontal
    let y = e.clientY; //y vertical
    
    
    let circle = document.createElement("div");
    
    circle.classList.add("circle");

    
    let colors = ["red", "blue", "green", "aqua", "magenta", "orange", "yellow", "aquamarine"];
    let rn = Math.floor(Math.random()*colors.length);
  
    circle.style.backgroundColor = colors[rn];
    let alphas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    circle.innerHTML = alphas[Math.floor(Math.random()*alphas.length)];
    
    // -25 means to put its origin on where its clicked
    circle.style.top = `${y - 25}px`;
    circle.style.left = `${x - 25}px`;

    body.append(circle);
    

    setInterval(()=>{
        circle.remove();
    }, 1500);

})

