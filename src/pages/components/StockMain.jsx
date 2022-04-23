import React from 'react';
import StockProduct from './StockProduct';

export default function StockMain(props) {
  const { products, onAdd, onRemove, discount, onRequest } = props;
  return (
      <div className="TableBlock">
        <table>
          <tr>
            <th>Name</th>
            <th>expireDate</th>
            <th>quantity</th>
            <th>required</th>
            <th></th>
          </tr>
          
          {products.map((product) => (
              <StockProduct key={product._id} onRemove={onRemove} discount={discount} product={product} onAdd={onAdd} onRequest={onRequest}></StockProduct>
          ))}
        </table>
      </div>
  );
}