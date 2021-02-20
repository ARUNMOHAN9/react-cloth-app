import React, { useContext, useEffect } from 'react';

import './CollectionOverview.styles.scss';
import CollectionPreview from '../collectionPreview/CollectionPreview.component';
import { connect } from 'react-redux';
import { IState } from '../../../../redux/root-reducer.interface';
import { IProductCollection } from '../../../../redux/shop/shop-reducer.interface';
import { FirebaseContext } from '../../../shared/modules/firebase/services/firebase.service';
import { updateCollections } from '../../../../redux/shop/shop.actions';

interface IProps {
    collections: IProductCollection[];
    updateCollections: (collections: IProductCollection[]) => void;
}

const CollectionOverview = ({ collections, updateCollections }: IProps) => {

    const firebaseCtx = useContext(FirebaseContext);

    useEffect(() => {
        firebaseCtx?.getCollections().then(res => updateCollections(res));
    }, []);

    return (
        <div>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = ({ shop: { collections } }: IState) => ({
    collections
});

const mapDispatchToProps = (dispatch: any) => ({
    updateCollections: (collections: IProductCollection[]) => dispatch(updateCollections(collections))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
