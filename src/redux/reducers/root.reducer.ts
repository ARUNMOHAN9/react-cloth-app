import { combineReducers } from 'redux';
import { IState } from '../interfaces/reducers/root-reducer.interface';
import CartReducer from './cart.reducer';
import UserReducer from './user.reducer';

export default combineReducers<IState>({
    user: UserReducer,
    cart: CartReducer
})