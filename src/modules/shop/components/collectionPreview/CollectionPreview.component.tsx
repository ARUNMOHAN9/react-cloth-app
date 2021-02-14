
import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem.component';



import './CollectionPreview.styles.scss';

interface IProps {
    title: string;
    items: any[]
}

const CollectionPreview = ({ title, items }: IProps) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((_, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;