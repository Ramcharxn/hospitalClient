import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { useState } from 'react';
import axios from 'axios'
function PaymentMain() {

  const[ products, setProducts ] =  useState([])
  const[ medName, setMedName ] =  useState('')
  const[ service, setService ] =  useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getMed',{medName})
    .then(res => setProducts(arr => [...arr,res.data[0]]))

    setMedName('')
  }

  console.log(products)

 
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
  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input type="text" value={medName} onChange={e => setMedName(e.target.value)} />
        <button type="submit">search</button>
      </form>

      {/* <Header countCartItems={cartItems.length}></Header> */}
      <select value={service} onChange={e => setService(e.target.value)}>
        <option value="0">None</option>
        <option value="10">Transport</option>
        <option value="20">staff</option>
        <option value="30">HOD</option>
        <option value="40">student</option>
      </select>

      {console.log(service)}


      <div className="row">
        <Main products={products} discount={service} onAdd={onAdd} onRemove={onRemove} ></Main>
        <Basket
          discount={service}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default PaymentMain;
