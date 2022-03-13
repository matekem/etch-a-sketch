const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const buttonsContainer = document.querySelector('buttons');

function createDivs(col,rows){
    for(let i = 0; i < (col*rows); i++ ){
        const div = document.createElement('div');
        div.style.border = "1px solid red";
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDivs(16,16);
