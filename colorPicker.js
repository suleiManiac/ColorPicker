let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

let bodyColor = document.querySelector("body").style.backgroundColor;
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor.toLocaleUpperCase();

let squares = document.querySelectorAll(".square");

for (let i = 0; i <  squares.length; i++) {
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", () => {
        if (squares[i].style.backgroundColor === pickedColor) {
            alert("correct");
        }
        else {
            squares[i].style.backgroundColor = bodyColor;
        }
    }); 
}