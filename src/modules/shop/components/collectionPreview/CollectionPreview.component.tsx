
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { IProductCategory } from '../../../shared/interfaces/product-item.interface';
import CollectionItem from '../collectionItem/CollectionItem.component';

import './CollectionPreview.styles.scss';

interface IProps extends IProductCategory {

}

const CollectionPreview = ({ title, items }: Omit<IProps, 'id'>) => (
    <Container maxWidth="xl" className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <Grid container spacing={2}>
            {items
                .filter((_, idx) => idx < 4)
                .map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.id}>
                        <CollectionItem item={item} />
                    </Grid>
                ))}
        </Grid>
    </Container>
);

export default CollectionPreview;