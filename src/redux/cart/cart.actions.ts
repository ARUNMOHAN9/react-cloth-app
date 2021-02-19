import { IProductItem } from '../../modules/shared/interfaces/product-item.interface';
import { CART_ACTION } from './cart-action.enum'
import { ICartAction } from './cart-reducer.interface'

export const switchCartDropdown = (flag: boolean): ICartAction => ({
    type: CART_ACTION.SWITCH_CART_DROPDOWN,
    payload: { isCartOpen: flag }
});

export const addCartItem = (cartItem: IProductItem): ICartAction => ({
    type: CART_ACTION.ADD_ITEM,
    payload: { cartItems: [{ ...cartItem }] }
});

export const deleteCartItem = (cartItem: IProductItem): ICartAction => ({
    type: CART_ACTION.DELETE_ITEM,
    payload: { cartItems: [{ ...cartItem }] }
});

export const removeCartItem = (cartItem: IProductItem): ICartAction => ({
    type: CART_ACTION.REMOVE_ITEM,
    payload: { cartItems: [{ ...cartItem }] }
});