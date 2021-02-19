import { createMuiTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Firebase, { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
            <Provider store={store}>
                <React.StrictMode>
                    <Router>
                        <PersistGate persistor={persistor}>
                            <StylesProvider injectFirst>
                                <CssBaseline />
                                <ThemeProvider theme={theme}>
                                    <FirebaseContext.Provider value={new Firebase()}>
                                        {children}
                                    </FirebaseContext.Provider>
                                </ThemeProvider>
                            </StylesProvider>
                        </PersistGate>
                    </Router>
                </React.StrictMode>
            </Provider>

        </>
    )
}

export default RootWrapper;
