import {useState} from 'react';
import './Tasks.css';
import TaskDetails from "./TaskDetails/TaskDetails.jsx";
import {useGetallTasks} from "./apiHooksTasks.js";
import InputsTask from "./InputsForTask/InputsTask.jsx";
import { IoIosAddCircleOutline } from "react-icons/io";
import TaskRow from "./TaskRow/TaskRow.jsx"; // for now, its good change when doing CSS

function Tasks() {
    const [isAddToggle, setIsAddToggle] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const {isPending, isError, data:tasks, error}= useGetallTasks();
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;


    function handleAddToggle(){
        setIsAddToggle(!isAddToggle);
    }
    return (
        <div>
            <IoIosAddCircleOutline onClick={handleAddToggle}/>

            {isAddToggle &&(
                <div className={"addToggle"} >
                    <InputsTask/>
                </div>
            )}

            <div className="tasks_wrapper">
                {tasks.map((task) => {
                    return <TaskRow key={task.id} task={task} onClick={()=>{setSelectedTask(task)}}/>
                })}
            </div>

            {selectedTask && (
                <div className="left-details-panel">
                    <TaskDetails task={selectedTask} onClose={() => setSelectedTask(null)} />
                </div>
            )}

        </div>
    );
}

export default Tasks;