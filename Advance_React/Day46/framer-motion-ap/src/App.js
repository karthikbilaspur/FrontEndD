// src/App.js
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const handleAddItem = () => {
    setItems([...items, items.length + 1]);
  };

  const handleRemoveItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ color: '#333' }}>Framer Motion Example</h1>
      <button
        onClick={handleAddItem}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          fontSize: 16,
          borderRadius: 5,
          cursor: 'pointer',
          marginRight: 10,
        }}
      >
        Add Item
      </button>
      <button
        onClick={handleRemoveItem}
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          fontSize: 16,
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Remove Item
      </button>
      <AnimatePresence>
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              delay: index * 0.1,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
            drag
            style={{
              width: 200,
              height: 50,
              backgroundColor: '#007bff',
              margin: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              borderRadius: 5,
              cursor: 'grab',
            }}
          >
            Item {item}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default App;