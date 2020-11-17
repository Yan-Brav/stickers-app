import api from '../../stickers-service'

export const SET_STICKERS_LIST = 'SET_STICKERS_LIST';
export const setStickers = () => async (dispatch) => {
    const {data} = await api.get('/');
    dispatch({
        type: SET_STICKERS_LIST,
        payload: data
    })
};

export const DELETE_STICKER = 'DELETE_STICKER';
export const deleteSticker = (id) => async (dispatch) => {
    await api.delete('/' + id);
    dispatch({
        type: DELETE_STICKER,
        payload: id
    })
};

export const saveSticker = (sticker) => (dispatch) => {
    sticker.id ? updateSticker(sticker, dispatch) : addSticker(sticker, dispatch);
};

export const ADD_NEW_STICKER = 'ADD_NEW_STICKER';
const addSticker = (sticker, dispatch) => {
    api.post('/', sticker)
        .then(({data}) => dispatch({type: ADD_NEW_STICKER, payload: data}))
};

export const  UPDATE_STICKER = 'UPDATE_STICKER';
const updateSticker = (sticker, dispatch) => {
    api.put(`/${sticker.id}`, sticker)
        .then(({data}) => dispatch({type: UPDATE_STICKER, payload: data}))
};


export const  CHANGE_STICKER = 'CHANGE_STICKER';
export const changeSticker = (sticker) => {
    return {
        type: CHANGE_STICKER,
        payload: sticker
    }
};


