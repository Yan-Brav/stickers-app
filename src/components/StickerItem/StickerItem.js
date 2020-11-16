import React from 'react';
import './StickerItem.css'
import {connect} from 'react-redux';
import {changeSticker, deleteSticker, saveSticker} from '../../store/actions/stickers';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import StickerForm from '../StickerForm/StickerForm';

function StickerItem({sticker, deleteSticker, saveSticker, changeSticker}) {
    let startPosition = {
        x: 0,
        y: 0
    };

    let styles = {
        position: 'absolute',
        border: 'solid red 1px',
        backgroundColor: 'antiquewhite',
        width: '150px',
        height: '50%',
        top: sticker.y,
        left: sticker.x,
        resize: 'both'
    };


    function drag(event) {
        startPosition = {
            x: event.clientX,
            y: event.clientY
        };
        document.addEventListener('mousemove', startMove);
        document.addEventListener('mouseup', stopMove);
    }

    function startMove(event) {
        const {x, y} = sticker;
        changeSticker({
            ...sticker,
            x: x + (event.clientX - startPosition.x),
            y: y + (event.clientY - startPosition.y)
        });
    }

    function stopMove() {
        document.removeEventListener('mousemove', startMove);
        document.removeEventListener('mouseup', stopMove);

    }

    return (
        <div className='sticker'
                style={styles}>
            <div className='head'>
                <span id='drag'
                      onMouseDown={drag}
                      onMouseUp={() => saveSticker(sticker)}>
                    <i className="fa fa-arrows"/>
                </span>
                <span id='empty'> </span>
                <Router>
                    <NavLink to={`/add/${sticker.id}`}>
                        <span id='edit'>
                            <i className='fa fa-pencil'/>
                        </span>
                    </NavLink>
                    <Switch>
                        <Route path={`/add/:id`}>
                            <StickerForm/>
                        </Route>
                    </Switch>
                </Router>

                <span id='delete'
                      onClick={() => deleteSticker(sticker.id)}>
                    <i className='fa fa-trash-o'/>
                </span>
            </div>
            <div className='title'>
                <p>{sticker.title}</p>
            </div>
            <div className='description'>
                <p>{sticker.description}</p>
            </div>
        </div>
    );
}


const mapDispatchToProps = {
    deleteSticker,
    saveSticker,
    changeSticker
};

export default connect(null, mapDispatchToProps)(StickerItem);
