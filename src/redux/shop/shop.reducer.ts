import SHOP_DATA from '../../assets/data/shop.data';
import { IShopAction, IShopState } from './shop-reducer.interface';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const ShopReducer = (currentState: IShopState = INITIAL_STATE, action: IShopAction) => {

    const { type, payload } = action;

    switch (type) {
        default:
            return currentState;
    }
};

export default ShopReducer;