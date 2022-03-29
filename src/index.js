import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App"
import {Provider} from 'react-redux'
import store from './components/redux/store'
// background style from https://www.svgbackgrounds.com/
import './index.css'

import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const theme = createTheme(
    {flexDirection: 'column-reverse'}
);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </Provider>
, document.getElementById('root'));