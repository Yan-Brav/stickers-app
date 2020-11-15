import React from 'react';
import StickerItem from '../StickerItem/StickerItem';
import './StickersList.css'
import {connect} from 'react-redux';

function StickersList({stickersList}) {

    return (
        <div className='stickers-list'>
            {stickersList.map(item => {
                return <StickerItem
                    key={item.id}
                    sticker={item} />
            })}
        </div>
    );
}

const mapStateToProps = ({stickersList}) => ({stickersList});

export default connect(mapStateToProps)(StickersList);
