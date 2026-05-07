import React from 'react';
import './Header.css';
import Nav from "../Nav/Nav.jsx";
import { IoMdLogOut } from "react-icons/io";
import Cookies from "js-cookie";
import {useNavigate} from "react-router";

function Header() {
    const navigate = useNavigate();
    function logout() {
        if(confirm("Are you sure you want to logout?")){
            Cookies.remove("jwt");
            navigate("/Login");
        }
    }
    return (
        <header className="header">
            <div className="header-logo">To Do List REACT</div>
            <Nav/>
            <span className={"log-out-btn"} onClick={logout}><IoMdLogOut/></span>
        </header>
    );
}

export default Header;