import { CART_ACTION } from './cart-action.enum';
import { ICartAction, ICartState } from './cart-reducer.interface'
import { addItemToCart } from './utilities/add-item';
import { removeItemToCart } from './utilities/remove-item';

const INITIAL_STATE: ICartState = {
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
            return addItemToCart(currentState, payload?.cartItems![0]);

        case CART_ACTION.DELETE_ITEM:
            return removeItemToCart(currentState, payload?.cartItems![0])

        default:
            return currentState;
    }
}

export default CartReducer;