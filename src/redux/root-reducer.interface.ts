import { ICartState } from './cart/cart-reducer.interface';
import { ICategoryState } from './category/category-reducer.inerface';
import { IUserState } from './user/user-reducer.interface';

export interface IState {
    user: IUserState,
    cart: ICartState,
    category: ICategoryState
}
