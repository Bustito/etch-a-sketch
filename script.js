const gridHeight = 16;
const gridWidth = 16;

const gridElementStyle = document.createElement("style");
gridElementStyle.type = "text/css";
gridElementStyle.innerHTML = 
`.container-element { width: ${100/gridWidth}%; height: ${100/gridHeight}% }`;
document.getElementsByTagName("head")[0].appendChild(gridElementStyle);

const container = document.querySelector("#divContainer");

for(let i = 0; i < gridHeight; i++) {
    for(let j = 0; j < gridWidth; j++) {
	const gridElement = document.createElement("div");
	gridElement.classList.add("container-element");
    	container.appendChild(gridElement);
    }
}

