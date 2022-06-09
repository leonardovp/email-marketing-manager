import * as React from 'react';
import {
    Navigate, Outlet 
  } from "react-router-dom";
import Auth from "../services/auth";

const VerifyRoutes = () => {

    return(

        Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />       

    )
}

export default VerifyRoutes