import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <section className='preview'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, name, price, imageUrl}) => {
                        return (
                            <CollectionItem
                                key={id}
                                price={price}
                                imageUrl={imageUrl}
                                name={name}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default CollectionPreview;