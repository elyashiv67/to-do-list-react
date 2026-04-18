import React from 'react';
import {useDeleteCategory} from "../apiHooksCategories.js";

function Category({data}) {
    const {isPending, DeleteCategory} = useDeleteCategory();


    return (
        <>
            <input className={"title"}
                   type={"text"} defaultValue={data.name}
            />

            <button onClick={() => {
                DeleteCategory(data.id)
            }}
            >delete
            </button>
        </>
    );
}

export default Category;