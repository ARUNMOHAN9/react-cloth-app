import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SHOP_DATA from '../../../../assets/data/shop.data';

import CollectionItem from '../../components/collectionItem/CollectionItem.component';

import './CategoryPage.styles.scss';

interface MatchParams {
    categoryId: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
}


const CategoryPage = ({ match: { params } }: IProps) => {

    const { categoryId } = params;

    const selectedCategory = SHOP_DATA.find(elem => elem.routeName === categoryId);

    let result = <div>No items found</div>;

    if (selectedCategory && selectedCategory?.items?.length) {
        result = (
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {
                        selectedCategory.items.map(item => <Grid item xs={12} sm={6} md={4} lg={3}><CollectionItem item={item} /></Grid>)
                    }
                </Grid>
            </Container>
        );
    }

    return result;
};

export default CategoryPage;
