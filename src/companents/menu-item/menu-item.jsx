import React from 'react'

import './menu-item.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({size, imageUrl, title, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} 
        onClick = {() => history.push(`${match.url}${linkUrl}`)}>

        <div className='background-image' style = {{
        backgroundImage : `url(${imageUrl})`
        }}/>|
        <div className='content'>
            <h1 className='title'> {title}</h1>
            <span  className='subtitle'>buy my hats</span>
        </div>
    </div>
);

export default withRouter(MenuItem);