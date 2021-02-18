import React from 'react'
import SHOP_DATA from '../../../../assets/data/shop.data';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview.component';

import './ShopPage.styles.scss';

const ShopPage = () => {

    return (
        <div className='shop-page'>
            {SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};

export default ShopPage;
