let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let bodyColor = document.querySelector("body").style.backgroundColor;
let messageSpan = document.querySelector("#message");

let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor.toLocaleUpperCase();

let squares = document.querySelectorAll(".square");

for (let i = 0; i <  squares.length; i++) {
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageSpan.textContent = "Correct";
            changeColor(pickedColor);
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