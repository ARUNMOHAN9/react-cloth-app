import React from 'react';
import SECTIONS from '../../../../assets/data/directory.data';
import MenuItemComponent from '../menuItem/MenuItem.component';

import './Directory.styles.scss';

const DirectoryComponent = () => {

    return (
        <div className='directory-menu'>
            {
                SECTIONS.map(({ id, ...otherProps }) => <MenuItemComponent key={id} {...otherProps} />)
            }
        </div>
    )
}

export default DirectoryComponent
