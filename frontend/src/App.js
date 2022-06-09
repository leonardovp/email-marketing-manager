import React from 'react';
import Header from './pages/public/__Common__/header';
import RoutesApp from './routes/index'
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Alert from './pages/public/__Common__/alert';

const App = () => {  

    return (
        <React.Fragment>
            <BrowserRouter>
                <CssBaseline />
                <Header />
                <RoutesApp />
            </BrowserRouter>
        </React.Fragment>
    )

}

export default App;
