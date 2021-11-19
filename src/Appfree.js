import React from 'react';
import EnemyBoard from './Grid/EnemyBoard';
import './Css/App.css';
import Controller from './Controller';

function Appfree() {
	return (
		<div className="App">
			<div className="title">
				<h1>Battleship Free Game Mode</h1>
				<Controller />
			</div>
			<div className="board-layout">
				<div>
					<EnemyBoard symbol={1} />
				</div>
			</div>
		</div>
	);
}

export default Appfree;