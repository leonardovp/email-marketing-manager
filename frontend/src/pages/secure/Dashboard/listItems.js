import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MainListItems = ({mostraMensagem}) => {

   let navigate = useNavigate();

    const sair = async (event) => {

        //mostraMensagem(true, "success", "Cadastro realizado com sucesso!");
        navigate('/signin');

    }

return (

    <React.Fragment> 
    <ListItemButton>
    <ListItemIcon>
    <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
    <ShoppingCartIcon />
    </ListItemIcon>
    <ListItemText primary="Contas" />
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
    <PeopleIcon />
    </ListItemIcon>
    <ListItemText primary="Contatos" />
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
    <BarChartIcon />
    </ListItemIcon>
    <ListItemText primary="Campanhas" />
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
    <LayersIcon />
    </ListItemIcon>
    <ListItemText primary="Configurações" />
    </ListItemButton>
    <Button              
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={sair}
            >
            SAIR
            </Button>
   </React.Fragment>


)

}

export default MainListItems

