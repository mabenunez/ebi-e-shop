import React from 'react';
import './homepage.styles.scss';

function Texts() {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>HATS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>    
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>SNEAKERS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>    
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>HATS</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>    
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>WOMAN'S</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>    
                <div className='menu-item'>
                    <div className='content'>
                        <h2 className='title'>MAN'S</h2>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Texts;