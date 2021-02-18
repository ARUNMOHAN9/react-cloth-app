import { ICartState } from './cart/cart-reducer.interface';
import { IUserState } from './user/user-reducer.interface';

export interface IState {
    user: IUserState,
    cart: ICartState
}
