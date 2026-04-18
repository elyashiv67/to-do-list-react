import React from 'react';
import {createBrowserRouter} from "react-router";
import AppLayout from "../AppLayout/AppLayout.jsx";
import Login from "../Login/Login.jsx";
import Tasks from "../features/Tasks/Tasks.jsx";
import Categories from "../features/Categories/Categories.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const Router = createBrowserRouter([{


    element: <AppLayout/>,
    children: [
        {path: "/", element: <Login/>},
        {path:'/Login' , element:<Login/>},


        {
            element: <ProtectedRoute/>,
            children: [
                {path:'/tasks' , element:<Tasks/>},
                {path:'/categories' , element:<Categories/>}
            ]
        }
    ]
}])

export default Router;