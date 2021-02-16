import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import Firebase, { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';


const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StylesProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <FirebaseContext.Provider value={new Firebase()}>
            <App />
          </FirebaseContext.Provider>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
