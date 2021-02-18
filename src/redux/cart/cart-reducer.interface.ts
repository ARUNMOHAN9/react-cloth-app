import { IProductItem } from '../../modules/shared/interfaces/product-item.interface';
import { CART_ACTION } from './cart-action.enum';

export interface IStateProductItem extends IProductItem {
    quantity: number;
}

export interface ICartState {
    isCartOpen: boolean,
    cartItems: IStateProductItem[]
}

export interface ICartAction {
    type: CART_ACTION;
    payload: Partial<ICartState>
}
