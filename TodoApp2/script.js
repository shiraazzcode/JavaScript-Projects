//ToDo App

const input = document.querySelector("#input");
const addbtn = document.querySelector("#addbtn");
const taskbox = document.querySelector(".taskdisplay");

addbtn.addEventListener("click", (e)=>{
    e.preventDefault();

    let text = input.value;
    if(text == ''){
        return;
    }

    let box = document.createElement("div");
    box.style.marginBottom = "10px";

    let span = document.createElement("span");
    span.textContent = text;
    span.style.marginRight = "20px";

    let delbtn = document.createElement("button");
    delbtn.textContent = "Remove";


    box.append(span, delbtn);

    taskbox.append(box);

    delbtn.addEventListener("click", (e)=>{
        box.remove();
    })
})