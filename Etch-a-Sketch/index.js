const box = document.querySelector(".grid");
let num = parseInt(prompt("Enter the size of the grid"));

renderGrid();

function renderGrid() {
  console.log("rendering grid");
  for (let i = 0; i < num; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < num; j++) {
      const td = document.createElement("td");
      td.setAttribute("style", "border: 1px solid black");
      tr.appendChild(td);
    }
    box.appendChild(tr);
  }

  // Add event listener to each cell
  box.addEventListener("mouseover", handleCellMouseover);
}

function handleCellMouseover(e) {
  if (e.target.tagName === "TD") {
    // Change the color of the cell on mouseover
    e.target.style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
