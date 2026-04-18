import {useState} from 'react';
import './Tasks.css';
import Task from "./Task/Task.jsx";
import {useGetallTasks} from "./apiHooksTasks.js";
import InputsTask from "../InputsForTask/InputsTask.jsx";
import { IoIosAddCircleOutline } from "react-icons/io"; // for now, its good change when doing CSS

function Tasks() {
    const [isAddToggle, setIsAddToggle] = useState(false);
    const {isPending, isError, data, error}= useGetallTasks();
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
                {data.map((task) => {
                    return <Task key={task.id} data={task}/>
                })}
            </div>

        </div>
    );
}

export default Tasks;