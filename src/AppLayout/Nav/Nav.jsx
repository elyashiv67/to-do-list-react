import React from 'react';
import {NavLink} from "react-router";
import './Nav.css';

function Nav() {
    return (
        <nav className="nav-list">
            <NavLink className="nav-link" to={"/tasks"}>Tasks</NavLink>
            <NavLink className="nav-link" to={"/categories"}>Categories</NavLink>
        </nav>
    );
}

export default Nav;