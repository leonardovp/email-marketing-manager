import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Alert from '../__Common__/alert';
import {Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';
import api from '../../../services/api';

function SignUp() {

  let navigate = useNavigate();

  const state = {
    name: '',
    email: '',
    domain: '',
    password: '',
    error: '',
    isLoading: false,    
  }   

  const [mostraAlerta, setMostraAlerta] = useState(false);
  const [mensagemAlerta, setMensagemAlerta] = useState('');

  async function handleSignUp(event) {
   
    event.preventDefault();

    const {name, email, domain, password, isLoading} = state; 

    const data = new FormData(event.currentTarget);
   
    state.name =  data.get('name')
    state.email =  data.get('email')
    state.domain =  data.get('domain')
    state.password = data.get('password') 

    if(!state.name || !state.email || !state.domain || !state.password){

      setMostraAlerta(true);
      setMensagemAlerta('Informe todos os campos para se cadastrar');  

    }else{
      try {
       
         navigate('/signin');

      } catch (error) {
        
        setMostraAlerta(true);
        setMensagemAlerta(`Erro de cadastro: ${error}`);

      }

    }
  }

  return(  
    <>
   <Alert mostraAlerta={mostraAlerta} mensagemAlerta={mensagemAlerta} severity="error" setMostraAlerta={setMostraAlerta}/>
 
   
    <Container component="main" maxWidth="xs">    
    <CssBaseline />   
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus                       
            />
          </Grid>        
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="domain"
              label="Domain Name"
              name="domain"
              autoComplete="domain"              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"              
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={RouterLink} to="/signin" variant="body2">
              Já tem uma conta? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>    
  </Container>
  
  </> 
  )

}

export default SignUp;