import * as React from 'react';
import {
    Route, useNavigate, Navigate, Outlet 
  } from "react-router-dom";
import Auth from "../services/auth";

const VerifyRoutes = () => {

    let navigate = useNavigate();

    return(

        Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />       

    )
}

export default VerifyRoutes