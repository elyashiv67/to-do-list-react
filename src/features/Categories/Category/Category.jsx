import React from 'react';

function Category({data}) {
    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.user_id}</p>
        </>
    );
}

export default Category;