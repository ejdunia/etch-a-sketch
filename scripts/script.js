const gridNum = 20;

const sketchContainer = document.querySelector(".sketchContainer");
    const gridDiv = document.createElement("div");

sketchContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${gridNum}, 1fr);
    grid-template-rows: repeat(${gridNum}, 1fr);
`
);

function changeBGColor(e) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.background = `#${randomColor}`;
}


for (let i = 0; i < gridNum ** 2; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");
    gridDiv.addEventListener("mouseover", changeBGColor);
    sketchContainer.appendChild(gridDiv);
    const reset = document.querySelector(".resetGrid");

    reset.addEventListener("click", () => (gridDiv.style.background = "#f0f8ff"));
}

