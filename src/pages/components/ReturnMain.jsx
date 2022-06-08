import React, { useState } from 'react'
import ReturnProduct from './ReturnProduct';

export default function ReturnMain(props) {

    const [addition, setAddition] = useState(0)
    const { medArray } = props;

  console.log("Cartitems medArray: ", medArray.cartItems)
  console.log("Cartitems medArray: ", medArray.service)

  const handleSubmit = (e) => {
      e.preventDefault()
        setAddition(0)
        medArray.cartItems.map(product => {
            console.log('product',product.returnAmount)
            console.log('sum',addition)
            setAddition(addition => (addition + product.returnAmount))
        })
  }

  return (
  <div>
   
   <div className="col">
      <table>
      <tr>
            <th>Name....</th>
            <th>MRP....</th>
            <th>tax.....</th>
            <th>expireDate...</th>
            <th>quantity purchased...</th>
            <th>price...</th>
            <th>batch...</th>
            <th>discount...</th>
            <th>price after discount...</th>
            <th>Item Cost....</th>
            {/* <th>discount</th>
            <th>After discount</th> */}
            <th>Return Quantity....</th>
            <th>Amount to Return....</th>
            <th></th>
          </tr>

          {medArray.cartItems.map((product, i) => (
              <ReturnProduct key={product._id} product={product} ></ReturnProduct>
          ))}

          

        </table> 

        <form onSubmit={handleSubmit}>
              <button type="submit">check Sum</button>
        </form>

        <h1>{addition.toFixed(2)}</h1>
    </div>

</div> 
)

  
}

