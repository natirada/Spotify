import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './screens/Login/Login';
import defaultTheme from './style/themes/defaultTheme';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<StylesProvider injectFirst>
				<div className='App'>
					<Login />
				</div>
			</StylesProvider>
		</ThemeProvider>
	);
}

export default App;
