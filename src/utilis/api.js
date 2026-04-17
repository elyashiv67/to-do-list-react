import {BackUrl} from "../Vars.js";
import Cookies from "js-cookie";

async function ProtectedFetch(endpoint , options = {}) {
    const response = await fetch(`${BackUrl}${endpoint}`, options);

    if (response.status === 401) {
        Cookies.remove("token");
        window.location.href = "/login";
        return;
    }
    return  response;
}
export { ProtectedFetch };