import {useState , } from 'react';
import './Register.css';
import {register} from "../Login/Login_api.js";
import { useNavigate } from "react-router";

function Register(props) {

    const [user, setUser] = useState({
        userName: "",
        pass: "",
        name: "",
        email: ""
    });
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await register({user});
    }

    return (
        <div className="register-wrapper" onSubmit={handleSubmit}>

            <form className={"reg-main"}>
                <input type={"text"} name={"name"} placeholder={"name"} onChange={handleChange} />
                <input type={"text"} name={"userName"} placeholder={"user name"} onChange={handleChange} />
                <input type={"password"} name={"pass"} placeholder={"pass"} onChange={handleChange} />
                <input type={"email"} name={"email"} placeholder={"user email"} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
            <button className={"back-to-login"} onClick={()=>{navigate('/')}}>I Already Have A User</button>

        </div>
    );
}

export default Register;