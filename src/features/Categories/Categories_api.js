import { ProtectedFetch } from "../../utilis/api.js";

async function getAllCategories() {
    const response = await ProtectedFetch(`/categories`,
        {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
    console.log(response);
    if(!response.ok) {
        console.log(response.status);
        return
    }
    console.log(response);
    return response.json();
}

export {getAllCategories};