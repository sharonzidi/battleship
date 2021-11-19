import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Css/Navbar.css';

export default function Navbar() {
    return (
        <div>
            <ul>   
                <li><Link style={{ textDecoration: 'none' }} exact to="/">Home Page</Link></li>
                <li><Link style={{ textDecoration: 'none' }} exact to="/App">Normal Game Mode</Link></li>
                <li><Link style={{ textDecoration: 'none' }} exact to="/Appfree">Free Game Mode</Link></li>
                <li><Link style={{ textDecoration: 'none' }} exact to="/Rules">Rules</Link></li>
            </ul>
        </div>
    )
}
