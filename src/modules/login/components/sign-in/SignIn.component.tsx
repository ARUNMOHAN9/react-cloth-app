import { Box, Card, CardContent, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';
import { FirebaseContext } from '../../../shared/modules/firebase/services/firebase.service';

import './SignIn.styles.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebaseCtx = useContext(FirebaseContext);

    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    const signInWithGoogle = () => {
        firebaseCtx?.signInWithGoogle()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Container fixed>
            <Card>
                <CardContent>
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>
                    <Box mt={2} />
                    <form onSubmit={onHandleSubmit}>
                        <Box mt={2} mb={2} />
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                required
                                value={email}
                                fullWidth
                                onChange={(e) => setEmail(e.currentTarget.value)} />
                        </Grid>
                        <Box mt={2} mb={2} />
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                required
                                value={password}
                                fullWidth
                                onChange={(e) => setPassword(e.currentTarget.value)} />
                        </Grid>

                        <Box mb={2} />
                        <div className="btn-wrapper">
                            <CustomButton type="submit" color="secondary" size="medium">Sign in</CustomButton>
                            <CustomButton size="medium" onClick={signInWithGoogle}>Sign in with google</CustomButton>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}

export default SignIn;