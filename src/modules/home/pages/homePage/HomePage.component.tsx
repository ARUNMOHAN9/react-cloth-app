import DirectoryComponent from '../../components/directory/Directory.component';
import React from 'react'

import './HomePage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <h1>Welcome to my Homepage</h1>
        <DirectoryComponent />
    </div>
);

export default HomePage;
