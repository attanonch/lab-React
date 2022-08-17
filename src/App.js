import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Attanon";
const word2 = "Computer";
const changeword = () => {
  const word2 = word;
}

function App() {
  return (
    <div>
      <WordCard value={word}/>
      <h4>คำใบ้ : ชื่อของผู้จัดทำ</h4>
    </div>
  );
}


export default App;
