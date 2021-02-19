import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IState } from './root-reducer.interface';
import CartReducer from './cart/cart.reducer';
import UserReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers<IState>({
    user: UserReducer,
    cart: CartReducer
});

export default persistReducer(persistConfig, rootReducer);