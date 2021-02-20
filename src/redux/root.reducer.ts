import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IState } from './root-reducer.interface';
import CartReducer from './cart/cart.reducer';
import UserReducer from './user/user.reducer';
import CategoryReducer from './category/category.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers<IState>({
    user: UserReducer,
    cart: CartReducer,
    category: CategoryReducer
});

export default persistReducer(persistConfig, rootReducer);