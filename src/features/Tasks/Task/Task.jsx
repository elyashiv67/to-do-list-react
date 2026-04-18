import React from 'react';
import './Task.css';
import {useDeleteTask, useUpdateTask} from "../apiHooksTasks.js";

function Task({data}) {
    const {isDeletingTask, DeleteTask} = useDeleteTask();
    const {isPending, updateTask} = useUpdateTask();

    function handleBlurUpdate(fieldName, event) {
        const newValue = event.target.value;

        if (newValue !== data[fieldName]) {
            updateTask({
                id: data.id,
                [fieldName]: newValue,
            });
        }
    }

    return (
        <div>
            <div className={"wrapper"}>
                <input className={"title"}
                       type={"text"} defaultValue={data.name}
                       onBlur={(e) => handleBlurUpdate('name', e)}
                />
                <input className={"desc"}
                       defaultValue={data.description}
                       onBlur={(e) => handleBlurUpdate('description', e)}
                />
                <p>{data.isDone}</p>

                <button onClick={() => {
                    DeleteTask(data.id);
                }}>delete
                </button>

            </div>
        </div>
    );
}

export default Task;