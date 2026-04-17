import React from 'react';
import './Task.css';
import {useDeleteTask} from "../apiHooksTasks.js";

function Task({data}) {
    const {isDeletingTask , DeleteTask} = useDeleteTask();
    return (
        <div>
            <div className={"wrapper"}>
                <input className={"title"} type={"text"} defaultValue={data.name} />
                <input className={"desc"} defaultValue={data.description} />
                <p>{data.isDone}</p>

                <button onClick={()=>{
                    DeleteTask(data.id);
                }}>delete</button>

            </div>
        </div>
    );
}

export default Task;