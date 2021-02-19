import React from 'react';

import './CollectionOverview.styles.scss';
import SHOP_DATA from '../../../../assets/data/shop.data';
import CollectionPreview from '../collectionPreview/CollectionPreview.component';

const CollectionOverview = () => {
    return (
        <div>
            {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

export default CollectionOverview
