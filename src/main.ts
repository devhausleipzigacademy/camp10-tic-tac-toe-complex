import "./style.css";

// grab dom elements
const player1 = document.getElementById("player1") as HTMLElement;
const player2 = document.getElementById("player2") as HTMLElement;
const gridContainer = document.getElementById("gridContainer") as HTMLElement;
const player1Score = document.getElementById("score1") as HTMLElement;
const player2Score = document.getElementById("score2") as HTMLElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;
const gridForm = document.getElementById("gridForm") as HTMLFormElement;
const gridSizeInput = document.getElementById("grid") as HTMLInputElement;
const winConditionInput = document.getElementById("win") as HTMLInputElement;

//initial states
type Player = "x" | "o";
type Board = (Player | null)[][];

let currentPlayer: Player = "x";
let scores: Record<Player, number> = {
	x: 0,
	o: 0,
};
let gameBoard: Board = [];
let gridSize: number = 0;
let winCondition: number = 0;

// form handler

gridForm.addEventListener("submit", (event) => {
	event.preventDefault();

	gridSize = parseInt(gridSizeInput.value);
	winCondition = parseInt(winConditionInput.value);

	// Validate the inputs

	if (gridSize > 10) {
		alert(
			"Whoa there, partner! Let's not get too wild. Try a number 10 or less."
		);
		return;
	}

	if (gridSize < winCondition) {
		alert("Grid size must be greater than or equal to win condition.");
		return;
	}

	// Create the game board
	gameBoard = Array(gridSize)
		.fill(null)
		.map(() => Array(gridSize).fill(null));

	// Generate the grid
	generateGrid();
});

function generateGrid() {
	// Clear the grid container
	while (gridContainer.firstChild) {
		gridContainer.firstChild.remove();
	}

	// Set the grid properties
	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

	// Create the cells
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const cell = document.createElement("div");
			cell.className = "cell";
			cell.id = `${i}-${j}`;

			// Add the onclick handler
			cell.addEventListener("click", () => {
				// Add the current player's symbol to the cell
				if (!cell.textContent) {
					cell.textContent = currentPlayer;
					cell.style.fontSize = `${cell.offsetWidth * 0.7}px`;

					gameBoard[i][j] = currentPlayer;

					//check for win

					// Switch the current player
					currentPlayer = currentPlayer === "x" ? "o" : "x";
					player1?.classList.toggle("active");
					player2?.classList.toggle("active");
				}
			});

			gridContainer.appendChild(cell);
		}
	}
}
