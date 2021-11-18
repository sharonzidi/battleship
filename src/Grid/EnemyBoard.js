import React from 'react';
import GridItem from './GridItem';
import { useSelector } from 'react-redux';

export default function EnemyBoard() {
	const enemyBoard = useSelector((state) => state.enemyBoard);
	const boardComponent = [];
    for (let i = 0; i < enemyBoard.length; i++) {
        let row = enemyBoard[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push((<GridItem symbol={enemyBoard[i][j]} x={i} y={j}/>));
        }
    }
	return (
		<div className="grid">
			<div className="board">
				{boardComponent}
			</div>
		</div>
	);
}
