import React from 'react';

import './CollectionItem.styles.scss';

interface IProps {
    name: string;
    price: number;
    imageUrl: string
}

const CollectionItem = ({ name, price, imageUrl }: IProps) => (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;