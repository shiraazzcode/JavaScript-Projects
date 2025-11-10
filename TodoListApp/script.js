let form = document.querySelector("form");
let display_task = document.querySelector(".displayTask");
let input = document.querySelector("#task");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const text = input.value;
    if(text == ""){
        return;
    }

    const pdiv = document.createElement("div");
    const task = document.createElement("span");
    task.textContent = text;
    task.style.marginRight = "20px";

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.style.width = "70px";

    const donebtn = document.createElement("button");
    donebtn.textContent = "Done";
    donebtn.style.marginRight = "10px";
    donebtn.style.width = "50px";

    pdiv.append(task, donebtn, deletebtn);

    display_task.append(pdiv);

    deletebtn.addEventListener("click", (e)=>{
        pdiv.remove();
    });

    donebtn.addEventListener("click", ()=>{
        task.style.textDecoration = "line-through";
        task.style.color = "grey";
    })


})