import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/store';
import Welcome from "./layouts/Wellcome/Welcome";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Router>
                <Welcome/>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.querySelector('#root'),
);
