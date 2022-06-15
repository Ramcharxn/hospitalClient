import React, { useState } from 'react';

export default function Product(props) {
  const { product, onAdd, onRemove, service, disVal } = props;
  const [quantity, setQuantity] = useState('')
  
  // var discount = service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0
  var cost = quantity ? quantity * product.price.toFixed(2) : 0

  product.discount = service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0

  console.log('discount',service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0)
  
  // disVal(service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0)
  


  // const discountFunc = (e) => {
  //   // onAdd(product, e.target.value)
  //   // setQuantity(e.target.value)
    
  //   console.log('#####################################',discount)

  //   if(quantity * product.price.toFixed(2) > 1000 && service !== "None"){
  //     setDiscount(20)
  //   } else if(quantity * product.price.toFixed(2) > 100 && service !== "None") {
  //     setDiscount(10)
  //   } else {
  //     setDiscount(0)
  //   }

  //   disVal(discount)
  // }

  return (
    <tr>
      {/* <img className="small" src={product.image} alt={product.name} /> */}
      <td>{product.medName}</td>
      <td>{product.MRP}rs</td>
      <td>{product.tax}rs</td>

      <td>{product.batch}</td>
      
      <td>{product.expDate.split('T')[0].split("-").reverse().join("-")}</td>
      <td>{product.quantity}</td>
      <td>{product.price}rs</td>
            {/* <div className="col-2">{product.medName}</div> */}
              
      <td>
        <input required max={product.quantity} min='0' className='ProdInputBox' type="number" onChange={e => ((onAdd(product, e.target.value, service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0), setQuantity(e.target.value)), product.qty = e.target.value)} />
      </td>
            
              {/* <button onClick={() => onAdd(item)} className="add">
                +
              </button> */}
              

      <td className="col-2 text-right">
        {cost}rs
      </td>
            
      <td>{service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0}%</td>
      <td>{product.cost = ((quantity * product.price) - [(quantity * product.price)*(service !== "None" ? cost > 100 ? cost > 1000 ? 20 : 10 : 0 : 0)/100]).toFixed(2)}rs</td>
          
      <td>
      <button style={{ cursor: 'pointer' }} onClick={() => onRemove(product)} className="remove">
        x
      </button>  
      </td>   

        {/* <button onClick={() => onAdd(product)}>Add To Cart</button> */}
      
    </tr>
  );
}

