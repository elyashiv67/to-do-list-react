import React from 'react';
import {NavLink} from "react-router";

function Nav() {
    return (
        <>
            <div style={{display:'flex',gap:'10px'}}>
                <NavLink to={"/categories"}>categories</NavLink>
                <NavLink to={"/login"}>login</NavLink>
                <NavLink to={"/tasks"}>Tasks</NavLink>
            </div>
        </>
    );
}

export default Nav;