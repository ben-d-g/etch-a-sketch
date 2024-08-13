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

        cellDiv.style.width = cellSideLength + "px";
        cellDiv.style.height = cellSideLength + "px";


        cellDiv.style.backgroundColor = "rgba(0,0,0,0)";

        let numOfHovers = 0;

        //change this to make colours random/not random
        const randomColours = true;

        cellDiv.addEventListener("mouseover", () => {
            if (randomColours){
                //use rgba for colour, a value represents darkness (0 - 1)
                const rVal = Math.round(255 * (Math.random())).toString();
                const gVal = Math.round(255 * (Math.random())).toString();
                const bVal = Math.round(255 * (Math.random())).toString();
                const aVal = (Math.round(numOfHovers)/10).toString();

                cellDiv.style.backgroundColor = "rgba(" + rVal + "," + gVal + "," + bVal + "," + aVal +")";
                numOfHovers = Math.min(numOfHovers + 1, 10);
                console.log(numOfHovers);
            }
            else{
                cellDiv.style.backgroundColor = "black";
            }
                
        })
    }

        etchASketch.appendChild(rowDiv);
    }
}

// delete everything and start again
const newGridButton = document.querySelector("#newGrid");
newGridButton.addEventListener("click", () => {
    while (etchASketch.firstChild){
        etchASketch.firstChild.remove();
    }

    const gridSize = prompt("How many squares should each side of your grid have?");
    makeGrid(gridSize);
})