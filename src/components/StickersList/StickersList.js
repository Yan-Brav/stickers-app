import React from 'react';
import StickerItem from "../StickerItem/StickerItem";
import './StickersList.css'

function StickersList({stickers, onDelete, onChange, onSave}) {
    return (
        <div className='stickers-list'>
            {stickers.map(item => {
                return <StickerItem
                    key={item.id}
                    sticker={item}
                    onDelete={onDelete}
                    onChange={onChange}
                    onSave={onSave}/>
            })}
        </div>
    );
}

export default StickersList;
