import React from 'react';
import StockProduct from './StockProduct';

export default function StockMain(props) {
  const { products, onRemove, discount, onRequest } = props;
  return (
      <div className="StoreMain">
        <table>
          <tr>
            <th>emergency</th>
            <th>Name</th>
            <th>Batch</th>
            <th>expire Date</th>
            <th>quantity</th>
            <th>required</th>
            <th></th>
          </tr>

          {console.log('products',products)}
          
          {products.map((product) => (
              <StockProduct key={product._id} onRemove={onRemove} discount={discount} product={product} onRequest={onRequest}></StockProduct>
          ))}
        </table>
      </div>
  );
}