import {ProtectedFetch} from "../../utilis/api.js";

async function getAllTasks() {
    const response = await ProtectedFetch(`/tasks`,
        {method: 'GET',
        headers: {'Content-Type': 'application/json',
        },
        credentials: 'include'});
    if (!response.ok) {
        console.log(response.status);
        return
    }
    console.log(response);
    return response.json();
}

async function getTaskById(id) {
    const response = await ProtectedFetch(`/tasks/${id}`,
        {method: 'GET',
        headers: {'Content-Type': 'application/json',},
        credentials: 'include'});
    console.log(response);
    if (!response.ok) {
        console.log(response.status);
        return
    }
    return response.json();
}

async function addTask(task) {
    const response = await ProtectedFetch(`/tasks`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    });
    console.log(response.body);
    if (!response.ok) {
        console.log(response.status);
        return
    }
    return response.json();
}

async function deleteTask(id) {
    const response = await ProtectedFetch(`/tasks/${id}` ,
        {method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
    if (!response.ok) {
        console.log(response.status);
        return
    }
    return response.json();
}

async function updateTask(id, task) {
    const response = await ProtectedFetch(`/tasks/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(task)
    });
    console.log(response);
    if (!response.ok) {
        console.log(response.status);
        return
    }
    return response.json();
}
export {getAllTasks , addTask , getTaskById, deleteTask , updateTask};