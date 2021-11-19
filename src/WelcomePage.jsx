import React from 'react';
import { Link } from 'react-router-dom';
import './Css/WelcomePage.css';

export default function WelcomePage() {
    return (
        <div className="ship-image">
            <div className="overlay">
                <div className="WelcomePage">
                    <h1>Welcome to Battleship Game!</h1>
                    <p className="intro">Battleship is known worldwide as a pencil and paper game which dates from World War I. It was published by various companies as a pad-and-pencil game in the 1930s, and was released as a plastic
                        board game by Milton Bradley in 1967. The game has spawned electronic versions, video games, smart device apps and a film.</p>
                </div>
            </div>
        </div>
    )
}