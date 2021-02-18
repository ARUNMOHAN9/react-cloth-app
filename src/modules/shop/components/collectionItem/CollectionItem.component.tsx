import React from 'react';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';

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
        >
            <CustomButton variant="contained" color="secondary" className="btn-cust-pos">ADD TO CART</CustomButton>
        </div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;