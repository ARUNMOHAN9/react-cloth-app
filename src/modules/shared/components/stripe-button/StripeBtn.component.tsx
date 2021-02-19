import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeBtn = ({ price }: { price: number }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_mHAVxe0nbcv3gI33LJw9KeZ400CwRKkU1G';

    const onToken = (token: any) => {
        alert('Payment successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            stripeKey={publishableKey}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
        />
    )
}

export default StripeBtn;
