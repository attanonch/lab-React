import React from 'react';
import './App.css';
import WordCard from './WordCard';


var wordArray = ['Attanon', 'Computer','Java','Apple'];
var word = wordArray[Math.floor(Math.random()*wordArray.length)];

function refreshPage() {
  window.location.reload(false);
}
function App() {
  return (
    <div>
      <WordCard value={word}/>
      <h4>คำใบ้ : คำศัพท์เกี่ยวกับคอมพิวเตอร์และชื่อคนทำ</h4>
      <button
          type="button"
          className='button'
          onClick={refreshPage}
        >Change word</button>
    </div>
  );
}


export default App;
