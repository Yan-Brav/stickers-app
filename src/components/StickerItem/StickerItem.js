import React from 'react';
import './StickerItem.css'

function StickerItem({sticker, onChange, onDelete, onSave}) {
    let startPosition = {
        x: 0,
        y: 0
    };

    let styles = {
        position: 'absolute',
        border: 'solid red 1px',
        backgroundColor: 'antiquewhite',
        width: 'auto',
        height: 'auto',
        top: sticker.y,
        left: sticker.x,
        resize: 'both'
    };

    function onChangeValue(event) {
        onChange({
            ...sticker,
            [event.target.name]: event.target.value
        })
    }

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
                <span id='drag'
                      onMouseDown={drag}
                      onMouseUp={() => onSave(sticker)}>
                    <i className="fa fa-arrows"/>
                </span>
                <span id='empty'> </span>
                <span id='edit'><i className='fa fa-pencil'/></span>
                <span id='delete' onClick={() => onDelete(sticker)}><i className='fa fa-trash-o'/></span>
            </div>
            <div className='description'>
                <textarea
                    name='description'
                    value={sticker.description}
                    onChange={onChangeValue}
                    onBlur={() => onSave(sticker)}
                    />
            </div>
        </div>
    );
}

export default StickerItem;
