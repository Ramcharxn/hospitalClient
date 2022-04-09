// import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios'
function PaymentMain({ UID, onSub, error }) {

  const [products, setProducts] = useState([])
  const [medName, setMedName] = useState('')
  const [service, setService] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  const [allMed, setAllMed] = useState([]);
  const [display, setDisplay] = useState(false)

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  useEffect(() => {
    axios.get('http://localhost:5000/getAllMed')
      .then(res => setAllMed(res.data))
      .catch(err => console.log(err.message))
  }, []);

  console.log('all medsss', allMed)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getMed', { medName })
      // .then(res => setProducts(arr => [...arr,res.data[0]]))
      .then(res => (
        res.data === 'No such medicine' ? error(res.data) : setProducts(arr => [...arr, res.data[0]])
      ))

    setMedName('')
  }

  console.log(products)
  console.log(UID)


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

  console.log('cartItems', cartItems)

  const MedDetails = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/checkout', { UID, cartItems, service })
      .then(res => (error(res.data), onSub()))
      .catch(err => console.log(err.message))


  }


  return (
    <div className="PaymentMain">

      {/* <div className="inputBoxArea"></div> */}

      {/* <h1>UID : {UID}</h1> */}

      <div className='Block1'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder='Medicine Name'
              type="text" value={medName}
              onChange={e => setMedName(e.target.value)}
              onClick={() => setDisplay(!display)}
            // onClick={setDisplay(!display)}
            />

            {console.log('medNameeeeeeeee', medName)}
            {
              medName !== '' && display &&
              // <select className='selectBox' value={medName} onChange={e => setMedName(e.target.value)}>
              <div>
                {allMed.map((m, i) => {
                  if (m.medName.includes(medName)) {
                    // if(m.medName.startsWith(medName)){
                    return <div
                      onClick={() => (setMedName(m.medName), setDisplay(!display))}
                      key={i}
                    >
                      <p style={{ cursor: 'pointer' }}>{m.medName}</p>
                    </div>
                  }
                }
                )}
              </div>

            }

          </div>

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
        
        <div ref={componentRef} className="row">
          <Main products={products} discount={service} onAdd={onAdd} onRemove={onRemove} ></Main>
        </div>

        <button onClick={handlePrint} className='btn' type="submit">CheckOut</button>
      </form>


    </div>
  );
}

export default PaymentMain;
