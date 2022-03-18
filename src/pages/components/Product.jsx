import React, { useEffect, useState } from 'react';

export default function Product(props) {
  const { product, onAdd, onRemove, discount } = props;
  const [quantity, setQuantity] = useState('')

  return (
    <tr>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <td>{product.medName}</td>
      <td>{product.MRP}rs</td>
      <td>{product.tax}rs</td>
      
      <td>{product.expDate.split('T')[0].split("-").reverse().join("-")}</td>
      <td>{product.quantity}</td>
      <td>{product.price}rs</td>
            {/* <div className="col-2">{product.medName}</div> */}
              
      <td>
        <input required min='0' className='ProdInputBox' type="number" onChange={e => (onAdd(product, e.target.value), setQuantity(e.target.value))} />
      </td>
            
              {/* <button onClick={() => onAdd(item)} className="add">
                +
              </button> */}
              

      <td className="col-2 text-right">
        {quantity ? quantity * product.price.toFixed(2) : 0}rs
      </td>
            
      <td>{discount}%</td>
      <td>{((quantity * product.price) - [(quantity * product.price)*discount/100]).toFixed(2)}rs</td>
          
      <td>
      <button onClick={() => onRemove(product)} className="remove">
        x
      </button>  
      </td>   

        {/* <button onClick={() => onAdd(product)}>Add To Cart</button> */}
      
    </tr>
  );
}

