import "./style.css";

// grab dom elements
const gridContainer = document.getElementById("gridContainer") as HTMLElement;
const player1Score = document.getElementById("score1") as HTMLElement;
const player2Score = document.getElementById("score2") as HTMLElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;
const gridForm = document.getElementById("gridForm") as HTMLFormElement;
const gridSizeInput = document.getElementById("grid") as HTMLInputElement;
const winConditionInput = document.getElementById("win") as HTMLInputElement;

//initial states

let gridSize: number = 0;
let winCondition: number = 0;

// form handler

gridForm.addEventListener("submit", (event) => {
	event.preventDefault();

	gridSize = parseInt(gridSizeInput.value);
	winCondition = parseInt(winConditionInput.value);
	console.log(
		`user said to have a grid of size ${gridSize} x ${gridSize}, with a win condition of ${winCondition}`
	);
});

// user said to have a grid of size n x n, with a win condition of y
