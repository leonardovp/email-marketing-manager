import React, { useState } from 'react';
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

import Alert from '../__Common__/alert';
import {Link as RouterLink, useNavigate } from 'react-router-dom';
import api from '../../../services/api';
import Auth from '../../../services/auth';

const SignIn = () => {

  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mostraAlerta, setMostraAlerta] = useState(false);
  const [mensagemAlerta, setMensagemAlerta] = useState('');
  const [severity, setSeverity] = useState('info');

  const handleSignIn = async (event) => {

    event.preventDefault();

    if(!email || !password){

      setMostraAlerta(true);
      setMensagemAlerta("Favor preencher todos os campos para se logar");
      setSeverity("warning");

    }else{

      try {
        
       const response = await api.post('/accounts/login', {
          email, password
        })

        console.log(response);

        Auth.login(response.data.token)

        navigate('/');

      } catch (error) {

        console.log(error);

        setMostraAlerta(true);
        setSeverity("error");
        setMensagemAlerta(`Ocorreu um erro durante a tentativa de login: ${error}`);
        
      }

    }
  }
    return(
      <>
      <Alert mostraAlerta={mostraAlerta} mensagemAlerta={mensagemAlerta} severity={severity} setMostraAlerta={setMostraAlerta}/>
 
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Não tem uma Conta? Cadastra-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>       
      </Container>
      </>
    )
  }

export default SignIn;