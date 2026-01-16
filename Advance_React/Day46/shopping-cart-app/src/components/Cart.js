// src/components/Cart.js
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <AnimatePresence>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Cart;