let grid_box = document.querySelector(".box");
let clear_btn = document.getElementById("clear");
let color_btn = document.getElementById("color");
let grid_sizeBtn = document.getElementById("new_grid");
let currentSize = document.getElementById('current_size');

console.log(grid_box);

const createGrid = (size) => {
  grid_box.innerHTML = "";

  grid_box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid_box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-sqr");
    div.dataset.opacity = 0;
   
    div.addEventListener("mouseover", () => changeColor(div));
    grid_box.appendChild(div);

    currentSize.innerHTML = `Current grid size: ${size} x ${size}`;

  }
};

const changeColor = (sqr) => {
  let rn = Math.floor(Math.random() * 256);

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  let opc = parseFloat(sqr.dataset.opacity);
  opc = Math.min(opc + 0.1, 1);
  sqr.dataset.opacity = opc;

  let rgba = `rgba(${r}, ${g}, ${b}, ${opc})`;

  sqr.style.backgroundColor = rgba;
};

const newGridSize = () => {
  let new_size = Number(prompt("Enter grid size from 1 to 100"));
  if (new_size > 0 && new_size <= 100) {
    createGrid(new_size);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
};

const clearColor = () => {
  let sqrs = document.querySelectorAll(".grid-sqr");
  sqrs.forEach((sq) => {
    sq.style.backgroundColor = "white";
    sq.dataset.opacity = 0;
  });
};

clear_btn.addEventListener("click", clearColor);

grid_sizeBtn.addEventListener("click", () => newGridSize());

createGrid(16);
