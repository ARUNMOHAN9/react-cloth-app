import { CART_ACTION } from '../enums/cart-action.enum';
import { ICartAction, ICartState } from '../interfaces/reducers/cart-reducer.interface'

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: []
}

const CartReducer = (currentState: ICartState = INITIAL_STATE, action: ICartAction): ICartState => {

    const { type, payload } = action;

    switch (type) {
        case CART_ACTION.SWITCH_CART_DROPDOWN:
            return {
                ...currentState,
                isCartOpen: payload.isCartOpen!
            }

        case CART_ACTION.ADD_ITEM:
            if (!payload?.cartItems?.length) {
                return currentState;
            }
            return {
                ...currentState,
                cartItems: [...currentState.cartItems, ...payload.cartItems]
            }

        default:
            return currentState;
    }
}

export default CartReducer;