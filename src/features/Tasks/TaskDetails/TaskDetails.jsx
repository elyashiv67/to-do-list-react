import React from 'react';
import './TaskDetails.css';
import {useDeleteTask, useUpdateTask , useMarkAsDone} from "../apiHooksTasks.js";

function TaskDetails({ task , onClose}) {
    const {isDeletingTask, DeleteTask} = useDeleteTask();
    const {isPending, updateTask} = useUpdateTask();
    const {isWaiting , MarkAsDone} = useMarkAsDone();

    function handleBlurUpdate(fieldName, event) {
        const newValue = event.target.value;

        if (newValue !== task[fieldName]) {
            updateTask({
                id: task.id,
                [fieldName]: newValue,
            });
        }
    }
    function handleMarkAsDone(event) {
            const newStatus = event.target.checked ? 1 : 0;

            MarkAsDone({
                id: task.id,
                isDone: newStatus
            });
        }

    return (
        <div>
            <div className={"wrapper"}>
                <button className="close-btn" onClick={onClose}>X</button>
                <input className={"title"}
                       type={"text"} defaultValue={task.name}
                       onBlur={(e) => handleBlurUpdate('name', e)}
                />
                <input className={"desc"}
                       defaultValue={task.description}
                       onBlur={(e) => handleBlurUpdate('description', e)}
                />
                <input type={"checkbox"} defaultChecked={task.isDone === 1} onChange={(e)=>{handleMarkAsDone(e)}}/>
                <p>{task.isDone}</p>
                <button onClick={() => {
                    DeleteTask(task.id);
                }}>delete
                </button>

            </div>
        </div>
    );
}

export default TaskDetails;