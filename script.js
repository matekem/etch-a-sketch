function genDivs(v){ 
    

    var e = document.querySelector('#gridBox'); // whatever you want to append the rows to:
    
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var j = 1; j <= v; j++){ 
          var cell = document.createElement("div"); 
          cell.className = "gridSquare"; 
          cell.innerText = j;
          row.appendChild(cell); 
      } 
     
      e.appendChild(row); 
      
    } 
    return e.innerHTML;
}

function genButtonFunction(){
    
    const grid = document.querySelector('#gridBox');
    const gridSize = window.prompt("Determine the size of your grid:");
    grid.innerHTML =  null;
    genDivs(gridSize);
    
    return grid;
}

function generateNewGrid(){

const genButton = document.querySelector('#generateButton');

genButton.addEventListener('click', () =>{
    genButtonFunction();
    
});
}

function $(id){return document.getElementById(id);}



genDivs(16);
generateNewGrid();
asd();
