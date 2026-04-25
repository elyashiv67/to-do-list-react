import { BackUrl } from "../Vars.js";


async function loginBtn({ user }, navigate, setIsAuth) {
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
async function register({ user }) {
    try {
        const response = await fetch(`${BackUrl}/auth/reg`, {
            method: 'POST'
            , headers: { 'Content-Type': 'application/json' }
            , body: JSON.stringify({
                ...user,
                is_admin: 0
            }),
            credentials: 'include'
        })
        console.log(user);
        console.log(response.status);
        if (response.ok) {
        }
    } catch (err) {
        console.log(err);
    }
}


export { loginBtn, register };