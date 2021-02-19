import { ClickAwayListener } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../../assets/images/shopping-bag.svg';
import { switchCartDropdown } from '../../../../redux/cart/cart.actions';
import { IState } from '../../../../redux/root-reducer.interface';
import CartDropdown from '../cart/CartDropdown.component';

import './CartIcon.styles.scss';

interface IProps {
    isCartOpen?: boolean;
    switchCartDD?: (flag: boolean) => void;
    totalQty: number;
}

const CartIcon = ({ isCartOpen, switchCartDD, totalQty }: IProps) => {

    return (
        <div>
            <div className='cart-icon' onClick={() => switchCartDD!(!isCartOpen)}>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>{totalQty}</span>
            </div>
            {isCartOpen
                ? (<ClickAwayListener onClickAway={() => switchCartDD!(false)}>
                    <div>
                        <CartDropdown />
                    </div>
                </ClickAwayListener>)
                : null}
        </div>
    )
}

const mapStateToProps = ({ cart: { isCartOpen, cartItems } }: IState) => ({
    isCartOpen,
    totalQty: cartItems.reduce((accumulatedQty, cartItem) => accumulatedQty + (cartItem.quantity || 0), 0)
});

const mapDispatchToProps = (dispatch: any) => ({
    switchCartDD: (flag: boolean) => dispatch(switchCartDropdown(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
