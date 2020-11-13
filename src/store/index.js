import {applyMiddleware, createStore} from 'redux';
import stickerReducer from './reducers/stickerReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


export default createStore(stickerReducer, applyMiddleware(thunk, logger))
