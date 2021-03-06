let colorLength = 6;

let colors = generateRandomColors(colorLength);
let h1 = document.querySelector("h1");
h1.style.backgroundColor = "steelblue";
let bodyColor = document.querySelector("body").style.backgroundColor;
let messageSpan = document.querySelector("#message");

let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor.toLocaleUpperCase();

let squares = document.querySelectorAll(".square");

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetGame);

let hardBtn = document.querySelector("#hardBtn");
let easyBtn = document.querySelector("#easyBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colorLength = 3;
    resetGame();
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colorLength = 6;
    resetGame();
});

for (let i = 0; i <  squares.length; i++) {
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            messageSpan.textContent = "Correct!";
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
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
    resetBtn.textContent = "New Colors";
    messageSpan.textContent = "";
    h1.style.backgroundColor = bodyColor;
    colors = generateRandomColors(colorLength);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toLocaleUpperCase();

    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    }
    
    for (let i = 0; i < squares.length; i++) {
        if (colorLength === 3) {
            if (i > 2) {
                squares[i].style.display = "none";
            }
        }
        else {
            squares[i].style.display = "block";
        }
    }

}