let etchASketch = document.querySelector("#etchASketch");

for (let row = 0; row < 16; row++){
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");

    rowDiv.style.display = "flex";
    rowDiv.style.flexDirection = "row";

    for (let col = 0; col < 16; col++){
        let cellDiv = document.createElement("div");
        cellDiv.setAttribute("class", "cell");
        rowDiv.appendChild(cellDiv);

        cellDiv.style.width = "50px";
        cellDiv.style.height = "50px";

        cellDiv.addEventListener("mouseover", () => {
            cellDiv.style.backgroundColor = "black";
        })
    }

    etchASketch.appendChild(rowDiv);
}