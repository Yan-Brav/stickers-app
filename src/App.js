import React, {useEffect} from 'react';
import Header from './components/Header/Header';
import StickersList from './components/StickersList/StickersList';
import './App.css';
import {setStickers} from './store/actions/stickers';
import {connect} from 'react-redux';

function App({setStickers}) {
    useEffect(() => {
        console.log('Get and set stickers');
        setStickers();
    }, [setStickers]);

  return (
    <div className='App'>
      <Header />
      <StickersList />
    </div>
  );
}

const mapDispatchToProps = {
    setStickers
};

export default connect(null, mapDispatchToProps)(App);
