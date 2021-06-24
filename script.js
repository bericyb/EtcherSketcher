


let x = 16
let y = 16

let variables = document.querySelector(":root");
variables.style.setProperty('--main-cols', x)
variables.style.setProperty('--main-cols', y)

let grid = []

const container = document.querySelector('.frame');
console.log(container)

for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
        let newBoy = document.createElement('div')
        newBoy.className = "cell";
        newBoy.style.background = "silver";
        newBoy.onmouseover = function() {newBoy.style.background = "grey"}
        container.appendChild(newBoy)
    }
}

function clearGrid() {
    let children = container.children
    for (let i = 0; i < children.length; i++) {
        children[i].style.background = "silver";
    }
}