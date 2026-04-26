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
        return [];
    }
    console.log(response);
    return response.json();
}

async function getCategory(id) {
    const response = await ProtectedFetch(`/categories/${id}`,
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
    return response.json();
}

async function addCategory(category) {
    const response = await ProtectedFetch(`/categories/`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(category),
    })
    if(!response.ok) {
        console.log(response.status);
        return
    }
    return response.json();
}

async function deleteCategory(id) {
    const response = await ProtectedFetch(`/categories/${id}`,
        {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
    if(!response.ok) {
        console.log(response.status);
        return
    }
    return response.json();
}

export {getAllCategories , getCategory , deleteCategory , addCategory};