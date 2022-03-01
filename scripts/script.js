let gridNum = 16;

const slider = document.querySelector(".myRange");

const gridNumberOutput = document.querySelector(".gridNumberOutput");
const pickerContainer = document.querySelector(".pickerContainer");
const colorPicker = document.querySelector(".colorPicker");

const sketchContainer = document.querySelector(".sketchContainer");

const gridDiv = document.createElement("div");

const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
let colorPick = colorPicker.value;
const clear = document.querySelector(".clear");
gridNumberOutput.textContent = `${slider.value} X ${slider.value}`;
let grids;
const chooseColor = document.querySelector(".chooseColor");

function changeToRandomBGColor(e) {
    // makes a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.background = `#${randomColor}`;
}
function defaultColor(e) {
    e.target.style.background = "#f0f8ff";
}

function pickedColor(e) {
    e.target.style.background = colorPick;
}

function makeGrid() {
    sketchContainer.setAttribute(
        "style",
        `grid-template-columns: repeat(${gridNum}, 1fr);
        grid-template-rows: repeat(${gridNum}, 1fr);`
    );

    for (let i = 0; i < gridNum ** 2; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridDiv.addEventListener("mouseover", changeToRandomBGColor);
        sketchContainer.appendChild(gridDiv);
    }
}

rainbow.addEventListener("click", () =>
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", changeToRandomBGColor);
    })
);

eraser.addEventListener("click", () => {
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.removeEventListener("mouseover", pickedColor);
        grid.removeEventListener("mouseover", changeToRandomBGColor);
        grid.addEventListener("mouseover", defaultColor);
    });
});

chooseColor.addEventListener("click", () => {
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.removeEventListener("mouseover", changeToRandomBGColor);
        grid.addEventListener("mouseover", pickedColor);
    });
});

clear.addEventListener("click", () => {
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.style.background = "#f0f8ff";
    });
});

colorPicker.addEventListener("input", () => {
    pickerContainer.style.background = colorPicker.value;
    colorPick = colorPicker.value;
});

slider.addEventListener("input", () => {
    gridNumberOutput.textContent = `${slider.value} X ${slider.value}`;
    gridNum = slider.value;
    makeGrid();
});
pickerContainer.style.background = colorPicker.value;

makeGrid((gridNum = 16));
