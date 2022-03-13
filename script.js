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
        div.style.border = "0.1px solid lightgray";
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

function rgbColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnRgb.textContent = "RGB"
    btnRgb.addEventListener('click', function() {
        boxs.forEach(box => box.addEventListener('mouseover',function() {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            this.style.background = `rgb(${R},${G},${B})`;
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn');
}
rgbColor();

function reSet(){
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}
function reSize(){
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('What size grid would you like to create?')
        if(user === null || user < 1){
            reSet();
            createDivs(16,16)
            blackColor()
            grayColor()
            rgbColor()
        }
        else{
            reSet();
            createDivs(user,user)
            blackColor()
            grayColor()
            rgbColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize();