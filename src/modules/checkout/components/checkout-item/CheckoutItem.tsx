import React from 'react';
import { IStateProductItem } from '../../../../redux/cart/cart-reducer.interface';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteIcon from '@material-ui/icons/Delete';

import './CheckoutItem.styles.scss';
import { addCartItem, removeCartItem } from '../../../../redux/cart/cart.actions';
import { IProductItem } from '../../../shared/interfaces/product-item.interface';
import { connect } from 'react-redux';

interface IProps {
    cartItem: IStateProductItem,
    addItem?: (item: IProductItem) => void;
    removeItem?: (item: IProductItem) => void;
}

const CheckoutItem = ({ cartItem, addItem, removeItem }: IProps) => {

    const { imageUrl, price, name, quantity = 0 } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <ArrowBackIosIcon onClick={() => removeItem!(cartItem)} />
                <span>{quantity}</span>
                <ArrowForwardIosIcon onClick={() => addItem!(cartItem)} />
            </span>
            <span className='price'>{price * quantity}</span>
            <div className='remove-button'><DeleteIcon /></div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: IProductItem) => dispatch(addCartItem(item)),
    removeItem: (item: IProductItem) => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);