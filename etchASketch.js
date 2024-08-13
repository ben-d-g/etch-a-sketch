function makeGrid(sizeLength){
    let etchASketch = document.querySelector("#etchASketch");

    const cellSideLength = Math.floor(1000/sizeLength);
    const gridSideLength = cellSideLength * sizeLength;

    etchASketch.style.width = gridSideLength.toString() + "px";
    etchASketch.style.height = gridSideLength.toString() + "px";

    for (let row = 0; row < sizeLength; row++){
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row");

    rowDiv.style.display = "flex";
    rowDiv.style.flexDirection = "row";

    for (let col = 0; col < sizeLength; col++){
        let cellDiv = document.createElement("div");
        cellDiv.setAttribute("class", "cell");
        rowDiv.appendChild(cellDiv);

        const cellSideLengthStr = cellSideLength.toString();

        console.log(cellSideLength)

        cellDiv.style.width = cellSideLength + "px";
        cellDiv.style.height = cellSideLength + "px";

        cellDiv.addEventListener("mouseover", () => {
            const rVal = Math.round(255 * (Math.random())).toString();
            const gVal = Math.round(255 * (Math.random())).toString();
            const bVal = Math.round(255 * (Math.random())).toString();
            cellDiv.style.backgroundColor = "rgb(" + rVal + "," + gVal + "," + bVal +")";

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