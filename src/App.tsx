import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import './App.css';
// @ts-ignore
import Login from './screens/Login/Login.tsx';
// @ts-ignore
import defaultTheme from './style/themes/defaultTheme.ts';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StylesProvider injectFirst>
        <div className="App">
          <Login />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
