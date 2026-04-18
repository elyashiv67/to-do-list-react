import React from 'react';
import {useGetAllCategories , useAddCategory} from "./apiHooksCategories.js";
import Category from "./Category/Category.jsx";
import InputsForCategory from "./inputsForCategory/inputsForCategory.jsx";

function Categories() {
    const {isPending, isError, data, error} = useGetAllCategories();
    console.log(data);
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return <>
        <h1>my categories</h1>
        <InputsForCategory/>

        {
            data.map((category) => {
                return <Category key={category.id} data={category}/>
            })
        }
    </>
}

export default Categories;