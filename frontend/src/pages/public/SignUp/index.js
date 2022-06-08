import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {Link as RouterLink, useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import { useForm } from 'react-hook-form'


const SignUp = ({mostraMensagem}) => {

  let navigate = useNavigate();

  const valoresIniciais = {
    name: ''
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: valoresIniciais
  });

  const onSubmit = async (data) => { 

    //event.preventDefault();   
    
    const  {name, email, domain, password} = data;  

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
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField              
              autoComplete="name"
              {...register("name", { required: true })}
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              helperText={errors.name && "campo obrigatório"}   
              error={errors.name != undefined} 
                
            />
          
            
          </Grid>        
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              {...register("email", { required: true })}
              autoComplete="email"                          
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="domain"
              label="Domain Name"
              {...register("domain", { required: true })}
              autoComplete="domain"                           
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              {...register("password", { required: true })}
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"                           
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