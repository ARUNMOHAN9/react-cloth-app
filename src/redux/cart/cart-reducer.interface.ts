import { IProductItem } from '../../modules/shared/interfaces/product-item.interface';
import { CART_ACTION } from './cart-action.enum';

export interface ICartState {
    isCartOpen: boolean,
    cartItems: IProductItem[]
}

export interface ICartAction {
    type: CART_ACTION;
    payload: Partial<ICartState>
}
