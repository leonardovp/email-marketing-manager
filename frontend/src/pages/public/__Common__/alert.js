import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Alert(props) {   
  
    const handleClose = (event, reason) => {
        props.setMostraAlerta(false);
    };

    return(
        <Snackbar open={props.mostraAlerta} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical: "top", horizontal: "center"}}>
            <MuiAlert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }} elevation={6} variant="filled">
                {props.mensagemAlerta}
            </MuiAlert>
        </Snackbar>  
    ) 

}

export default Alert