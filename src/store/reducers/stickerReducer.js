import {
    ADD_NEW_STICKER,
    CHANGE_STICKER,
    DELETE_STICKER,
    SET_STICKERS_LIST,
    UPDATE_STICKER
} from "../actions/stickers";


const initialState = {
    stickersList: []
};

export default function stickers(state = initialState, {type, payload}) {
    switch (type) {
        case SET_STICKERS_LIST: return {...state, stickersList: payload};
        case  ADD_NEW_STICKER: return {...state,
            stickersList: [...state.stickersList, payload]};
        case UPDATE_STICKER: return {...state,
            stickersList: state.stickersList.map((item) => item.id === payload.id
            ? payload : item)};
        case DELETE_STICKER: return {...state,
            stickersList: state.stickersList.filter(({id}) => id !== payload)};
        case CHANGE_STICKER: return {...state,
            stickersList: state.stickersList.map((item) => item.id === payload.id
                ? payload : item)};
        default: return state;
    }
}
