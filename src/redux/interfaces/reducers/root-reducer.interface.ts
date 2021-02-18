import { ICartState } from './cart-reducer.interface';
import { IUserState } from './user-reducer.interface';

export interface IState {
    user: IUserState,
    cart: ICartState
}
