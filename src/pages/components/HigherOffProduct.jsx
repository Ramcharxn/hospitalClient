import React, { useState } from 'react';

export default function HigherOffStockProduct(props) {
  const { product } = props;

    const handleCheck = (e) => {
        product.checked = e.target.checked
        console.log(product.checked)
        // console.log(data)
        //Insert code to change the checked to true
    }

  return (

    product.checked &&
    (
    <tr>
      <input type="checkbox" onChange={handleCheck} />
      <td>{product.medName}</td>
      <td>{product.requiredQty}</td> 
      <td>
      {/* <button onClick={() => onConfirm(product)} className="remove">
        confirm
      </button>   */}
      </td> 
    </tr>
    )
  );
}