import React from 'react';
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
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';


import {Link as RouterLink} from 'react-router-dom';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      name: '',
      email: '',
      domain: '',
      password: '',
      error: '',
      isLoading: false,
      openAlert: false,
    }     
  } 

  setOpenAlert = (openAlert) =>{
    this.setState({ openAlert });
  }

  handleSignUp = async (event) => {
   
    event.preventDefault();

    const {name, email, domain, password, isLoading} = this.state; 

    if(!name){      
      await this.setOpenAlert(true);
      await this.setState({error: "Informe todos os campos para se cadastrar"});  
      //console.log(this.state.openAlert);   
    }
  }

  handleClose = () => { 
    this.setOpenAlert(false);    
  }

render(){

  return(  
    <>

    <Snackbar open={this.state.openAlert} autoHideDuration={5000} onClose={this.handleClose} anchorOrigin={{vertical: "top", horizontal: "center"}}>
      <MuiAlert onClose={this.handleClose} severity="error" sx={{ width: '100%' }} elevation={6} variant="filled">
        {this.state.error}
      </MuiAlert>
    </Snackbar>  
   
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
      <Box component="form" noValidate onSubmit={this.handleSignUp} sx={{ mt: 3 }}>
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
              onChange={e => this.setState({ name: e.target.value})}          
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


}

export default SignUp;