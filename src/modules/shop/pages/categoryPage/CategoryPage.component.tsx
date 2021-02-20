import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IState } from '../../../../redux/root-reducer.interface';
import { IProductCollection } from '../../../../redux/shop/shop-reducer.interface';

import CollectionItem from '../../components/collectionItem/CollectionItem.component';

import './CategoryPage.styles.scss';

interface MatchParams {
    categoryId: string;
}

interface IProps extends RouteComponentProps<MatchParams> {
    collections: IProductCollection[];
}


const CategoryPage = ({ match: { params }, collections }: IProps) => {

    const { categoryId } = params;

    const selectedCategory = collections.find(elem => elem.routeName === categoryId);

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

const mapStateToProps = ({ shop: { collections } }: IState) => ({
    collections
});

export default connect(mapStateToProps)(CategoryPage);
