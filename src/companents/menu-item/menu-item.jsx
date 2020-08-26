import React from 'react'

import './menu-item.scss'

const MenuItem = (props) => (
    <div  className={`${props.size} menu-item`}>
        <div className='background-image' style = {{
        backgroundImage : `url(${props.imageurl})`
        }}/>|
        <div className='content'>
            <h1 className='title'> {props.title}</h1>
            <span  className='subtitle'>buy my hats</span>
        </div>
    </div>
);

export default MenuItem;