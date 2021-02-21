import Firebase from '../../modules/shared/modules/firebase/services/firebase.service';
import { SHOP_ACTION } from './shop-action.enum';
import { IProductCollection, IShopAction } from './shop-reducer.interface';

export const fetchCollectionsStart = (): IShopAction => ({
    type: SHOP_ACTION.FETCH_COLLECTIONS_START,
    payload: {}
});

export const fetchCollectionsSuccess = (collections: IProductCollection[]): IShopAction => ({
    type: SHOP_ACTION.FETCH_COLLECTIONS_SUCCESS,
    payload: { collections: collections }
});

export const fetchCollectionsFailure = (err: string): IShopAction => ({
    type: SHOP_ACTION.FETCH_COLLECTIONS_FAILURE,
    payload: { errorMsg: err }
});


export const fetchCollectionsStartAsync = (firebaseCtx: Firebase) => {
    return (dispatch: any) => {
        dispatch(fetchCollectionsStart());

        firebaseCtx?.getCollections()
            .then((res: any) => dispatch(fetchCollectionsSuccess(res)))
            .catch(() => dispatch(fetchCollectionsFailure('Fetching fail')))
    }
}