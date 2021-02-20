import React from 'react';

import './CollectionOverview.styles.scss';
import CollectionPreview from '../collectionPreview/CollectionPreview.component';
import { connect } from 'react-redux';
import { IState } from '../../../../redux/root-reducer.interface';
import { IProductCollection } from '../../../../redux/shop/shop-reducer.interface';

interface IProps {
    collections: IProductCollection[];
}

const CollectionOverview = ({ collections }: IProps) => {
    return (
        <div>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = ({ shop: { collections } }: IState) => ({
    collections
});

export default connect(mapStateToProps)(CollectionOverview);
