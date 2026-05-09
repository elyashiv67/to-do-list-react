import React from 'react';
import {useDeleteCategory} from "../apiHooksCategories.js";
import './category.css';

function Category({data}) {
    const {isPending, DeleteCategory} = useDeleteCategory();


    return (
        <div className="category-card">
            <input className={"category-title"}
                   type={"text"} defaultValue={data.name}
            />

            <span className={"category-btn"} onClick={() => {
                if(!confirm("Are you sure you want to delete this category?")) {
                    return;
                }
                DeleteCategory(data.id)
            }}
            >delete
            </span>
        </div>
    );
}

export default Category;