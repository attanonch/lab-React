import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Attanon";
const word2 = "Computer";
const changeword = () => {
  <WordCard value={word2}/>
}


function App() {
  return (
    <div>
      <WordCard value={word}/>
      <h4>คำใบ้ : ชื่อของผู้จัดทำ</h4>
      <button
          type="button"
          className='button'
          onClick={changeword}
        >Change word</button>
    </div>
  );
}


export default App;
