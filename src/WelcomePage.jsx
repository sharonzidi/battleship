import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {

    return (<div className="WelcomePage">
        <h1>Welcome to Battleship!</h1>
        <ul>
            <li><Link to={"/App"}><button type="button" class="btn btn-outline-danger">Normal Game Mode</button></Link></li>
            <li><Link to={"/AppFree"}><button type="button" class="btn btn-outline-warning">Free Game Mode</button></Link></li>
            <li><Link to={"/Rules"}><button type="button" class="btn btn-outline-info">Rules</button></Link></li>
        </ul>
    </div>)

}