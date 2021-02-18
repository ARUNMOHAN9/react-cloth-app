import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../../../redux/cart/cart.actions';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';
import { IProductItem } from '../../../shared/interfaces/product-item.interface';

import './CollectionItem.styles.scss';

interface IProps {
    item: IProductItem;
    addItem?: (item: IProductItem) => void;
}

const CollectionItem = ({ item, addItem }: IProps) => {
    const { name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
                <CustomButton variant="contained" color="secondary" className="btn-cust-pos" onClick={() => addItem!(item)}>ADD TO CART</CustomButton>
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: IProductItem) => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);