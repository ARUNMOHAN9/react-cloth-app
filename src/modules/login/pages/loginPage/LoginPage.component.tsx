import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        itemPadding: {
            padding: theme.spacing(2)
        },
    }),
);

const LoginPage = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} className={classes.itemPadding}>
                <SignIn />
            </Grid>
            <Grid item xs={12} md={6} className={classes.itemPadding}>
                <SignUp />
            </Grid>
        </Grid>
    );
}

export default LoginPage;