import { SHOP_ACTION } from './shop-action.enum';
import { IProductCollection, IShopAction } from './shop-reducer.interface';

export const updateCollections = (collections: IProductCollection[]): IShopAction => ({
    type: SHOP_ACTION.UPDATE_COLLECTION,
    payload: { collections: collections }
});