// src/components/ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;