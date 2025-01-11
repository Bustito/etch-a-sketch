let gridRows = 16;
let gridCols = 16;

const gridElementStyle = document.createElement("style");
gridElementStyle.type = "text/css";
gridElementStyle.innerHTML = 
`.container-element { width: ${100/gridCols}%; height: ${100/gridRows}% }`;
document.getElementsByTagName("head")[0].appendChild(gridElementStyle);

const container = document.querySelector("#divContainer");
const sizeButton = document.querySelector("#sizeButton");

function createGrid(rows, cols){
    const gridElements = container.querySelectorAll(".container-element");
    for (const elem of Array.from(gridElements)) {
	elem.remove();
    }

    for(let i = 0; i < rows; i++) {
	for(let j = 0; j < cols; j++) {
	    const gridElement = document.createElement("div");
	    gridElement.classList.add("container-element");
	    container.appendChild(gridElement);
	}
    }
}

container.addEventListener("mouseover", (event) => {
    const hoverDiv = event.target;
    hoverDiv.classList.add("paintedElement");
});

sizeButton.addEventListener("click", () => {
    gridRows = prompt("Insert number of rows", 10);
    if(gridRows > 100 || gridRows < 1) gridRows = prompt("Invalid number of rows, max 100 min 1");
    gridCols = prompt("Insert number of cols", 10);
    if(gridCols > 100 || gridCols < 1) gridCols = prompt("Invalid number of cols, max 100 min 1");
    
    gridElementStyle.innerHTML = 
    `.container-element { width: ${(100/gridCols).toFixed(3)}%; height: ${(100/gridRows).toFixed(3)}% }`;
    createGrid(gridRows, gridCols);
});

createGrid(gridRows, gridCols);
