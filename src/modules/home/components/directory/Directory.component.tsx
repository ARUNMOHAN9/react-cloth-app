import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { ISection } from '../../../../redux/category/category-reducer.inerface';
import { IState } from '../../../../redux/root-reducer.interface';
import MenuItemComponent from '../menuItem/MenuItem.component';

import './Directory.styles.scss';

interface IProps {
    sections?: ISection[]
}

const DirectoryComponent = ({ sections = [] }: IProps) => {

    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherProps }, index) => {
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

const mapStateToProps = ({ category: { sections } }: IState) => ({
    sections
});

export default connect(mapStateToProps)(DirectoryComponent);
