let colorLength = 6;

let colors = generateRandomColors(colorLength);
let h1 = document.querySelector("h1");
let bodyColor = document.querySelector("body").style.backgroundColor;
let messageSpan = document.querySelector("#message");

let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor.toLocaleUpperCase();

let squares = document.querySelectorAll(".square");

let resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", resetGame);

for (let i = 0; i <  squares.length; i++) {
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageSpan.textContent = "Correct";
            changeColor(pickedColor);
            h1.style.backgroundColor = this.style.backgroundColor;
        }
        else {
            squares[i].style.backgroundColor = bodyColor;
            messageSpan.textContent = "Try Again!!";
        }
    }); 
}

let changeColor = function (color) {
    for (let square of squares) {
        square.style.backgroundColor = color;
    }
};

function pickColor () {
    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors (num) {
    let array = [];
    
    for (let i = 0; i < num; i++) {
        array.push(randomColor());
    }  

    return array;
}
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}

function resetGame () {
    colors = generateRandomColors(colorLength);
    pickedColor = pickColor();

    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }  

}