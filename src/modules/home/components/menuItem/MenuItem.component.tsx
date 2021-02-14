import React from 'react';

import './MenuItem.styles.scss';

interface IProps {
    title: string;
    imgUrl: string;
    size: string | undefined;
}

const MenuItemComponent = ({ title, imgUrl, size }: IProps) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{ backgroundImage: `url(${imgUrl})` }}>
            </div>
            <div className='content'>
                <div className='title'>{title}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItemComponent
