import React, { useContext, useEffect } from 'react';

import './CollectionOverview.styles.scss';
import CollectionPreview from '../collectionPreview/CollectionPreview.component';
import { connect } from 'react-redux';
import { IState } from '../../../../redux/root-reducer.interface';
import { IProductCollection } from '../../../../redux/shop/shop-reducer.interface';
import LoadingSpinner from '../../../shared/components/loading-spinner/LoadingSpinner.component';
import { fetchCollectionsStartAsync } from '../../../../redux/shop/shop.actions';
import Firebase, { FirebaseContext } from '../../../shared/modules/firebase/services/firebase.service';

interface IProps {
    collections?: IProductCollection[];
    isLoading?: boolean;
    fetchCollectionsStartAsync?: (ctx: Firebase) => void;
}

const CollectionOverview = ({ collections, isLoading, fetchCollectionsStartAsync }: IProps) => {

    const firebaseCtx = useContext(FirebaseContext)

    useEffect(() => {
        fetchCollectionsStartAsync!(firebaseCtx!);
    }, []);

    {
        return (isLoading
            ? <LoadingSpinner />
            : (<div>
                {collections!.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>))
    }
}

const mapStateToProps = ({ shop: { collections, isFetching } }: IState) => ({
    collections,
    isLoading: isFetching
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchCollectionsStartAsync: (ctx: Firebase) => dispatch(fetchCollectionsStartAsync(ctx))
});


export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
