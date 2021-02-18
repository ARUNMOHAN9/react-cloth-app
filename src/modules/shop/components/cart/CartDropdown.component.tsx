import React from 'react';

import './CartDropdown.styles.scss';
import CustomButton from '../../../shared/components/custom-btn/CustomBtn.component';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" />
            <CustomButton size="medium">GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
