// import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print'
import axios from 'axios'
function PaymentMain({ UID, onSub, error }) {

  const [products, setProducts] = useState([])
  const [medName, setMedName] = useState('')
  const [medID, setMedID] = useState('')
  const [service, setService] = useState('None')
  const [disPercent, setDisPercent] = useState(0)
  const [cartItems, setCartItems] = useState([]);
  const [allMed, setAllMed] = useState([]);
  const [display, setDisplay] = useState(false)
  const [total, setTotal] = useState(0)

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
    axios.post('http://localhost:5000/getMed', { medID })
      // .then(res => setProducts(arr => [...arr,res.data[0]]))
      .then(res => (
        res.data === 'No such medicine' ? error(res.data) : setProducts(arr => [...arr, res.data])
      ))

    setMedName('')
  }

  var i = 0;

  console.log('product',products)
  console.log('discount', disPercent)

  console.log(allMed)

  const disVal = (val) => {
    setDisPercent(val)
  }


  const onAdd = (product, addVal, discount) => {
    // e.preventDefault()

    console.log('discount percent',discount)
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: addVal, discount: discount } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 , discount: discount}]);
    }
  };
  const onRemove = (product) => {
    // const exist = cartItems.find((x) => x._id === product._id);
    setCartItems(cartItems.filter((x) => x._id !== product._id));
    setProducts(products.filter((x) => x._id !== product._id))
  };

  cartItems.map(cartItem => console.log('cartItem',cartItem))
  products.map(product => console.log(product))

  // console.log('cartItems', cartItems[0].discount)

  // console.log('##############', products[0].discount)

  const MedDetails = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/checkout', { UID, cartItems: products, disPercent })
      .then(res => (error(res.data), onSub()))
      .catch(err => console.log(err.message))


  }

  // const findSum = (e) => {
  //   e.preventDefault()
  //   setTotal(0)
  //   products.map(product => {
  //     setTotal(total => (total + parseFloat(product.cost)))  
  //   })
  // }


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
              onClick={() => setDisplay(true)}
              onSelect={() => setDisplay(true)}
            // onClick={setDisplay(!display)}
            />

            {console.log('medNameeeeeeeee', medName)}
            {
                  display &&
                  allMed.map((m) => {
                    return <div className='displayAllMeds' key={m._id}>
                      {
                        m.medName.includes(medName) && i<5 && i++  ?
                          // (i++ && i < 7) ?
                            
                            <p className='MedList'
                              onClick={() => (setMedName(m.medName), setMedID(m._id), setDisplay(false))}>
                              {m.medName} batch({m.batch} {console.log(i)})
                            </p> :
                            // null :
                          null
                      }
                    </div>
                  })
                }

          </div>

          <button className='btn' type="submit">search</button>
        </form>

        <Basket
          cartItems={products}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>

      {/* <Header countCartItems={cartItems.length}></Header> */}

      <form onSubmit={MedDetails}>
        <label>Service : </label>
        <select className='selectBox' value={service} onChange={e => setService(e.target.value)}>
          <option value="None">None</option>
          <option value="Transport">Transport</option>
          <option value="staff">staff</option>
          <option value="HOD">HOD</option>
          <option value="student">student</option>
        </select>

        {console.log(service)}

        <div ref={componentRef} className="row">
          <Main products={products} service={service} disVal={disVal} onAdd={onAdd} onRemove={onRemove} ></Main>
        </div>

        {/* <button onClick={findSum}>Total</button>

        {total} */}

        <button onClick={handlePrint} className='btn' type="submit">CheckOut</button>
      </form>


    </div>
  );
}

export default PaymentMain;
