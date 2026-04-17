import { BackUrl } from "../Vars.js";


async function loginBtn({ user }, navigate, setIsAuth) {
    console.log(user);

    try {
        const response = await fetch(`${BackUrl}/auth/login`, {
            method: 'POST'
            , headers: { 'Content-Type': 'application/json' }
            , body: JSON.stringify(user),
            credentials: 'include'
        });
        console.log(response.status);
        if (response.ok) {
            setIsAuth(true);
            navigate('/tasks');
        }


    } catch (e) {
        console.log(e);
    }
}

export { loginBtn };