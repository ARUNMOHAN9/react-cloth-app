import { SHOP_ACTION } from './shop-action.enum';
import { IShopAction, IShopState } from './shop-reducer.interface';

const INITIAL_STATE = {
    collections: [],
    isFetching: false,
    errorMsg: null
};

const ShopReducer = (currentState: IShopState = INITIAL_STATE, action: IShopAction): IShopState => {

    const { type, payload } = action;

    switch (type) {
        case SHOP_ACTION.FETCH_COLLECTIONS_START:
            return {
                ...currentState,
                isFetching: true
            }
        case SHOP_ACTION.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...currentState,
                isFetching: false,
                collections: payload.collections || []
            }
        case SHOP_ACTION.FETCH_COLLECTIONS_FAILURE:
            return {
                ...currentState,
                isFetching: false,
                errorMsg: payload.errorMsg
            }
        default:
            return currentState;
    }
};

export default ShopReducer;