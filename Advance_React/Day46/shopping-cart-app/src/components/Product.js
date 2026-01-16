// src/components/Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <li style={{ marginBottom: 10 }}>
      <span>{product.name} - ${product.price}</span>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          fontSize: 14,
          borderRadius: 5,
          cursor: 'pointer',
          marginLeft: 10,
        }}
      >
        Add to Cart
      </button>
    </li>
  );
};

export default Product;