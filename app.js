const DEFAULT_SIZE = 16;

const resizeBtn = document.getElementById('resizeBtn');
const clearBtn = document.getElementById('clearBtn');
const grid = document.getElementById('grid');
let items;

function resizeGrid(){
    let newSize = +prompt("New size");
    setUpGrid(newSize);
}

function setUpGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    grid.innerHTML = "";
    for(let i = 0; i < size * size; i++){
        let div = document.createElement('div');
        div.classList.add('item');
        div.setAttribute('onmouseover',"changeColor(this)")
        grid.appendChild(div);
    }
    items = document.querySelectorAll('.item');
}

function changeColor(element){
    element.style.backgroundColor = "black"
}

function clearGrid(){
    items.forEach(item =>{
        item.style.backgroundColor = "";
    });
}

resizeBtn.addEventListener('click',resizeGrid);
clearBtn.addEventListener('click',clearGrid);
window.onload = ()=>setUpGrid(DEFAULT_SIZE)