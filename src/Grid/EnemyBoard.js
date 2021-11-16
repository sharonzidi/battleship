import React from 'react';
import GridItem from './GridItem';
import { useSelector } from 'react-redux';

export default function EnemyBoard() {
	const enemyBoard = useSelector((state) => state.enemyBoard);
	return (
		<div className="grid">
			<div className="grid-container">
				<div className="col">
					{enemyBoard.map((row, i) => {
						return (
							<div className="row">
								{row.map((col, j) => (
									<GridItem symbol={enemyBoard[i][j]} x={i} y={j}/>
								))}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
