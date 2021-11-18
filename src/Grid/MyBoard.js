import React from 'react';
import { useSelector } from 'react-redux';

export default function MyBoard() {
	let myBoard = useSelector((state) => state.myBoard);
	return (
		<div className="grid">
			<div className="grid-container">
				<div className="col">
					{myBoard.map((row, i) => {
						return (
							<div className="row">
								{row.map((col, j) => (
									<span
										className={`${col === '1' ? 'row-item' : 'row-item ship'} ${
											col === '4' ? 'hit' : col === '3' ? 'miss' : null
										}`}>
										{col === '1' ? '' : col === '2' ? 'S' : col === '3' ? 'M' : 'H'}
									</span>
								))}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
