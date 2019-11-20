import React from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/preview-collection/CollectionPreview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map( collection => {
                    return (
                        <CollectionPreview 
                            key={collection.id}
                            title={collection.title}
                            items={collection.items}
                        />
                    )
                })}
            </div>
        )
    }
}

export default ShopPage;