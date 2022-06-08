import React, {useEffect, useState} from 'react'
import axios from 'axios'

import HigherOffProduct from './components/HigherOffProduct'

export default function HigherOff() {
  const [data,setData] = useState([])
  const [products,setProducts] = useState([])
  
  useEffect(() => {
    axios.post('http://localhost:5000/medRequired')
    .then(res => setData(res.data))
    .catch(err => console.log(err.message))
  },[])

  const onConfirm = () => {
 // console.log(data.filter((x) => x.checked==true))

    // console.log(data)

    // axios.post('http://localhost:5000/medRequest', { checkedData })
    //   .then(res => (setCheckedData([])))
    //   .catch(err => console.log(err.message))



    //setCartItems(cartItems.filter((x) => x._id !== product._id));
    // setData(data.filter((x) => (x._id == product._id) && product.checked == true))
    // console.log(product._id)
    // console.log(data)


    setProducts(data.filter((x) => x.checked==true))
    setData(data.filter((x) => x.checked !== true))

    axios.post('http://localhost:5000/medRequest', { products: data.filter((x) => x.checked==true) })
      .then(res => (setProducts([])))
      .catch(err => console.log(err.message))

    // setTimeout(() => onConfirmed(), 2000);
  
  };

  
  // const onConfirmed = () => {
  // console.log('halo',products)
  
  // }


  return (
    <div>

    <button type='submit' onClick={onConfirm}>click</button>
    {/* <button type='submit' onClick={onConfirmed}>clicked</button> */}

      <table>
          <tr>
            <th>Checked</th>
            <th>Name</th>
            <th>required-quantity</th>
            <th></th>
          </tr>
          
          {data.map((product) => (
              <HigherOffProduct key={product._id} product={product}></HigherOffProduct>
              // <HigherOffProduct key={product._id} product={product} onConfirm={onConfirm} ></HigherOffProduct>
          ))}

      </table>

      {console.log(data)}
    </div>
  )
}