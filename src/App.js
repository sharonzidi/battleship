import React from 'react';
import Controls from './Components/Controls';
import Grid from './Components/Grid/Grid';
import GameBoard from './Components/Grid/GameBoard';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="title">
				<h1>Battleship Normal Game Mode</h1>
				<Controls />
			</div>
			<div className="board-layout">
				<div>
					<Grid />
				</div>
				<div>
					<GameBoard />
				</div>
			</div>
		</div>
	);
}

export default App;
