let slider = document.getElementById("myRange");
let gridNumberOutput = document.getElementById("gridNumberOutput");
let gridNum = 16;
const sketchContainer = document.querySelector(".sketchContainer");
const gridDiv = document.createElement("div");

gridNumberOutput.textContent = `${slider.value} X ${slider.value}`; // Display the default slider value

function changeBGColor(e) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.background = `#${randomColor}`;
}
function makeGrid() {
    sketchContainer.setAttribute(
        "style",
        `grid-template-columns: repeat(${gridNum}, 1fr);
    grid-template-rows: repeat(${gridNum}, 1fr);
`
    );
    for (let i = 0; i < gridNum ** 2; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridDiv.addEventListener("mouseover", changeBGColor);
        sketchContainer.appendChild(gridDiv);
        const reset = document.querySelector(".resetGrid");

        reset.addEventListener(
            "click",
            () => (gridDiv.style.background = "#f0f8ff")
        );
    }
}

makeGrid((gridNum = 16));

slider.oninput = function () {
    // Update the current slider value (each time you drag the slider handle)
    // let gridNum = slider.value;
    gridNumberOutput.textContent = this.value;
    gridNum = slider.value;
    //     sketchContainer.setAttribute(
    //         "style",
    //         `grid-template-columns: repeat(${gridNum}, 1fr);
    //     grid-template-rows: repeat(${gridNum}, 1fr);
    // `    );
    makeGrid();
};
