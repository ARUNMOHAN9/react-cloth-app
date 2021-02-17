import { createMuiTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Firebase, { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';

interface IProps {
    children: JSX.Element
}

const theme = createMuiTheme({
    typography: {
        // Tell Material-UI what's the font-size on the html element is.
        htmlFontSize: 10,
    },
});

const RootWrapper = ({ children }: IProps) => {
    return (
        <>
            <React.StrictMode>
                <Router>
                    <StylesProvider injectFirst>
                        <CssBaseline />
                        <ThemeProvider theme={theme}>
                            <FirebaseContext.Provider value={new Firebase()}>
                                {children}
                            </FirebaseContext.Provider>
                        </ThemeProvider>
                    </StylesProvider>
                </Router>
            </React.StrictMode>
        </>
    )
}

export default RootWrapper;
