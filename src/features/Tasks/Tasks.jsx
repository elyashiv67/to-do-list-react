import React from 'react';
import './Tasks.css';
import Task from "./Task/Task.jsx";
import {useGetallTasks} from "./apiHooksTasks.js";
import InputsTask from "../InputsForTask/InputsTask.jsx";

function Tasks() {
    const {isPending, isError, data, error}= useGetallTasks();
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    console.log(data);
    return (
        <div>
            <InputsTask/>
            <div className="tasks_wrapper">
                {data.map((task) => {
                    return <Task data={task}/>
                })}
            </div>

        </div>
    );
}

export default Tasks;