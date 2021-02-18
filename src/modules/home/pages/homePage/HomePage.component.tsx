import DirectoryComponent from '../../components/directory/Directory.component';
import React from 'react'

import './HomePage.styles.scss';
import { Container } from '@material-ui/core';

const HomePage = () => (
    <Container maxWidth="xl" className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <DirectoryComponent />
    </Container>
);

export default HomePage;
