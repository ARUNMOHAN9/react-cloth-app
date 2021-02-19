import React from 'react';

import './CartDropdown.styles.scss';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';
import { connect } from 'react-redux';
import { IState } from '../../../../redux/root-reducer.interface';
import { IStateProductItem } from '../../../../redux/cart/cart-reducer.interface';
import CartItem from './cart-item/CartItem.component';
import { Link } from 'react-router-dom';
import { switchCartDropdown } from '../../../../redux/cart/cart.actions';

interface IProps {
    cartItems: IStateProductItem[];
    switchCartDD: (flag: boolean) => void;
}
const CartDropdown = ({ cartItems, switchCartDD }: IProps) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length
                        ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton size="medium" onClick={() => switchCartDD(false)}>
                <Link to='/checkout' className='cust-link'>
                    GO TO CHECKOUT
                </Link>
            </CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }: IState) => ({
    cartItems
});

const mapDispatchToProps = (dispatch: any) => ({
    switchCartDD: (flag: boolean) => dispatch(switchCartDropdown(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
