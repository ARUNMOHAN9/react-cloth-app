import { Container, Card, CardContent, Box, Grid, TextField } from '@material-ui/core';
import React, { useContext, useRef, useState } from 'react'
import AlertDialog, { Handle } from '../../../shared/components/alert-dialog/AlertDialog';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';
import { FirebaseContext } from '../../../shared/modules/firebase/services/firebase.service';

const SignUp = () => {

    let childRef: Handle<typeof AlertDialog>;

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const firebaseCtx = useContext(FirebaseContext);

    const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!displayName || !email || !password || !confirmPassword) {
            return
        }

        if (password !== confirmPassword) {
            alert('Passwords not equal');
            return
        }

        try {
            const { user } = await firebaseCtx?.registerWithEmailAndPassword(email, password)!;

            firebaseCtx?.addUser({ ...user, displayName });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container fixed>
            <Card>
                <CardContent>
                    <h2>I do not have a account</h2>
                    <span>Sign up with your email and password</span>
                    <Box mt={2} />
                    <form onSubmit={onHandleSubmit}>
                        <Grid item xs={12}>
                            <TextField
                                id="name"
                                label="Display Name"
                                variant="outlined"
                                required
                                value={displayName}
                                fullWidth
                                onChange={(e) => setDisplayName(e.currentTarget.value)} />
                        </Grid>
                        <Box mt={2} />
                        <Grid item xs={12}>
                            <TextField
                                id="signup-email"
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
                                id="signup-password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                required
                                value={password}
                                fullWidth
                                onChange={(e) => setPassword(e.currentTarget.value)} />
                        </Grid>
                        <Box mt={2} mb={2} />
                        <Grid item xs={12}>
                            <TextField
                                id="confirm-password"
                                label="Confirm Password"
                                variant="outlined"
                                type="password"
                                required
                                value={confirmPassword}
                                fullWidth
                                onChange={(e) => setConfirmPassword(e.currentTarget.value)} />
                        </Grid>
                        <Box mb={2} />
                        <CustomButton type="submit" color="secondary" size="medium">Sign Up</CustomButton>
                        <CustomButton type="button" color="primary" size="medium" onClick={() => { childRef?.handleOpen('something went wrong') }}>Sign Up</CustomButton>
                    </form>
                </CardContent>
            </Card>
            <AlertDialog ref={c => childRef = c!} />
        </Container>
    )
}

export default SignUp;
