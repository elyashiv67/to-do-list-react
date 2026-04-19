import React, {useState} from 'react';
import {useAddTask} from "../apiHooksTasks.js";
import {useGetAllCategories} from "../../Categories/apiHooksCategories.js";

function InputsTask() {

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
        <>
            <input name={"user_id"} type="hidden"/>
            <input name={"name"} type="text" placeholder="name" onChange={handleChange}/>
            <input name={"description"} type="text" placeholder="description" onChange={handleChange}/>
            <select name={"category_id"} onChange={handleChange}>
                {
                    data.map((category)=>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </select>

            <button onClick={addTask1}>add</button>

        </>
    );
}

export default InputsTask;