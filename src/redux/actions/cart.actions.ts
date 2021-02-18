import { IProductItem } from '../../modules/shared/interfaces/product-item.interface';
import { CART_ACTION } from '../enums/cart-action.enum'
import { ICartAction, ICartState } from '../interfaces/reducers/cart-reducer.interface'

export const switchCartDropdown = (flag: boolean): ICartAction => ({
    type: CART_ACTION.SWITCH_CART_DROPDOWN,
    payload: { isCartOpen: flag }
});

export const addCartItem = (cartItem: IProductItem): ICartAction => ({
    type: CART_ACTION.ADD_ITEM,
    payload: { cartItems: [cartItem] }
});