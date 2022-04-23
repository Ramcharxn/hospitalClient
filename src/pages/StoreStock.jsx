// import Header from './components/Header';
import StockMain from './components/StockMain';
import Basket from './components/Basket';
import { useState, useEffect } from 'react';
import axios from 'axios'
function StoreStock({ UID, onSub, error }) {

  const [requestQuantity, setRequestQuantity] = useState(0)

  const [products, setProducts] = useState([])
  const [medName, setMedName] = useState('')
  const [status, setStatus] = useState('')
  const [cartItems, setCartItems] = useState([]);
  const [allMed, setAllMed] = useState([]);
  const [display, setDisplay] = useState(false)

  const [quantityFilter, setQuantityFilter] = useState(0)
  // const [expDateFilter, setExpDateFilter] = useState('')
  // const [applyFilter, setApplyFilter] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/getAllMed')
      .then(res => setAllMed(res.data))
      .catch(err => console.log(err.message))
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getMed', { medName })
      .then(res => (
        res.data === 'No such medicine' ? error(res.data) : setProducts(arr => [...arr, res.data[0]])
      ))
    setMedName('')
  }

  console.log('PRODUCTS',products)
  console.log("ALL MEDICINE: ",allMed)
  console.log("onRequest", requestQuantity)

  const onAdd = (product, addVal) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, requiredQty: addVal } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, requiredQty: 1 }]);
    }
  };

  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x._id !== product._id));
    setProducts(products.filter((x) => x._id !== product._id))
  };

  console.log('cartItems', cartItems)
  

  const medRequest = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/medRequest', { cartItems })
      .then(res => ( setCartItems([]), setStatus(res.data) ))
      .catch(err => console.log(err.message))
  }

  // const handleFilter = () => {
  //   setApplyFilter(true)
  // }


  // const handleRequest = (e) => {
  //   e.preventDefault()

  //   axios.post('http://localhost:5000/medicine',{medName, expDate, quantity, MRP, tax, price: parseFloat(MRP)+parseFloat(tax)})
  //   .then(
  //     setMedName(''),
  //     setExpDate(''),
  //     setQuantity(0),
  //     setMRP(0),
  //     setTax(0),
  //     setPrice(0),
  //   )
  //   .catch(err => console.log(err.message))
  // }

  const onRequest = (e) => {
    console.log("lollll",e.target.value);
    setRequestQuantity(e.target.value)
  };

  console.log('cartItems',cartItems)


  return (
      <div >

    <div className="PaymentMain">
      <div style ={{width:'50vw',backgroundColor:'green'}} className='Block1'>
        <form>
        <div>
          <input
            placeholder='Medicine Name'
            type="text" value={medName}
            onChange={e => setMedName(e.target.value)}
            onClick={() => setDisplay(!display)}
          />

{
            medName == '' && display && quantityFilter!=0 && 
              <div>
                {
                allMed.map((m, i) => {
                if (m.quantity<quantityFilter && i<5) {

                  return <div
                    onClick={() => ( setMedName(m.medName), setDisplay(!display) )}
                    key={i}
                  >
                    <span>{m.medName}</span>
                  </div>
                }
              }
              )
              
              }
              </div>

}


        {
            medName == '' && display && quantityFilter==0 &&
              <div>
                {
                allMed.map((m, i) => {
                if (m.medName.includes(medName) && i<5) {

                  return <div
                    onClick={() => ( setMedName(m.medName), setDisplay(!display) )}
                    key={i}
                  >
                    <span>{m.medName}</span>
                  </div>
                }
              }
              )
              
              }
              </div>

          }


          {
            medName !== '' && display && quantityFilter==0 &&
              <div>
                {allMed.map((m, i) => {
                if (m.medName.includes(medName) && i<5) {
                  return <div
                    onClick={() => ( setMedName(m.medName), setDisplay(!display) )}
                    key={i}
                  >
                    <span>{m.medName}</span>
                  </div>
                }
              }
              )}
              </div>
          }




        </div>
          <button className='btn' type="submit" onClick={handleSubmit}>search</button>
        </form>
      </div>

      <label>Quantity Filter</label>
      <input type="number" min="0" onChange={e=> setQuantityFilter(e.target.value)}/>

      {/* <input type="date" placeholder='expDate' value={expDateFilter} onChange={e => setExpDateFilter(e.target.value)} />
 
      <button className='btn' type="submit" onClick={handleFilter}>Apply Filter</button> */}

      <form style ={{width:'50vw',backgroundColor:'yellow'}} onSubmit={medRequest}>
        <div className="row">
          <StockMain products={products} onAdd={onAdd} onRemove={onRemove} onRequest={onRequest} ></StockMain>
        </div>
        <button className='btn' type="submit">Request</button>
      </form>


    </div>

      {status}

    </div>
  );
}

export default StoreStock;