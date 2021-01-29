import React from 'react';
import './Menu_item.scss';

const MenuItem = ({title,image}) =>{
    return(
        <>
        <div style={{backgroundImage:`url(${image})`}} className="menu_item"  >  
            <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Order Now</span>
            </div>
            </div>
        </>
    );
}
export default MenuItem;