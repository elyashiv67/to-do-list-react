import React from 'react';
import './TaskRow.css';
import {useMarkAsDone} from "../apiHooksTasks.js";

function TaskRow({task , onClick}) {
    const {isWaiting, MarkAsDone} = useMarkAsDone();

    function handleMarkAsDone(event) {
        const newStatus = event.target.checked ? 1 : 0;

        MarkAsDone({
            id: task.id,
            isDone: newStatus
        });
    }

    return (
        <div onClick={onClick} className={"task-row"}>
            <div className="task-row-card">
                <input type={"checkbox"} defaultChecked={task.isDone === 1} onChange={(e) => {
                    handleMarkAsDone(e)
                }}/>
                <h2 className={"task-row-title"}>{task.name}</h2>
            </div>
        </div>
    );
}

export default TaskRow;