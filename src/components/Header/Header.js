import React from 'react';
import './Header.css'

function Header({onAddBtnClick}) {
    return (
        <div className='header'>
            <h2>Stickers</h2>
            <button className='add' onClick={onAddBtnClick}>Add new</button>
        </div>
    );
}

export default Header;
