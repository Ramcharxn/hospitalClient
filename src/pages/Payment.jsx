import React, {useState} from 'react'
import axios from 'axios'
import MedicinePage from './MedicinePage'
import DiscountPage from './DiscountPage'

export default function Payment() {

  // user details
  const [ UID, setUID ] = useState('')
  const [ status, setStatus ] = useState('')
  const [ name, setName ] = useState('')
  const [ phoneNum, setPhoneNum ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ sex, setSex ] = useState('')
  const [ city, setCity ] = useState('')
  const [ state, setState ] = useState('')
  const [ country, setCountry ] = useState('')
  const [ details, setDetails ] = useState(0)
  const [ medRequired, setMedRequired] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getPatientData',{UID, phoneNum})
    .then(res => 
      (
        setUID(res.data[0].UID),
        setName(res.data[0].name),
        setPhoneNum(res.data[0].phoneNum),
        setEmail(res.data[0].email),
        setAddress(res.data[0].address),
        setSex(res.data[0].sex),
        setCity(res.data[0].city),
        setState(res.data[0].state),
        setCountry(res.data[0].country)
      )
    )
    .catch(err => setStatus(err.message))
  }

  return (
    <div>
      <h1>Payment</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={UID} onChange={e => setUID(e.target.value)} placeholder="UID" />
        <input type="number"  value={phoneNum} onChange={e => setPhoneNum(e.target.value)} placeholder="Phone NUmber" />
        <button type="submit">get data</button>
      </form>

      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
      <input type="text" value={sex} onChange={e => setSex(e.target.value)} placeholder="sex" />
      <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="city" />
      <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="state" />
      <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="country" />
      
      <p>{status}</p>


      <MedicinePage
        Total={total => setDetails(total)}
        medReq={med => setMedRequired(med)}
      />

{/* <MedicinePage
        Total={total => setDetails(total)}
      /> */}

      { console.log('****',details) }
      { console.log('medicinie req',medRequired) }

      TotalCost : {details[0]}

      <DiscountPage details={details[1]} medReq={medRequired} />

    </div>
  )
}
