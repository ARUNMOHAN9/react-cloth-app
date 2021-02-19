import { CART_ACTION } from './cart-action.enum';
import { ICartAction, ICartState } from './cart-reducer.interface'
import { addItemToCart } from './utilities/add-item';
import { deleteItemFromCart } from './utilities/delete-item';
import { removeItemFromCart } from './utilities/remove-item';

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
            return {
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, payload.cartItems![0])
            }

        case CART_ACTION.DELETE_ITEM:
            return {
                ...currentState,
                cartItems: deleteItemFromCart(currentState.cartItems, payload?.cartItems![0])
            }

        case CART_ACTION.REMOVE_ITEM:
            return {
                ...currentState,
                cartItems: removeItemFromCart(currentState.cartItems, payload?.cartItems![0])
            }

        default:
            return currentState;
    }
}

export default CartReducer;