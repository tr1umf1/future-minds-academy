// eslint-disable-next-line no-unused-vars

import React from 'react'
import EmojiDesc from './main';
import emojipedia from './emoji';

function createEmoji(emoji) {
  return (
    <EmojiDesc
    key = {emoji.id}
    emoji = {emoji.emoji}
    name = {emoji.name}
    meaning = {emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>
    <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
  </div>
);
  

}

export default App;
