import React from 'react';
import MyBoard from './Grid/MyBoard';
import EnemyBoard from './Grid/EnemyBoard';
import './App.css';
import Controller from './Controller';

function App() {
	return (
		<div className="App">
			<div className="title">
				<h1>Battleship Normal Game Mode</h1>
				<Controller />
			</div>
			<div className="board-layout">
				<div>
					<MyBoard />
				</div>
				<div>
					<EnemyBoard />
				</div>
			</div>
		</div>
	);
}

export default App;
