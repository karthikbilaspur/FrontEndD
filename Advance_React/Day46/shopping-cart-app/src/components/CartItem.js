// src/components/CartItem.js
import React from 'react';
import { motion } from 'framer-motion';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      style={{
        width: 200,
        height: 50,
        backgroundColor: '#f0f0f0',
        margin: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <span>{item.name}</span>
      <button
        onClick={() => onRemoveFromCart(item.id)}
        style={{
          backgroundColor: '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          fontSize: 14,
          borderRadius: 5,
          cursor: 'pointer',
        }}
      >
        Remove
      </button>
    </motion.div>
  );
};

export default CartItem;