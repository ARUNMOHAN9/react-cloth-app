import { SHOP_ACTION } from './shop-action.enum';
import { IShopAction, IShopState } from './shop-reducer.interface';

const INITIAL_STATE = {
    collections: []
};

const ShopReducer = (currentState: IShopState = INITIAL_STATE, action: IShopAction): IShopState => {

    const { type, payload } = action;

    switch (type) {
        case SHOP_ACTION.UPDATE_COLLECTION:
            return {
                ...currentState,
                collections: payload.collections || []
            }
        default:
            return currentState;
    }
};

export default ShopReducer;