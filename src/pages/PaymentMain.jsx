// import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { useState } from 'react';
import axios from 'axios'
function PaymentMain({ UID, onSub, error }) {

  const[ products, setProducts ] =  useState([])
  const[ medName, setMedName ] =  useState('')
  const[ service, setService ] =  useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getMed',{medName})
    // .then(res => setProducts(arr => [...arr,res.data[0]]))
    .then(res => (
      res.data === 'No such medicine' ? error(res.data) : setProducts(arr => [...arr,res.data[0]])
    ))

    setMedName('')
  }

  console.log(products)
  console.log(UID)

  const [cartItems, setCartItems] = useState([]);

 

  const onAdd = (product, addVal) => {
    // e.preventDefault()
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: addVal } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    // const exist = cartItems.find((x) => x._id === product._id);
    setCartItems(cartItems.filter((x) => x._id !== product._id));
    setProducts(products.filter((x) => x._id !== product._id))
  };

  console.log('cartItems',cartItems)

  const MedDetails = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/checkout',{UID, cartItems, service})
    .then(res => (error(res.data), onSub()))
    .catch(err => console.log(err.message))

    
  }


  return (
    <div className="PaymentMain">

      {/* <div className="inputBoxArea"></div> */}

      {/* <h1>UID : {UID}</h1> */}

      <div className='Block1'>
      <form onSubmit={handleSubmit}>
        <input placeholder='Medicine Name' type="text" value={medName} onChange={e => setMedName(e.target.value)} />
        <button className='btn' type="submit">search</button>
      </form>

      <Basket
        discount={service}
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></Basket>
      </div>

      {/* <Header countCartItems={cartItems.length}></Header> */}

      <form onSubmit={MedDetails}>
        <label>Service : </label>
        <select className='selectBox' value={service} onChange={e => setService(e.target.value)}>
          <option value="0">None</option>
          <option value="10">Transport</option>
          <option value="20">staff</option>
          <option value="30">HOD</option>
          <option value="40">student</option>
        </select>

        {console.log(service)}


        <div className="row">
          <Main products={products} discount={service} onAdd={onAdd} onRemove={onRemove} ></Main>
        </div>
        
        <button className='btn' type="submit">CheckOut</button>
      </form>

      
    </div>
  );
}

export default PaymentMain;
