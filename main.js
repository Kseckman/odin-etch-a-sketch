
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

// set side of box and amount of divs
const GRIDSIDE = 500;
let size = 16;

//select div from html. convert gamebox style hight and width to px
const gameBox = document.querySelector('.game-box')
gameBox.style.width  = `${GRIDSIDE}px`;
gameBox.style.hieght = `${GRIDSIDE}px`;

function changeColor(){
 this.style.backgroundColor = 'black';
}

//function that creates the divs with a loop. 
function createGridCells(size){
    const numberOfSquares =(size * size);
    const widthOrHeight =`${(GRIDSIDE / size) -2}px`;
    // 1 loop is faster than 2, O(n)
    for(let i=0; i< numberOfSquares; i++){
        const gridCell = document.createElement('div');

        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;
        gridCell.classList.add('cell');

        gameBox.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor)
    }
}

createGridCells(20);
//solution 3 ////////////////////////////////////

document.addEventListener('DOMContentLoaded', function(){
    createBoard(16)
    console.log('hi')
})

function createBoard(){
    let board = document.querySelector('.game-box');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i=0; i<numDivs; i++){
        let div = document.greateElement('div');
        board.insertAdjacentElement('beforeEnd',div);
        div.style.backgroundColor = 'yellow';
    }
}