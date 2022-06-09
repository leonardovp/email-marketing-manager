import React, { useState } from 'react';
import {
    Routes,
    Route,
  } from 'react-router-dom';

import SignInPage from "../pages/public/SignIn";
import SignUpPage from "../pages/public/SignUp";
import Dashboard from "../pages/secure/Dashboard/Dashboard";

import PrivateRoute from './verify-login-routes'

import Alert from '../pages/public/__Common__/alert';

const RoutesApp = () => {

  const [mostraAlerta, setMostraAlerta] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [mensagemAlerta, setMensagemAlerta] = useState('');

  function handleMostraMensagem(mostraAlerta, severity, mensagemAlerta){

      setMostraAlerta(mostraAlerta);
      setSeverity(severity);
      setMensagemAlerta(mensagemAlerta);
     
  }

  return(

    <React.Fragment>

    <Alert mostraAlerta={mostraAlerta} mensagemAlerta={mensagemAlerta} severity={severity} setMostraAlerta={setMostraAlerta}/>


      <Routes>     
      
        <Route exact path='/' element={<PrivateRoute/>}>
          <Route exact path='/' element={<SignInPage mostraMensagem={handleMostraMensagem} />} />
        </Route>

        <Route exact path='/dashboard' element={<PrivateRoute/>}>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Route>
        
        <Route path='signin' element={<SignInPage mostraMensagem={handleMostraMensagem} />} />
        <Route path='signup' element={<SignUpPage mostraMensagem={handleMostraMensagem} />} />           
     
      </Routes>

    </React.Fragment>

  )

}

export default RoutesApp

