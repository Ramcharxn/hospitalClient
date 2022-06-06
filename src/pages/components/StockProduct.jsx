import React, { useState } from 'react';

export default function StockProduct(props) {
  const { product, onRemove, discount, onRequest } = props;
  const [quantity, setQuantity] = useState('')
  //const [requestQuantity, setRequestQuantity] = useState(0)
product.checked = false
const handleClick = (e) => {
  product.checked = e.target.checked
  console.log(product.checked)
}

  return (
    <tr>
      <td><input className='CheckBox' type="checkbox" onClick={handleClick} /></td>
      <td>{product.medName}</td>
      <td>{product.batch}</td>
      <td>{product.expDate.split('T')[0].split("-").reverse().join("-")}</td>
      <td>{product.quantity}</td> 
      <td>
        {/* <input type="number" min="0" onChange={e=> setRequestQuantity(e.target.value)}/> */}
        <input required min='0' className='InputBox' type="number" onChange={e => (product.requiredQty = e.target.value)} />
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
