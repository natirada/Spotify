import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// @ts-ignore
import Login from './screens/Login/Login.tsx';
// @ts-ignore
import defaultTheme from './style/themes/defaultTheme.ts';
// @ts-ignore
import Main from './screens/Main/Main.tsx';

const code: string | null = new URLSearchParams(window.location.search).get(
  'code'
);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <div className="App">{code ? <Main code={code} /> : <Login />}</div>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
