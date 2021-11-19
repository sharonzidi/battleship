import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Css/Navbar.css';

export default function Navbar() {
    return (
        <div class="navbarContainer">
        <Link style={{ textDecoration: 'none' }} exact to="/">Home Page</Link>
        <Link style={{ textDecoration: 'none' }} exact to="/App">Normal Game Mode</Link>
        <Link style={{ textDecoration: 'none' }} exact to="/Appfree">Free Game Mode</Link>
        <Link style={{ textDecoration: 'none' }} exact to="/Rules">Rules</Link>
        </div>
    )
}