import React, { useState } from 'react';
import { loginBtn } from "./Login_api.js";
import { useNavigate } from "react-router";
import {useAuth} from "../Router/Context/AuthContext.jsx";


function Login() {
    const navigate = useNavigate();
    const { setIsAuth } = useAuth();
    const [user, setUser] = useState({
        userName: "",
        pass: ""
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    return (
        <div>
            <div className={"container"}>
                <input type="text" name={"userName"} placeholder="user name" onChange={handleChange} />
                <input type="password" name={"pass"} placeholder="pass" onChange={handleChange} />
                <button onClick={() => loginBtn({ user }, navigate, setIsAuth)}>Login</button>
            </div>
        </div>
    );
}

export default Login;