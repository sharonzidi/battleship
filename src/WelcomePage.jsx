import React from 'react';
import { Link } from 'react-router-dom';
import './Css/WelcomePage.css';

export default function WelcomePage() {
    return (
        <div className="ship-image">
            <div className="overlay">
                <div className="WelcomePage">
                
                    <ul class="nav">
                        <li class="nav-item">
                        <Link style={{ textDecoration: 'none'}} to={"/"}><a class="nav-link active text-white" aria-current="page" >BattleShip</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link  style={{ textDecoration: 'none' }} to={"/App"}><a class="nav-link text-white" >Normal Game Mode</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link style={{ textDecoration: 'none' }} to={"/AppFree"}><a class="nav-link text-white">Free Game Mode</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link style={{ textDecoration: 'none' }} to={"/Reset"}><a class="nav-link text-white">Reset</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link style={{ textDecoration: 'none' }} to={"/Rules"}><a class="nav-link text-white">Rules</a></Link>
                        </li>
                    </ul>
             
                    <h1>Welcome to Battleship Game!</h1>
                    <p className="intro">Battleship is known worldwide as a pencil and paper game which dates from World War I. It was published by various companies as a pad-and-pencil game in the 1930s, and was released as a plastic
                        board game by Milton Bradley in 1967. The game has spawned electronic versions, video games, smart device apps and a film.</p>

    return (<div className="WelcomePage">
        <h1>Welcome to Battleship!</h1>
        <ul>
            <li><Link to={"/App"}>Normal Game Mode</Link></li>
            <li><Link to={"/Appfree"}>Free Game Mode</Link></li>
            <li><Link to={"/Rules"}>Rules</Link></li>
        </ul>
    </div>)

}