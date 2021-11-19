import React from 'react';
import MyBoard from './Grid/MyBoard';
import EnemyBoard from './Grid/EnemyBoard';
import './Css/App.css';
import Controller from './Controller';

function App() {
	return (
		<div className="App">
			<div className="title">
				<h2>Battleship Normal Game Mode</h2>
				<Controller />
			</div>
			<div className="board-layout">
				<div>
					<MyBoard />
				</div>
				<div>
					<EnemyBoard symbol ={0}/>
				</div>
			</div>
		</div>
	);
}

export default App;