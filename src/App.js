import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import StickersList from "./components/StickersList/StickersList";
import stickersService from './stickers-service'
import './App.css';

function createNewSticker() {
    return {
        description: '',
        width: 200,
        height: 200,
        x: 5,
        y: 5
    };
}

function App() {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    console.log('stickers are loaded');
    stickersService.get('/')
        .then(({data}) => {setStickers(data)});
  }, []);

  function addNewSticker() {
      console.log('The new sticker is added');
      stickersService.post('/', createNewSticker())
          .then(({data}) => setStickers([...stickers, data]))
  }

  function editSticker(sticker) {
      stickersService.put('/' + sticker.id, sticker)
          .then(() => console.log('sticker is updated'))
          .catch((er) => console.log(er))
  }

  function deleteStickerFromServer(sticker) {
      stickersService.delete('/' + sticker.id)
          .then(() => console.log('sticker is deleted'))
          .catch((er) => console.log(er))
  }

  function updateSticker(sticker) {
      setStickers(stickers.map((item) => item.id === sticker.id
                    ? sticker : item));
  }

  function deleteSticker(sticker) {
      deleteStickerFromServer(sticker);
      setStickers(
          stickers.filter((item) => item !== sticker)
      )
  }

  function saveSticker(sticker) {
      editSticker(sticker);

  }

  return (
    <div className="App">
      <Header onAddBtnClick={addNewSticker}/>
      <StickersList
          stickers={stickers}
          onChange={updateSticker}
          onDelete={deleteSticker}
          onSave={saveSticker} />
    </div>
  );
}

export default App;
