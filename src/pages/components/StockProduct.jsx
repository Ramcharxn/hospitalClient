import React, { useState } from 'react';

export default function StockProduct(props) {
  const { product, onAdd, onRemove, discount, onRequest } = props;
  const [quantity, setQuantity] = useState('')
  //const [requestQuantity, setRequestQuantity] = useState(0)

  return (
    <tr>
      <td>{product.medName}</td>
      <td>{product.expDate.split('T')[0].split("-").reverse().join("-")}</td>
      <td>{product.quantity}</td> 
      <td>
        {/* <input type="number" min="0" onChange={e=> setRequestQuantity(e.target.value)}/> */}
        <input required min='0' className='ProdInputBox' type="number" onChange={e => (onAdd(product, e.target.value), onRequest)} />
        {/* <input type="number" min="0" onChange={onRequest}/> */}
      </td>

      <td>
      <button onClick={() => onRemove(product)} className="remove">
        x
      </button>  
      </td>   
    </tr>
  );
}
