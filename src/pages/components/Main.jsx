import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd, onRemove, discount } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product._id} onRemove={onRemove} discount={discount} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
