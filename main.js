
//Create a webpage with a 16x16 grid of square divs
//create divs using js. put grid Squares inside gameBox.
//use flexbox to make divs appear as a grid

document.addEventListener('DOMContentLoaded', function(){
    createGridCells(16);

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', function(){
        let size = getSize();
        createGridCells(size);
    })
})

// set size of box
let gameBox = document.querySelector('.game-box');
let color = 'rgba(0, 0, 0, 0.959)';
const GRIDSIDE = 500;
gameBox.style.width  = `${GRIDSIDE}px`;
gameBox.style.hieght = `${GRIDSIDE}px`;

function changeColor(){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (color == 'black'){
        this.style.backgroundColor = 'black';
        parseFloat(this.style.opacity += '1');
    } else{
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.959)';
        let currentOpacity = parseFloat(this.style.opacity += '0.1');

        if(currentOpacity <1){
            currentOpacity += 0.1;
            this.style.opacity = currentOpacity.toFixed(1);
        }
    }  
}

function setColor(colorChoice){
    color = colorChoice;
}

function createGridCells(size){
    let numberOfSquares =(size * size);
    let widthOrHeight =`${(GRIDSIDE / size) -2}px`;

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
    cells.forEach((e) => e.remove());
}

function getSize(){
    let input = parseInt(prompt('Choose a number between 10 and 100 for your game board'));
    let message = document.querySelector('#message');
    if(input == '' || isNaN(input)){
        message.innerHTML ='Pleave provide a number';
    } else if (input <10 || input > 100){
        message.innerHTML = 'Provide number between 1 and 100';
    }  else{
        message.innerHTML ='Have fun.';
        removeGrid()
        return input;
    }
}

function resetGame(){
    let divs = document.querySelectorAll('.cell');
    divs.forEach((div) => {
        div.style.backgroundColor = '#f3f3f3';
        div.style.opacity = null;   
        color = 'rgba(0, 0, 0, 0.959)';
    });   
}

