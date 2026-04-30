import React, {useState} from 'react';
import './InputsTask.css';
import {useAddTask} from "../apiHooksTasks.js";
import {useGetAllCategories} from "../../Categories/apiHooksCategories.js";
import {IoMdArrowRoundBack} from "react-icons/io";

function InputsTask({onClose}) {

    const [task,setTask] = useState({
        name:"",
        description:""
    });


    const {isLoading, addTaskM} = useAddTask();
    const {isPending, isError, data, error} = useGetAllCategories();
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    function handleChange(e){
         const {name,value} = e.target;
        setTask((prevData)=> ({...prevData,
            [name]:value
        }));
    }

    function addTask1(){
        addTaskM(task);
    }

    return (
        <div className={"wrapper"}>
            <IoMdArrowRoundBack className={"back-arrow"} onClick={onClose} />
            <input name={"user_id"} type="hidden"/>
            <input className={"title"} name={"name"} type="text" placeholder="Task Name" onChange={handleChange}/>
            <input className={"desc"} name={"description"} type="text" placeholder="Description" onChange={handleChange}/>
            <select className={"category-select"} name={"category_id"} onChange={handleChange}>
                {
                    data.map((category)=>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>

            <button className={"add-submit-btn"} onClick={addTask1}>Add Task</button>

        </div>
    );
}

export default InputsTask;