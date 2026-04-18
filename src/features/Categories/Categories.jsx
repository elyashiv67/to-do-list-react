import React from 'react';
import './categories.css';
import {useGetAllCategories} from "./apiHooksCategories.js";
import Category from "./Category/Category.jsx";
import InputsForCategory from "./inputsForCategory/inputsForCategory.jsx";

function Categories() {
    const {isPending, isError, data, error} = useGetAllCategories();
    console.log(data);
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return <div className="categories-card">
        <h1>my categories</h1>
        <InputsForCategory/>

        <div className={"categories-wrapper"}>
            {
                data.map((category) => {
                    return <Category key={category.id} data={category}/>
                })
            }
        </div>
    </div>
}

export default Categories;