import React from 'react';
import StickerItem from "../StickerItem/StickerItem";
import './StickersList.css'

function StickersList({stickers, onDelete, onChange, onSave, onResize}) {
    return (
        <div className='stickers-list'>
            {stickers.map(item => {
                return <StickerItem
                    key={item.id}
                    sticker={item}
                    onDelete={onDelete}
                    onChange={onChange}
                    onSave={onSave}
                    onResize={onResize}/>
            })}
        </div>
    );
}

export default StickersList;
