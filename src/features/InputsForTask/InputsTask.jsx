import React, {useState} from 'react';
import {useAddTask} from "../Tasks/apiHooksTasks.js";
import {addTask} from "../Tasks/Tasks_api.js";

function InputsTask() {

    const [task,setTask] = useState({
        name:"",
        description:""
    });


    const {isLoading, addTaskM} = useAddTask();

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
        <>
            <input name={"user_id"} type="hidden"/>
            <input name={"name"} type="text" placeholder="name" onChange={handleChange}/>
            <input name={"description"} type="text" placeholder="description" onChange={handleChange}/>

            <button onClick={addTask1}>add</button>

        </>
    );
}

export default InputsTask;