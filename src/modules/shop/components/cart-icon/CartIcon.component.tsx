import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../../assets/images/shopping-bag.svg';
import { switchCartDropdown } from '../../../../redux/cart/cart.actions';
import { IState } from '../../../../redux/root-reducer.interface';
import CartDropdown from '../cart/CartDropdown.component';

import './CartIcon.styles.scss';

interface IProps {
    isCartOpen?: boolean;
    switchCartDD?: (flag: boolean) => void
}

const CartIcon = ({ isCartOpen, switchCartDD }: IProps) => {


    return (
        <div>
            <div className='cart-icon' onClick={() => switchCartDD!(!isCartOpen)}>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>0</span>
            </div>
            {isCartOpen ? <CartDropdown /> : null}
        </div>
    )
}

const mapStateToProps = ({ cart: { isCartOpen } }: IState) => ({
    isCartOpen
});

const mapDispatchToProps = (dispatch: any) => ({
    switchCartDD: (flag: boolean) => dispatch(switchCartDropdown(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
