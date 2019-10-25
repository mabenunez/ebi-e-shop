import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <section>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => {
                        return (
                            <div key={item.id}>{item.name}</div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default CollectionPreview;