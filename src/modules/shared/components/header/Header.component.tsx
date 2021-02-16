import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../../../../assets/images/crown.svg'
import './Header.styles.scss';
import { Box, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { FirebaseContext } from '../../modules/firebase/services/firebase.service';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
}));

interface Iprops {
    currentUser: any;
}

const Header = ({ currentUser }: Iprops) => {
    const classes = useStyles();

    const firebaseCtx = useContext(FirebaseContext);

    const signOut = () => {
        firebaseCtx?.signOut()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <div className={classes.title}>
                        <RouterLink to='/'>
                            <Logo className="brand-logo" />
                        </RouterLink>
                    </div>
                    <Link color="inherit" className="nav-link" component={RouterLink} to='/shop'>
                        SHOP
                    </Link>
                    <Box mr={2} />
                    <Link color="inherit" className="nav-link" component={RouterLink} to='/shop'>
                        CONTACT
                    </Link>
                    <Box ml={2} />
                    <Button color="inherit" size="large">
                        {
                            currentUser
                                ? <div className="nav-link" onClick={() => signOut()}>Sign Out</div>
                                : <RouterLink className="nav-link" to='/login'>Sign In</RouterLink>
                        }
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </div>
    );
}

export default Header;