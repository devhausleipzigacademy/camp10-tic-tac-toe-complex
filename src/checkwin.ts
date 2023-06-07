type Player = "x" | "o";
type Board = (Player | null)[][];

export function checkWin(
	board: Board,
	player: Player,
	winCondition: number
): boolean {
	const size = board.length;

	//check rows

	for (let i = 0; i < size; i++) {
		let count = 0;
		for (let j = 0; j < size; j++) {
			if (board[i][j] === player) {
				count++;
				if (count === winCondition) return true;
			} else {
				count = 0;
			}
		}
	}

	// for columns

	for (let i = 0; i < size; i++) {
		let count = 0;
		for (let j = 0; j < size; j++) {
			if (board[j][i] === player) {
				count++;
				if (count === winCondition) return true;
			} else {
				count = 0;
			}
		}
	}

	// for diagonal

	let count1 = 0;
	let count2 = 0;
	for (let i = 0; i < size; i++) {
		if (board[i][i] === player) {
			count1++;
			if (count1 === winCondition) return true;
		} else {
			count1 = 0;
		}
		if (board[i][size - i - 1] === player) {
			count2++;
			if (count2 === winCondition) return true;
		} else {
			count2 = 0;
		}
	}

	return false;
}
