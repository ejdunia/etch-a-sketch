let gridNum = 16;

const slider = document.getElementById("myRange");

const gridNumberOutput = document.getElementById("gridNumberOutput");
const pickerContainer = document.querySelector(".pickerContainer");
const colorPicker = document.querySelector("#colorPicker");

const sketchContainer = document.querySelector(".sketchContainer");

const gridDiv = document.createElement("div");
const grids = document.querySelectorAll("gridDiv");

const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
let colorPick = colorPicker.value;
const clear = document.querySelector(".clear");

const chooseColor = document.querySelector(".chooseColor");

function changeBGColor(e) {
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
        gridDiv.addEventListener("mouseover", changeBGColor);
        sketchContainer.appendChild(gridDiv);

        clear.addEventListener("click", () => {
            gridDiv.style.background = "#f0f8ff";
        });

        rainbow.addEventListener("click", () =>
            gridDiv.addEventListener("mouseover", changeBGColor)
        );

        eraser.addEventListener("click", () => {
            gridDiv.removeEventListener("mouseover", changeBGColor);
            gridDiv.addEventListener("mouseover", defaultColor);
        });
        chooseColor.addEventListener("click", () => {
            gridDiv.removeEventListener("mouseover", changeBGColor);
            gridDiv.addEventListener("mouseover", pickedColor);
        });
        // clear.addEventListener("click", defaultColor);
    }
}

gridNumberOutput.textContent = `${slider.value} X ${slider.value}`;

colorPicker.addEventListener("input", () => {
    pickerContainer.style.background = colorPicker.value;
    colorPick = colorPicker.value;
});

pickerContainer.style.background = colorPicker.value;

makeGrid((gridNum = 16));

slider.addEventListener("input", () => {
    gridNumberOutput.textContent = `${slider.value} X ${slider.value}`;
    gridNum = slider.value;
    makeGrid();
});
