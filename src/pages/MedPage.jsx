import React, { useState } from 'react'
import axios from 'axios'

export default function MedPage() {
  const [medArray, setMedArray] = useState([])
  const [medName, setMedName] = useState('')
  const [medReq, setMedReq] = useState(0)
  const [error, setError] = useState('')
  const [bool, setBool] = useState(false)
  const [medAmount, setMedAmount] = useState(0)
  const [itemCost, setItemCost] = useState('')

  const MedSubmit = (e) => {
    e.preventDefault()
    
    axios.post('http://localhost:5000/getMed',{medName})
    .then(res => {
      setMedArray(arr => [...arr, res.data])
      })
      .catch(err => console.log(err.message))

      setMedName('')
  }

  const handleSubmit = (e, m) => {
    e.preventDefault()

        axios.post(`http://localhost:5000/medReq/${m._id}`,{medReq})
        .then(res => {
            if(res.data == 'medicine is lesser the req amount'){
                setError(res.data)
            } else {
              console.log(res.data)
                setMedAmount(res.data.quantity)
                setItemCost(medReq*m.price)
                
                // changeTotal(medReq*medDetails.price)
                // medRequired(medReq)
                setError('')
            }
            
        })
        .catch(err => console.log(err.message))

        setBool(true)
  }


  return (
    <div>
        <h1>medPage</h1>
        <form onSubmit={MedSubmit}>
        <input type="text" value={medName} required placeholder="Medicine name" onChange={e => setMedName(e.target.value)} />
            <button type="submit">search</button>
        </form>

        {
          medArray.map((m, i) => {
            return (
              <div key={i}>
                <p>Name : {m[0].medName}</p>
                <p>expDate : {m[0].expDate}</p>
                <p>Amount : {medAmount === 0 ? m[0].quantity : medAmount}</p>
                <p>MRP : {m[0].MRP}</p>
                <p>Tax : {m[0].tax}</p>
                <p>price : {m[0].price}</p>
                <form onSubmit={(e) => handleSubmit(e, m[0])}>
                  <input type="number" disabled={bool} required value={medReq} onChange={e => setMedReq(e.target.value)} />
                  <button type="submit">required amount of med</button>
                </form>
              <p>{error}</p>
              </div>
            )
          })
        }
    </div>
  )
}
