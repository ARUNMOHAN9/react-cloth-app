import { ICartState } from './cart/cart-reducer.interface';
import { ICategoryState } from './category/category-reducer.inerface';
import { IShopState } from './shop/shop-reducer.interface';
import { IUserState } from './user/user-reducer.interface';

export interface IState {
    user: IUserState,
    cart: ICartState,
    category: ICategoryState,
    shop: IShopState
}
