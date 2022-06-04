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

import {Link as RouterLink, useNavigate } from 'react-router-dom';
import api from '../../../services/api';

const SignUp = ({mostraMensagem}) => {

  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => { 
   
    event.preventDefault(); 

    if(!name || !email || !domain || !password){

      mostraMensagem(true, "warning", "Informe todos os campos para se cadastrar");

    }else{
      try {    
	  
        await api.post('accounts', {
            name, email, domain, password
        });
    
        mostraMensagem(true, "success", "Cadastro realizado com sucesso!");
        navigate('/signin');

      } catch (error) {

        mostraMensagem(true, "error", `Erro de cadastro: ${error}`);     

      }

    }
  }

  return(  
    <>   
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
              onChange={event => setName(event.target.value)}                   
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
              onChange={event => setEmail(event.target.value)}             
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
              onChange={event => setDomain(event.target.value)}               
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
              onChange={event => setPassword(event.target.value)}               
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