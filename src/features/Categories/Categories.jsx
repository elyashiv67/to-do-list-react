import React from 'react';
import {useGetAllCategories} from "./apiHooksCategories.js";
import Category from "./Category/Category.jsx";

function Categories() {
    const {isPending, isError, data, error}= useGetAllCategories();
    console.log(data);
    if (isPending) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return (
        data.map((category) => {
            return <Category data={category}/>
        })
    );
}

export default Categories;