
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
document.addEventListener('DOMContentLoaded', function(){
    createGridCells(16);

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', function(){
        removeGrid()
        let size = getSize();
        createGridCells(size);
    })
})

// set side of box and amount of divs
const GRIDSIDE = 500;
let gameBox = document.querySelector('.game-box')
gameBox.style.width  = `${GRIDSIDE}px`;
gameBox.style.hieght = `${GRIDSIDE}px`;


//select div from html. convert gamebox style hight and width to px

function changeColor(){
    this.style.backgroundColor = 'black';
}

//function that creates the divs with a loop. 
function createGridCells(size){
    let numberOfSquares =(size * size);
    let widthOrHeight =`${(GRIDSIDE / size) -2}px`;
    // 1 loop is faster than 2, O(n)
    for(let i=0; i< numberOfSquares; i++){
        let gridCell = document.createElement('div');

        gridCell.style.width = widthOrHeight;
        gridCell.style.height = widthOrHeight;
        gridCell.classList.add('cell');

        gameBox.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor)
    }
}

function removeGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((e) => e.remove())
}

//solution 3 ////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function(){
//     createBoard(16)
//     let btn_popup = document.querySelector('#popup');
//     btn_popup.addEventListener('click', function(){
//         let size = getSize();
//         createBoard(size);
//     })
//     console.log('hi')
// })

// function createBoard(){
//     let board = document.querySelector('.game-box');

//     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//     let numDivs = size * size;

//     for(let i=0; i<numDivs; i++){
//         let div = document.createElement('div');
//         board.insertAdjacentElement('beforeEnd',div);
//         div.style.backgroundColor = 'yellow';
//     }
// }

function getSize(){
    let input = parseInt(prompt('Choose a number between 10 and 100 for your game board'));
    let message = document.querySelector('#message');
    if(input == '' || isNaN(input)){
        message.innerHTML ='Pleave provide a number';
    } else if (input <10 || input > 100){
        message.innerHTML = 'Provide number between 1 and 100';
    }  else{
        message.innerHTML ='Have fun.';
        return input;
    }

}