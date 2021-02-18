
import React from 'react';
import { IProductCategory } from '../../../shared/interfaces/product-item.interface';
import CollectionItem from '../collectionItem/CollectionItem.component';

import './CollectionPreview.styles.scss';

interface IProps extends IProductCategory {

}

const CollectionPreview = ({ title, items }: Omit<IProps, 'id'>) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((_, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;