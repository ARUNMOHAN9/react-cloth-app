import { combineReducers } from 'redux';
import { IState } from './root-reducer.interface';
import CartReducer from './cart/cart.reducer';
import UserReducer from './user/user.reducer';

export default combineReducers<IState>({
    user: UserReducer,
    cart: CartReducer
})