import { CART_ACTION } from '../enums/cart-action.enum'
import { ICartState } from '../interfaces/reducers/cart-reducer.interface'

export const switchCartDropdown = (cart: Partial<ICartState>) => ({
    type: CART_ACTION.SWITCH_CART_DROPDOWN,
    payload: cart
});