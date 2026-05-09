import React from 'react';
import './TaskDetails.css';
import { useDeleteTask, useUpdateTask, useMarkAsDone } from "../apiHooksTasks.js";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function TaskDetails({ task, onClose }) {
    const { isDeletingTask, DeleteTask } = useDeleteTask();
    const { isPending, updateTask } = useUpdateTask();
    const { isWaiting, MarkAsDone } = useMarkAsDone();

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
                <IoMdArrowRoundBack className={"back-arrow"} onClick={onClose} />
                <input className={"title"}
                    type={"text"} defaultValue={task.name}
                    onBlur={(e) => handleBlurUpdate('name', e)}
                />
                <input className={"desc"}
                    defaultValue={task.description}
                    onBlur={(e) => handleBlurUpdate('description', e)}
                />
                <MdDeleteOutline className={"delete-icon"} onClick={() => {
                    if (!confirm("Are you sure you want to delete this task?")) {
                        return;
                    }
                    DeleteTask(task.id);
                }} />

            </div>
        </div>
    );
}

export default TaskDetails;