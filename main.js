
//Create a webpage with a 16x16 grid of square divs
//create divs using js. put grid Squares inside gameBox.
//use flexbox to make divs appear as a grid

// fist solution for grid
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


//second solution for grid
const GRIDSIDE = 600;
// let rows = 16;
// let cols =16;

const sketchArea = document.querySelector('.game-box')
sketchArea.style.width  = `${GRIDSIDE}px`;
sketchArea.style.hieght = `${GRIDSIDE}px`;

function createGridCells(size){
    // 1 loop is faster than 2, O(n)
    for(let i=0; i< (size*size); i++){
        const gridCell = document.createElement('div');

        gridCell.style.width =`${(GRIDSIDE / size)-2}px`;
        gridCell.style.height =`${(GRIDSIDE / size)-2}px`;
        gridCell.classList.add('cell');

        sketchArea.appendChild(gridCell);
    }
}

createGridCells(16);