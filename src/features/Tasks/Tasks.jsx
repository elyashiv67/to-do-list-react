import {useState} from 'react';
import './Tasks.css';
import TaskDetails from "./TaskDetails/TaskDetails.jsx";
import {useGetallTasks} from "./apiHooksTasks.js";
import InputsTask from "./InputsForTask/InputsTask.jsx";
import {IoIosAddCircleOutline} from "react-icons/io";
import TaskRow from "./TaskRow/TaskRow.jsx";

function Tasks() {
    const [isAddToggle, setIsAddToggle] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const {isPending, isError, data: tasks, error} = useGetallTasks();
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;


    function handleAddToggle() {
        setSelectedTask(null);
        setIsAddToggle(true);
    }

    const NoTasksInServer = [
        {
            id: 1,
            name: "Welcome To Tasks",
            description: "click on me to update",
            isDone: 0,
        },
        {
            id: 2,
            name: "Add Task And Start Explore",
            description: "click on me to add",
            isDone: 1,
        }
    ];

    return (
        <div className={"main-tasks"}>

            <div className={"layout-tasks"}>

                <div className={`left-panel ${(selectedTask || isAddToggle) ? 'open' : ''}`}>

                    {selectedTask && (
                        <>

                            <div
                                className="invisible-overlay"
                                onClick={() => setSelectedTask(null)}
                            />

                            <div className="left-details-panel">
                                <TaskDetails
                                    key={selectedTask.id}
                                    task={selectedTask}
                                    onClose={() => setSelectedTask(null)}/>
                            </div>

                        </>
                    )}
                    {isAddToggle && (
                        <>
                            <div
                                className="invisible-overlay"
                                onClick={() => setIsAddToggle(false)}
                            />
                            <div className="left-details-panel">
                                <InputsTask onClose={() => setIsAddToggle(false)}/>
                            </div>
                        </>
                    )}
                </div>

                <div className="tasks_wrapper">
                    {(!tasks || tasks.length === 0) ? (
                            NoTasksInServer.map((task) => (<TaskRow key={task.id} task={task} onClick={() => {
                                setSelectedTask(task)
                            }}/>))
                        ) :
                        tasks.map((task) => {
                            return <TaskRow key={task.id} task={task} onClick={() => {
                                setIsAddToggle(false);
                                setSelectedTask(task);
                            }}/>
                        })
                    }

                    <div className={"add-btn"} onClick={handleAddToggle}>
                        <div className="add-btn-card">
                            <IoIosAddCircleOutline className={"add-btn-icon"} />
                            <h2>Add New Task</h2>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Tasks;