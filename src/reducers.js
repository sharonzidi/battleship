import {initBoard} from './helpers';

const defaultState = {
	myBoard: initBoard(),
	enemyBoard: initBoard(),
	winner: '',
};

export default function reducers(state = defaultState, action) {
	if (action.type === 'MY_TURN') {
		const value1 = state.enemyBoard[action.x][action.y];
		const value2 = state.myBoard[action.mx][action.my];
		if (value1 === '1') {
			state.enemyBoard[action.x][action.y] = '3';
		} else if (value1 === '2') {
			state.enemyBoard[action.x][action.y] = '4';
		}
		if (value2 === '1') {
			state.myBoard[action.mx][action.my] = '3';
		} else if (value2 === '2') {
			state.myBoard[action.mx][action.my] = '4';
		}
		let count1 = 0;
		let count2 = 0;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				if (state.enemyBoard[i][j] === '2') {
					count1++;
				}
			}
		}
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				if (state.myBoard[i][j] === '2') {
					count2++;
				}
			}
		}
		if (count1 === 0) {
			state.winner = 'Player';
		} else if (count2 === 0) {
			if (!state.winner) {
				state.winner = 'AI';
			}
		}
		const newState = {};
		newState.myBoard = [...state.myBoard];
		newState.enemyBoard = [...state.enemyBoard];
		newState.winner = state.winner;
		return newState;
	} else if (action.type === 'FREE_TURN') {
		const value = state.enemyBoard[action.x][action.y];
		if (value === '1') {
			state.enemyBoard[action.x][action.y] = '3';
		} else if (value === '2') {
			state.enemyBoard[action.x][action.y] = '4';
		}
		let count = 0;
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				if (state.enemyBoard[i][j] === '2') {
					count++;
				}
			}
		}
		if (count === 0) {
			state.winner = 'Player';
		}
		const newState = {};
		newState.myBoard = [...state.myBoard];
		newState.enemyBoard = [...state.enemyBoard];
		newState.winner = state.winner;
		return newState;
	}
	return defaultState;
}
