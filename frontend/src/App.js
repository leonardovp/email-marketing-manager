import React from 'react';
import Header from './pages/public/__Common__/header';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {    

    return (
        <React.Fragment>
            <BrowserRouter>
                <CssBaseline />
                <Header />
                <Routes />
            </BrowserRouter>
        </React.Fragment>
    )

}

export default App;
