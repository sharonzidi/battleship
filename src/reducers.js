import { createGrid, placeShipsOnBoard, playerFire, shipTracker, generateComputerTurns, computerFire } from './Game';

const initialState = {
	playerBoard: createGrid(),
	computerBoard: placeShipsOnBoard(),
	gameBoard: createGrid(),
	computerMoves: generateComputerTurns(),
	gameStarted: false,
	playerShips: shipTracker(),
	computerShips: shipTracker(),
	playerSunk: [],
	computerSunk: [],
	playerTurn: true,
	gameEnd: false,
	winner: '',
	notes: true,
};

function updateBoard(board, nextR, nextC, target) {
	return board.map((row, i) => {
		if (nextR !== i) {
			return row;
		}
		return row.map((col, j) => {
			if (nextC !== j) {
				return col;
			}
			return target;
		});
	});
}

function reducers(state = initialState, action) {
	switch (action.type) {
		case 'GENERATE_BOARD':
			return { ...state, playerBoard: placeShipsOnBoard() };
		case 'PLAYER_FIRE':
			const [col, row] = action.payload;
			const turn = playerFire([col, row], state.computerBoard, state.computerShips);

			const a = {
				gameBoard: updateBoard(state.gameBoard, row, col, turn.shot),
				...(turn.ships ? { computerShips: turn.ships } : {}),
				...(turn.sunk ? { computerSunk: [...state.computerSunk, turn.sunk] } : {}),
				...(turn.gameEnd ? { gameEnd: true, winner: 'Player', playerTurn: false } : {}),
			};

			return {
				...state,
				...a,
			};
		case 'COMPUTER_FIRE':
			if (state.gameEnd) {
				return state;
			}
			const compTurn = computerFire(state.computerMoves, state.playerShips, state.playerBoard);
			return {
				...state,
				playerTurn: true,
				computerMoves: compTurn.moves,
				...(compTurn.ships ? { playerShips: compTurn.ships } : {}),
				...(compTurn.shot
					? { playerBoard: updateBoard(state.playerBoard, compTurn.row, compTurn.col, compTurn.shot) }
					: {}),
				...(compTurn.gameEnd ? { gameEnd: true, winner: 'AI', playerTurn: false } : {}),
			};
		case 'ACCEPT_SHIP_PLACEMENT':
			return { ...state, gameStarted: true };
		case 'PLAYER_TURN':
			return { ...state, playerTurn: !state.playerTurn };
		case 'HIDE_NOTES':
			return { ...state, notes: !state.notes };
		case 'END_GAME':
			return {
				playerBoard: createGrid(),
				computerBoard: placeShipsOnBoard(),
				gameBoard: createGrid(),
				computerMoves: generateComputerTurns(),
				gameStarted: false,
				playerShips: shipTracker(),
				computerShips: shipTracker(),
				playerSunk: [],
				computerSunk: [],
				playerTurn: true,
				gameEnd: false,
				winner: '',
				notes: state.notes,
			};
		default:
			return state;
	}
}

export default reducers;
