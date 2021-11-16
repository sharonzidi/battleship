import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function GridItem(props) {
	const dispatch = useDispatch();
	const winner = useSelector((state) => state.winner);
	const myBoard = useSelector((state) => state.myBoard);
	const char = props.symbol;
	const clickGrid = () => {
		if (winner) return;
		if (char === '3' || char === '4') {
			return;
		}
		let fireX = Math.floor(Math.random()*10);
		let fireY = Math.floor(Math.random()*10);
		while (myBoard[fireX][fireY] === '3' || myBoard[fireX][fireY] === '4') {
			fireX = Math.floor(Math.random()*10);
			fireY = Math.floor(Math.random()*10);
		}
		dispatch({
            type: 'MY_TURN',
			val: props.symbol,
			mx: fireX,
			my: fireY,
            x: props.x,
            y: props.y,
        })
	};
	return (
		<div className={`row-item guess-item ${char === '3' ? 'miss' : null} ${char === '4' ? 'hit' : null}`}
			onClick={clickGrid}>
			<span>{char === '1' ? '1' : char === '2' ? '2' : char === '3' ? 'M' : 'H'}</span>
		</div>
	);
}
