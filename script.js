const container = document.querySelector('#container');
const button = document.querySelector('#size');
const grid =  document.querySelector('#grid');
const restart = document.querySelector('#restart');
const colorPick = document.querySelector('#color');
let color = colorPick.value;
create(16)

button.addEventListener('click', () =>{
    let size;
    do{
    size = setSize()
    }while(size > 100 || size < 1 || isNaN(size) === true);
    container.innerHTML = '';
    create(size);
    
})


function create(n){
    const container = document.querySelector('#container');
    
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    

    let number = n * n;

    for(let i = 0; i < number; i++){
        let div = document.createElement('div');
        div.id = 'gridi'
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `${color}`;
        })
        container.appendChild(div)
    }
}


function setSize(){
    let size = parseInt(prompt("Size? (Max 100)"))
    return size;
}

function toggleGrid(){
    let div = Array.from(document.querySelectorAll('#gridi'));
    div.forEach(div =>{
        div.classList.toggle('gridi')
    })
}

grid.addEventListener('click', toggleGrid)


restart.addEventListener('click', () =>{
    let div = Array.from(document.querySelectorAll('#gridi'));
    div.forEach(div =>{
        div.style.backgroundColor = 'white'
    })
})

colorPick.addEventListener('input', e =>{
    color = e.target.value;
})

