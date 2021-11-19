import React from 'react';
import { useSelector } from 'react-redux';
import ResetButton from './ResetButton';

export default function Controller() {
	const winner = useSelector((state) => state.winner);
	return (
		<>	
			<ResetButton text="Reset"/>
			<div className="game-controls">
				{winner ? <h2>Game Over! {winner} Wins!</h2> : null}
			</div>
		</>
		
	);
}
