// src/App.js
import React, { useState } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

const products = [
  { id: 1, name: 'Apple iPhone', price: 999 },
  { id: 2, name: 'Samsung TV', price: 1299 },
  { id: 3, name: 'Sony Headphones', price: 299 },
  { id: 4, name: 'Nike Shoes', price: 99 },
  { id: 5, name: 'Adidas Shirt', price: 49 },
];

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ color: '#333' }}>Shopping Cart App</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;