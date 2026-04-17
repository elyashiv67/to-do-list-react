import React from 'react';
import './Header.css';
import Nav from "../Nav/Nav.jsx";

function Header() {
    return (
        <header className="header">
            <div className="header-logo">To Do List REACT</div>
            <Nav/>
        </header>
    );
}

export default Header;