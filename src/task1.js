import React, { useState } from 'react';
import './task1.css'; // Import the CSS file

function Task1() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const countWords = () => {
    const words = text.trim().split(/\b[a-zA-Z]+/);
    return words.length-1;
  };

  const countCharacters = () => {
    return text.length;
  };

  const handleClear = () => {
    setText('');
  };

  // Determine if the word counter should be visible
  const isCounterVisible = text.trim().length > 0;

  return (
    <div className="word-counter-container">
      <h1>Word Counter</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type..."
        rows={5}
      />
      {isCounterVisible && (
        <div className="counters">
          <div>
            <span>Word count:</span>
            <span className="counter">{countWords()}</span>
          </div>
          <div>
            <span>Character count:</span>
            <span className="counter">{countCharacters()}</span>
          </div>
        </div>
      )}
      <button className="clear-button" onClick={handleClear}>
        Reset
      </button>
    </div>
  );
}

export default Task1;