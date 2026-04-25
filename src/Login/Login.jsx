import { useState } from 'react';
import { loginBtn } from "./Login_api.js";
import { useNavigate } from "react-router";
import { useAuth } from "../Router/Context/AuthContext.jsx";
import './Login.css';


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

    async function handleSubmit(e) {
        e.preventDefault();
        await loginBtn({ user }, navigate, setIsAuth)
    }

    return (
        <div className="login-wrapper">
            <form className={"login-container"} onSubmit={handleSubmit}>
                <input type="text" name={"userName"} placeholder="user name" onChange={handleChange} />
                <input type="password" name={"pass"} placeholder="pass" onChange={handleChange} />
                <button type={"submit"}>Login</button>
            </form>
            <button className={"reg"} onClick={()=> {navigate('/Register')}}>dont have a user?</button>

        </div>
    );
}

export default Login;