import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import './Header.css'
import StickerForm from '../StickerForm/StickerForm';

function Header() {
    return (
        <Router>
            <div className='header'>
                <h2>Stickers</h2>
                <NavLink to='/add' className='add'>Add new</NavLink>
            </div>
            <Switch>
                <Route exact path='/add'>
                    <StickerForm/>
                </Route>
            </Switch>
        </Router>

    );
}

export default Header;
