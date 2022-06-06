import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function CreateMed() {
  const [ medName, setMedName ] = useState('')
  const [ expDate, setExpDate ] = useState('')
  const [ quantity, setQuantity ] = useState(0)
  const [ batch, setBatch ] = useState(1)
  const [ MRP, setMRP ] = useState(0)
  const [ tax, setTax ] = useState(0)
  const [ price, setPrice ] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/medicine',{medName, expDate, quantity, MRP, tax, price: parseFloat(MRP)+parseFloat(tax)})
    .then(
      setMedName(''),
      setExpDate(''),
      setQuantity(0),
      setBatch(1),
      setMRP(0),
      setTax(0),
      setPrice(0),
    )
    .catch(err => console.log(err.message))
  }

  return (
    <div>
        <h1>Medicine page</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" required placeholder='Medcinie name' value={medName} onChange={e => setMedName(e.target.value)} />
          <input type="date" placeholder='expDate' value={expDate} onChange={e => setExpDate(e.target.value)} />
          Quantity: <input type="number" placeholder='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} />
          Batch: <input type="number" placeholder='Batch number' value={batch} onChange={e => setBatch(e.target.value)} />
          MRP: <input type="number" placeholder='MRP' value={MRP} onChange={e => setMRP(e.target.value)} />
          Tax:<input type="number" placeholder='tax' value={tax} onChange={e => setTax(e.target.value)} />
          Price:<input type="number" placeholder='price' value={parseFloat(MRP)+parseFloat(tax)} />
          <button type="submit">Create</button>
        </form>
    </div>
  )
}
