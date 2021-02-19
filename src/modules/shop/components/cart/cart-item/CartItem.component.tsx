import React from 'react';
import { IStateProductItem } from '../../../../../redux/cart/cart-reducer.interface';

import './CartItem.styles.scss';

interface IProps {
    cartItem: IStateProductItem
}

const CartItem = ({ cartItem }: IProps) => {

    const { imageUrl, price, name, quantity = 0 } = cartItem;

    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
