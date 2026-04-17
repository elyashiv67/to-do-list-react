import React from 'react';
import {Navigate , Outlet} from "react-router";
import {useAuth} from "./Context/AuthContext.jsx";

function ProtectedRoute() {
    const {isAuth} = useAuth();

    if(!isAuth){
        return <Navigate to="/login" replace />;
    }
    return ( <Outlet/> );
}

export default ProtectedRoute;