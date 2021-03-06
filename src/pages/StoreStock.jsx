// import Header from './components/Header';
import StockMain from './components/StockMain';
import Basket from './components/Basket';
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../App.css'

function StoreStock({ UID, onSub, error }) {


  const [requestQuantity, setRequestQuantity] = useState(0)

  const [products, setProducts] = useState([])
  const [medName, setMedName] = useState('')
  const [medID, setMedID] = useState('')
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

  const statusReset = () => {
    setStatus('')
  }

  if (status === "done") {
    setTimeout(statusReset, 5000);
  }

  // var i=-1;


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getMed', { medID })
      .then(res => (
        res.data === 'No such medicine' ? error(res.data) : setProducts(arr => [...arr, res.data])
      ))
    setMedName('')
  }

  console.log('PRODUCTS', products)
  console.log("ALL MEDICINE: ", allMed)
  console.log("onRequest", requestQuantity)

  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x._id !== product._id));
    setProducts(products.filter((x) => x._id !== product._id))
  };

  console.log('cartItems', cartItems)


  const medRequest = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/medRequest', { products })
      .then(res => (setStatus(res.data), setProducts([])))
      .catch(err => console.log(err.message))
  }

  const onRequest = (e) => {
    console.log("lollll", e.target.value);
    setRequestQuantity(e.target.value)
  };
  console.log('stoer stock',products)
  console.log('cartItems', cartItems)


  return (
    <div >

      <div className="StoreStock">
        <h1 className='heading'>Store Stock</h1>

        <div className="Block">
          <div className='Block1'>
            <form>
              <div>
                <div className='Box'>
                  <label>Medicine Name: </label>
                  <input
                    className='InputBox'
                    placeholder='Name'
                    type="text" value={medName}
                    onChange={e => setMedName(e.target.value)}
                    onClick={() => setDisplay(true)}
                    onSelect={() => setDisplay(true)}
                  />
                </div>

                <pre className='Box'>
                  <label>Quantity Filter    : </label>
                  <input className='InputBox' type="number" placeholder='amount' min="0" onChange={e => setQuantityFilter(e.target.value)} />
                </pre>

                {console.log('erorrrrrrrrrrrrrrrrr',quantityFilter)}


                {
                  display &&
                  allMed.map((m) => {
                    return <div className='displayAllMeds' key={m._id}>
                      {
                        m.medName.includes(medName)  ?
                          (m.quantity < quantityFilter || quantityFilter == '' || quantityFilter == 0)
                          //  && (i++ && i < 7)
                            ?
                             
                            <p className='MedList'
                              onClick={() => (setMedName(m.medName), setMedID(m._id), setDisplay(false))}>
                              {m.medName} batch({m.batch})
                            </p> :
                            null :
                          null
                      }
                    </div>
                  })
                }


                {/* <div className='displayAllMeds'>
                  {
                    medName == '' && display && quantityFilter != 0 &&
                    <div>
                      {
                        allMed.map((m, i) => {
                          if (m.quantity < quantityFilter && i < 5) {

                            return <div className='MedList'
                              onClick={() => (setMedName(m.medName), setDisplay(!display))}
                              key={i}
                            >
                              <span className='eachMeds'>{m.medName}</span>
                            </div>
                          }
                        }
                        )

                      }
                    </div>

                  }


                  {
                    medName == '' && display && quantityFilter == 0 &&
                    <div>
                      {
                        allMed.map((m, i) => {
                          if (m.medName.includes(medName) && i < 5) {

                            return <div className='MedList'
                              onClick={() => (setMedName(m.medName), setDisplay(!display))}
                              key={i}
                            >
                              <span className='eachMeds'>{m.medName}</span>
                            </div>
                          }
                        }
                        )

                      }
                    </div>

                  }

                  {
                    allMed.map(m => console.log(m.medName))
                  }

                  {
                    medName !== '' && display && quantityFilter == 0 &&
                    <div>
                      {allMed.map((m, i) => {
                        if (m.medName.includes(medName) && i < 5) {
                          return <div className='MedList'
                            onClick={() => (setMedName(m.medName), setDisplay(!display))}
                            key={i}
                          >
                            <span className='eachMeds'>{m.medName}</span>
                          </div>
                        }
                      }
                      )}
                    </div>
                  }
                </div> */}




              </div>
              <button className='btnn' type="submit" onClick={handleSubmit}>search</button>
            </form>
          </div>

          {/* <input type="date" placeholder='expDate' value={expDateFilter} onChange={e => setExpDateFilter(e.target.value)} />
 
        <button className='btn' type="submit" onClick={handleFilter}>Apply Filter</button> */}

          <div className="Block2">
            <form onSubmit={medRequest}>
              <div className="row">
                <StockMain products={products} onRemove={onRemove} onRequest={onRequest} ></StockMain>
              </div>
              <button className='btnn btn2' type="submit">Request</button>
            </form>
          </div>
        </div>


      </div>

      <div className="statusStore">{status}</div>

    </div>
  );
}

export default StoreStock;