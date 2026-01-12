import React, { useState } from 'react';
import './ColorBoxApp.css';

const ColorBoxApp = () => {
  const [color, setColor] = useState('#ffffff');
  const [boxes, setBoxes] = useState([]);
  const [boxSize, setBoxSize] = useState(100);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const addBox = () => {
    setBoxes([...boxes, { color, size: boxSize, locked: false }]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const toggleLock = (index) => {
    setBoxes(
      boxes.map((box, i) =>
        i === index ? { ...box, locked: !box.locked } : box
      )
    );
  };

  return (
    <div className="color-box-app">
      <h1>Color Box App</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <input
        type="range"
        min="50"
        max="200"
        value={boxSize}
        onChange={(e) => setBoxSize(Number(e.target.value))}
      />
      <span>Box Size: {boxSize}px</span>
      <button onClick={addBox}>Add Box</button>
      <div className="boxes">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`box ${box.locked ? 'locked' : ''}`}
            style={{
              backgroundColor: box.color,
              width: `${box.size}px`,
              height: `${box.size}px`,
            }}
            onClick={() => (box.locked ? null : removeBox(index))}
          >
            {box.color}
            <span
              className="lock-icon"
              onClick={(e) => {
                e.stopPropagation();
                toggleLock(index);
              }}
            >
              {box.locked ? '🔒' : '🔓'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorBoxApp;