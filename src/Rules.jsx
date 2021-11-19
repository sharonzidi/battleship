import React from 'react';
import { Link } from 'react-router-dom';
import "./Css/Rules.css";

export default function Rules() {

    return (
        <div className="ship-image">
        <div className="overlay2">
        <div class="Rules">
            <h1>Rules</h1>
            <p className="description">
                During the game, you and an AI will take turns (the player always goes first).
                On your turn, you will select a square on your opponent’s board.
                On your opponent’s turn, the AI will randomly select a square on your grid.
                If you or your opponent hit a ship, then mark that board with a color and symbol.
                If you or your opponent miss, then mark a spot on the board to remind the players where on the board they have attempted.
                The AI will not try to hit the same place more than once and the user should not be able to select the same spot more than once.
            </p>

            <p className="detail">RESET: press reset to start a new game of Battleship.</p>
            <p className="detail">NORMAL GAME MODE: players play with AI, and there will be a winner.</p>
            <p className="detail">FREE GAME MODE: players play alone without battle with AI.</p>
        </div>
        </div>
        </div>
        )
}
