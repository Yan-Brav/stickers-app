import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom'
import Header from './components/Header/Header';
import StickersList from './components/StickersList/StickersList';
import './App.css';
import {setStickers} from './store/actions/stickers';
import {connect} from 'react-redux';
import StickerForm from "./components/StickerForm/StickerForm";

function App({setStickers}) {
    useEffect(() => {
        setStickers();
    }, [setStickers]);

  return (
          <>
              <div className='App'>
                  <Header />
                  <StickersList />
              </div>
              <Route path='/add/:id'>
                  <StickerForm/>
              </Route>
              <Route path='/add'>
                  <Redirect to='/add/:id'/>
              </Route>
          </>
  );
}

const mapDispatchToProps = {
    setStickers
};

export default connect(null, mapDispatchToProps)(App);
