import React from 'react';
import './menu-item.styles.scss';

function MenuItem({title}) {
    return (
        <div className='menu-item'>
            <div className='content'>
                <h2 className='title'>{title}</h2>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;