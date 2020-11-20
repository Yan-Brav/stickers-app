import React from 'react';
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
            <div className='header'>
                <h2>Stickers</h2>
                <NavLink to='/add' className='add'>Add new</NavLink>
            </div>
    );
}

export default Header;
