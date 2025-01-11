const container = document.querySelector("#divContainer");

for(let i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("container-element");
    container.appendChild(gridElement);
}

