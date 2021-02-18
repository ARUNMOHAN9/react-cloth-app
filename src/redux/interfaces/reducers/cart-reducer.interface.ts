import { CART_ACTION } from '../../enums/cart-action.enum';

export interface ICartState {
    isCartOpen: boolean
}

export interface ICartAction {
    type: CART_ACTION;
    payload: Partial<ICartState>
}
