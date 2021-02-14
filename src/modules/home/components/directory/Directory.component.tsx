import React from 'react';
import SECTIONS from '../../../../assets/data/directory.data';
import MenuItemComponent from '../menuItem/MenuItem.component';

import './Directory.styles.scss';

const DirectoryComponent = () => {

    return (
        <div className='directory-menu'>
            {
                SECTIONS.map(section => <MenuItemComponent title={section.title} key={section.id} imgUrl={section.imageUrl} size={section.size} />)
            }
        </div>
    )
}

export default DirectoryComponent
