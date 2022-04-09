import React, { useState } from 'react';

export default function ReturnProduct(props) {
  var { product, service } = props;
  const [returnQuantity, setReturnQuantity] = useState(0)

    product.returnQuantity = returnQuantity
   product.returnAmount = (returnQuantity*product.price) - (returnQuantity*product.price * service /100)
   console.log(product.returnQuantity)
//     console.log('total',total)
//   const handleReturnQuantity =(e) =>{
//     setReturnQuantity(e.target.value)
//     setTotal((returnQuantity*product.price))
//     // console.log("returnQuantity: ",returnQuantity)
//     // console.log('total: ',total)
//   }


  return (
    <tr>
      <td>{product.medName}</td>
      <td>{product.MRP}rs</td>
      <td>{product.tax}rs</td>

      <td>{product.expDate.split('T')[0].split("-").reverse().join("-")}</td>
      <td>{product.qty}</td>
      <td>{product.price}rs</td>
      <td>{service}%</td>
      <td>{product.price - (product.price * service / 100)}rs</td>
      <td>{((product.price - (product.price * service / 100))*parseInt(product.qty)).toFixed(2)}rs</td>

      {/* <td>{product.price * product.quantity}</td> */}

      <td>
        <input required min="0" max={product.qty} className='ProdInputBox' type="number" value={returnQuantity} onChange={e => setReturnQuantity(e.target.value)} />
        { parseInt(product.qty) < returnQuantity ? <p>return qty higher than purchased</p> : null }
        {/* <input type="number" id="quantity" name="quantity" min="1" max="5" /> */}
      </td>

      <td>{(returnQuantity*product.price) - (returnQuantity*product.price * service /100)}</td>    
    </tr>

  );
}