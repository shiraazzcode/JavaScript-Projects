let grid_box = document.querySelector(".box");
let clear_btn = document.getElementById("clear");
let color_btn = document.getElementById("color");

console.log(grid_box);

const createGrid = (size) => {
  grid_box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid_box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-sqr");
    div.dataset.opacity = 0;
    //div.innerText = i;

    // color_btn.addEventListener('click', colorFunc(){
    //     div.addEventListener('mouseover', ()=> changeColor(div))
    // })
    div.addEventListener("mouseover", () => changeColor(div));
    grid_box.appendChild(div);
  }
};

const changeColor = (sqr) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  let opc = parseFloat(sqr.dataset.opacity);
  opc = Math.min(opc + 0.1, 1);
  sqr.dataset.opacity = opc;

  let rgba = `rgba(${0}, ${0}, ${0}, ${opc})`;

  sqr.style.backgroundColor = rgba;
};

const clearColor = () => {
  let sqrs = document.querySelectorAll(".grid-sqr");
  sqrs.forEach((sq) => {
    sq.style.backgroundColor = "white";
  });
};

clear_btn.addEventListener("click", clearColor);
createGrid(16);
