import { Grid } from '@material-ui/core';
import React from 'react';
import SECTIONS from '../../../../assets/data/directory.data';
import MenuItemComponent from '../menuItem/MenuItem.component';

import './Directory.styles.scss';

const DirectoryComponent = () => {

    return (
        <div className='directory-menu'>
            {
                SECTIONS.map(({ id, ...otherProps }, index) => {
                    if (index > 2) {
                        return (
                            <Grid item xs={12} md={6} key={id}>
                                <MenuItemComponent {...otherProps} />
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid item xs={12} md={4} key={id}>
                                <MenuItemComponent {...otherProps} />
                            </Grid>
                        )
                    }
                })
            }
        </div>
    )
}

export default DirectoryComponent
