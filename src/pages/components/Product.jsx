import React, { useEffect, useState } from 'react';

export default function Product(props) {
  const { product, onAdd, onRemove, discount } = props;
  const [quantity, setQuantity] = useState('')

  return (
    <div>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <h3>Name : {product.medName}</h3>
      <div>MRP : {product.MRP}rs</div>
      <div>tax : {product.tax}rs</div>
      <div>expDate : {product.expDate}</div>
      <div>quantity : {product.quantity}</div>
      <div>price : {product.price}rs</div>
      <div>
        <div key={product.id} className="row">
            <div className="col-2">{product.medName}</div>
            <div className="col-2">
              <button onClick={() => onRemove(product)} className="remove">
                delete
              </button>{' '}
                <input type="number" onChange={e => (onAdd(product, e.target.value), setQuantity(e.target.value))} />
            
              {/* <button onClick={() => onAdd(item)} className="add">
                +
              </button> */}
              
            </div>

            <div className="col-2 text-right">
              {quantity ? quantity : 0 } x {product.price.toFixed(2)}rs = {quantity ? quantity * product.price.toFixed(2) : 0}rs
            </div>
            
            <div>
            <p>discount percent : {discount}%</p>
            <p>price after discount : {((quantity * product.price) - [(quantity * product.price)*discount/100]).toFixed(2)}rs</p>
            </div> 
            

          </div>
        {/* <button onClick={() => onAdd(product)}>Add To Cart</button> */}
      </div>
    </div>
  );
}
