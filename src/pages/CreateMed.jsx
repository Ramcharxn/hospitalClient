import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function CreateMed() {
  const [ medName, setMedName ] = useState('')
  const [ expDate, setExpDate ] = useState('')
  const [ quantity, setQuantity ] = useState(0)
  const [ MRP, setMRP ] = useState(0)
  const [ tax, setTax ] = useState(0)
  const [ price, setPrice ] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/medicine',{medName, expDate, quantity, MRP, tax, price})
    .then(
      setMedName(''),
      setExpDate(''),
      setQuantity(0),
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
          <input type="number" placeholder='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} />
          <input type="number" placeholder='MRP' value={MRP} onChange={e => setMRP(e.target.value)} />
          <input type="number" placeholder='tax' value={tax} onChange={e => setTax(e.target.value)} />
          <input type="number" placeholder='price' value={price} onChange={e => setPrice(e.target.value)} />
          <button type="submit">Create</button>
        </form>
    </div>
  )
}
