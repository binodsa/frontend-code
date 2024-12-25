import React, { useState } from 'react';
import Happy from './Happy.png';
import Sad from './Sad.png';
import Like from './Like.png';

function DynamicEmoji() {
  const [emoji, setEmoji] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "happy") setEmoji(Happy);
    else if (value === "like") setEmoji(Like);
    else if (value === "sad") setEmoji(Sad);
    else setEmoji("");
  };

  return (
    <div className="App">
      <input type="text" placeholder="Type here..." onChange={handleInputChange} />
      <label>
        {emoji ? <img src={emoji} alt="emoji" /> : "No emoji to display"}
      </label>
    </div>
  );
}

export default DynamicEmoji;