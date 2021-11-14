import React from 'react';
import { connect } from 'react-redux';

function Controls({ generateBoard, startGame, acceptPlacement, endGame, gameEnd, winner}) {
	return (
		<div className="game-controls">
			{!startGame ? (
				<>
					<button onClick={() => generateBoard(true)}>Generate Board</button>
					<button onClick={() => acceptPlacement()}>Start Game</button>
				</>
			) : null}
			{gameEnd ? <h2>Game Over! {winner} Won!</h2> : null}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	generateBoard: task => dispatch({ type: 'GENERATE_BOARD', payload: task }),
	acceptPlacement: () => dispatch({ type: 'ACCEPT_SHIP_PLACEMENT', playload: null }),
	endGame: () => dispatch({ type: 'END_GAME', playload: null }),
});

const mapStateToProps = state => ({
	startGame: state.gameStarted,
	gameEnd: state.gameEnd,
	winner: state.winner,
	notes: state.notes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
