function makeGrid(sizeLength){
    let etchASketch = document.querySelector("#etchASketch");

        for (let row = 0; row < sizeLength; row++){
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row");

        rowDiv.style.display = "flex";
        rowDiv.style.flexDirection = "row";

        for (let col = 0; col < sizeLength; col++){
            let cellDiv = document.createElement("div");
            cellDiv.setAttribute("class", "cell");
            rowDiv.appendChild(cellDiv);

            const cellSideLength = Math.floor(1000/sizeLength).toString();

            console.log(cellSideLength)

            cellDiv.style.width = cellSideLength + "px";
            cellDiv.style.height = cellSideLength + "px";

            cellDiv.addEventListener("mouseover", () => {
                cellDiv.style.backgroundColor = "black";
            })
        }

        etchASketch.appendChild(rowDiv);
    }
}

const newGridButton = document.querySelector("#newGrid");
newGridButton.addEventListener("click", () => {
    while (etchASketch.firstChild){
        etchASketch.firstChild.remove();
    }

    const gridSize = prompt("How many squares should each side of your grid have?");
    makeGrid(gridSize);
})