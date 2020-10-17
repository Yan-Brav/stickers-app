import React from 'react';
import './StickerItem.css'

function StickerItem({sticker, onChange, onDelete, onSave}) {
    let startPosition = {
        x: 0,
        y: 0
    };

    const styles = {
        position: 'absolute',
        border: 'solid red 1px',
        backgroundColor: 'antiquewhite',
        width: '200px',
        height: '200px',
        top: sticker.y,
        left: sticker.x
    };

    function onChangeValue(event) {
        onChange({
            ...sticker,
            [event.target.name]: event.target.value
        })
    }

    function startDrag(event) {
        startPosition = {
            x: event.clientX,
            y: event.clientY
        };
        document.addEventListener('mousemove', startMove);
        document.addEventListener('mouseup', stopMove);
    }

    function startMove(event) {
        const {x, y} = sticker;
        onChange({
            ...sticker,
            x: x + (event.clientX - startPosition.x),
            y: y + (event.clientY - startPosition.y)
        })
    }

    function stopMove() {
        document.removeEventListener('mousemove', startMove);
        document.removeEventListener('mouseup', stopMove);
    }

    return (
        <div className='sticker'
                style={styles}>
            <div className='head'>
                <span id='drag' onMouseDown={startDrag}>O</span>
                <span id='delete' onClick={() => onDelete(sticker)}>X</span>
            </div>
            <div className='description'>
                <textarea
                    name='description'
                    value={sticker.description}
                    onChange={onChangeValue}
                    />
            </div>
            <div>
                <button className='save' onClick={() => onSave(sticker)}>Save</button>
            </div>
        </div>
    );
}

export default StickerItem;
