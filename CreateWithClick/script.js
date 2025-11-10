const container = document.querySelector("body");

container.addEventListener("click", (e)=>{
    const x = e.clientX;
    const y = e.clientY;

    let box = document.createElement("div");
    box.classList.add("box");
    box.style.top = `${y}px`;
    box.style.left = `${x}px`;

    container.append(box);

    setInterval(()=>{
        container.remove();
    }, 3000)
})
