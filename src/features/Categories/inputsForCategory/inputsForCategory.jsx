import  {useState} from 'react';
import {useAddCategory} from "../apiHooksCategories.js";

function InputsForCategory() {

    const [category,setCategory] = useState({
        name:""
    });


    const {isPending,AddCategory} = useAddCategory();

    function handleChange(e){
        const {name,value} = e.target;
        setCategory((prevData)=> ({...prevData,
            [name]:value
        }));
    }

    function addCategory(){
        AddCategory(category);
    }
    return (
        <>
            <input name={"user_id"} type="hidden"/>
            <input name={"name"} type="text" placeholder="name" onChange={handleChange}/>
            <button onClick={addCategory}>add</button>

        </>
    );
}

export default InputsForCategory;