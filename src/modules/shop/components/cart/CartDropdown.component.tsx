import React from 'react';

import './CartDropdown.styles.scss';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';
import { connect } from 'react-redux';
import { IState } from '../../../../redux/root-reducer.interface';
import { IStateProductItem } from '../../../../redux/cart/cart-reducer.interface';
import CartItem from './cart-item/CartItem.component';

interface IProps {
    cartItems: IStateProductItem[]
}
const CartDropdown = ({ cartItems }: IProps) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                }
            </div>
            <CustomButton size="medium">GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }: IState) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);
