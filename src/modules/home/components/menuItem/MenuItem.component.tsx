import React from 'react';

import './MenuItem.styles.scss';

interface IProps {
    title: string;
    imageUrl: string;
    size?: string;
}

const MenuItemComponent = ({ title, imageUrl, size }: IProps) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItemComponent
