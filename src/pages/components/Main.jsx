import React, { useRef, useState } from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd, disVal, onRemove, service } = props;
  const [total, setTotal] = useState(0)

  return (
      <div className="TableBlock">
        <table>
          <tr>
            <th>Name</th>
            <th>MRP</th>
            <th>tax</th>
            <th>Batch</th>
            <th>expireDate</th>
            <th>quantity</th>
            <th>price</th>
            <th>required</th>
            <th>Item Cost</th>
            <th>discount</th>
            <th>After discount</th>
            <th></th>
          </tr>

          {console.log('main',products[0])}
          
          {products.map((product) => (
              <Product key={product._id} onRemove={onRemove} service={service} disVal={disVal} product={product} onAdd={onAdd}></Product>
          ))}

          {
            products.map(product => {
              console.log('product cost',product.cost)
            })
          }

          {/* {totalPrice} */}

        </table>
      </div>
  );
}
