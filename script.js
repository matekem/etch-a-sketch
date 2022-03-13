const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

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


function grayColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnGray.textContent = "GRAY"
    btnGray.addEventListener('click',function(){
        boxs.forEach(box => box.addEventListener('mouseover',function(){
            let RNum = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${RNum},${RNum},${RNum})`
            box.style.background = GrayScale;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}

grayColor();

function blackColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = "BLACK"
    btnBlack.addEventListener('click', function() {
        boxs.forEach(box => box.addEventListener('mouseover',function() {
            this.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}

blackColor();