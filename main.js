
//Create a webpage with a 16x16 grid of square divs
//create divs using js. put grid Squares inside gameBox.
//use flexbox to make divs appear as a grid

// fist solution for grid, slower with a nested loop----

// function grid(size){
//     const gameBox = document.querySelector('.game-box')
//     for (let i = 0; i < size; i++) {
//         let column = document.createElement("div");
//         // column.classList.add("column");
//         for (let j = 1; j <= size; j++) {
//           let row = document.createElement("div");
//           row.classList.add("row");
//           row.style.border = "1px solid black";
//           column.appendChild(row);
//         }
//       gameBox.appendChild(column);
//     }
// }

// grid(16)

// --------------------------------------------------
//second solution for grid condense rows and cols to one loop. 

const GRIDSIDE = 500;
let size = 16;

const sketchArea = document.querySelector('.game-box')
sketchArea.style.width  = `${GRIDSIDE}px`;
sketchArea.style.hieght = `${GRIDSIDE}px`;

function changeColor(){
 this.style.backgroundColor = 'black'
}

function createGridCells(size){
    const numberOfSquares =(size * size);
    const widthOrHeight =`${(GRIDSIDE / size) -2}px`;
    // 1 loop is faster than 2, O(n)
    for(let i=0; i< numberOfSquares; i++){
        const gridCell = document.createElement('div');

        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;
        gridCell.classList.add('cell');

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor)
    }
}

createGridCells(20);