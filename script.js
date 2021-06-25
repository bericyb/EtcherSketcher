


let x = 32;
let y = 32;



let grid = []

let myList = [8,16,32,64,128]


const container = document.querySelector('.frame');

for (let i = 0; i < x * y; i++) {
    let newBoy = document.createElement('div')
    newBoy.className = "cell";
    newBoy.style.background = "silver";
    newBoy.onmouseover = function() {newBoy.style.background = "grey"}
    container.appendChild(newBoy)
}

function clearGrid() {
    let children = container.children
    for (let i = 0; i < children.length; i++) {
        children[i].style.background = "silver";
    }
}

function changeRes(value) {
    console.log("SUPP")
    x = value
    y = value
    document.documentElement.style.setProperty("--main-rows", x);
    document.documentElement.style.setProperty("--main-cols", y);
    console.log(x,y)
    document.querySelectorAll('.cell').forEach(function(a){
        a.remove()
        })
    initialize()
}

function initialize(){
    for (let i = 0; i < x * y; i++) {
        let newBoy = document.createElement('div')
        newBoy.className = "cell";
        newBoy.style.background = "silver";
        newBoy.onmouseover = function() {newBoy.style.background = "grey"}
        container.appendChild(newBoy)
    }
}
