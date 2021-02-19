import React from 'react';
import { connect } from 'react-redux';
import { IStateProductItem } from '../../../../redux/cart/cart-reducer.interface';
import { IState } from '../../../../redux/root-reducer.interface';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './CheckoutPage.styles.scss';

interface IProps {
    cartItems: IStateProductItem[];
    totalPrice: number;
}

const CheckoutPage = ({ cartItems, totalPrice }: IProps) => {

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>TOTAL: ${totalPrice}</div>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }: IState) => ({
    cartItems,
    totalPrice: cartItems.reduce((initial, currentItem) => initial += (currentItem.quantity || 0) * currentItem.price, 0)
});

export default connect(mapStateToProps)(CheckoutPage);
