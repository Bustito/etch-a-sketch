let gridRows = 16;
let gridCols = 16;

const gridElementStyle = document.createElement("style");
gridElementStyle.type = "text/css";
gridElementStyle.innerHTML = 
`.container-element { width: ${100/gridCols}%; height: ${100/gridRows}% }`;
document.getElementsByTagName("head")[0].appendChild(gridElementStyle);

const container = document.querySelector("#divContainer");
const sizeButton = document.querySelector("#sizeButton");

for(let i = 0; i < gridRows; i++) {
    for(let j = 0; j < gridCols; j++) {
	const gridElement = document.createElement("div");
	gridElement.classList.add("container-element");
    	container.appendChild(gridElement);
    }
}

container.addEventListener("mouseover", (event) => {
    const hoverDiv = event.target;
    hoverDiv.classList.add("paintedElement");
});

sizeButton.addEventListener("click", () => {
    gridRows = prompt("Insert number of rows");
    gridCols = prompt("Insert number of cols");
    gridElementStyle.innerHTML = 
    `.container-element { width: ${100/gridCols}%; height: ${100/gridRows}% }`;
    const gridElements = container.querySelectorAll(".container-element");
    for(const elem of gridElements) {
	elem.classList.remove("paintedElement");
    }
});
