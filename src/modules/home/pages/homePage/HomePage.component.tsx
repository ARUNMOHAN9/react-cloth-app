import DirectoryComponent from '../../components/directory/Directory.component';
import React from 'react'

import { HomePageContainer } from './HomePage.styles';

const HomePage = () => (
    <HomePageContainer maxWidth="xl">
        <h1>Welcome to my Homepage</h1>
        <DirectoryComponent />
    </HomePageContainer>
);

export default HomePage;
