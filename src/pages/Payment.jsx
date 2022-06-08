import React, { useState } from 'react'
import axios from 'axios'
// import MedicinePage from './MedicinePage'
// import DiscountPage from './DiscountPage'
// import MedPage from './MedPage'
import PaymentMain from './PaymentMain'

export default function Payment() {

  // user details
  const [UID, setUID] = useState('')
  const [UIDSent, setUIDSent] = useState('')
  const [status, setStatus] = useState('')
  const [status2, setStatus2] = useState('')
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [details, setDetails] = useState(0)
  const [medRequired, setMedRequired] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/getPatientData', { UID, phoneNum })
      .then(res =>
      (
        setUID(res.data[0].UID),
        setUIDSent(UID),
        setName(res.data[0].name),
        setPhoneNum(res.data[0].phoneNum),
        setEmail(res.data[0].email),
        setAddress(res.data[0].address),
        setSex(res.data[0].sex),
        setCity(res.data[0].city),
        setState(res.data[0].state),
        setCountry(res.data[0].country),
        setError(''),
        setStatus('display')
      )
      )
      .catch(err => (
        setError('uid is incorrect'),
        setStatus('')
      ))
  }

  // setTimeout(
  //   function () {
  //     setError('')
  // },5000)

  return (
    <div className='Payment'>
      {/* <img src="/images/sims-background.png" className='backGroundImage'/> */}
      <p className='heading'>OP Pharmacy Billing</p>
      <p>{error}</p>

      <div className='inputBoxArea'>
        <form onSubmit={handleSubmit}>
          <div className='UserInputBox'>
            <div className='inputBox'>
              <label>UID : </label>
              <input autoFocus type="text" value={UID} onChange={e => setUID(e.target.value)} placeholder="UID" />
            </div>
            <div className="inputBox">
              <label>Phone : </label>
              <input type="number" value={phoneNum} onChange={e => setPhoneNum(e.target.value)} placeholder="Phone NUmber" />
            </div>
            <button className='btnn' type="submit">Load</button>
          </div>
        </form>

        <div className='otherInput'>
          <div className="inputBox">
            <label>Name : </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          </div>
          <div className="inputBox">
            <label>Email : </label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
          </div>
          <div className="inputBox">
            <label>Address : </label>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
          </div>
          <div className="inputBox">
            <label>Gender : </label>
            <input type="text" value={sex} onChange={e => setSex(e.target.value)} placeholder="sex" />
          </div>
          <div className="inputBox">
            <label>City : </label>
            <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="city" />
          </div>
          <div className="inputBox">
            <label>State : </label>
            <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="state" />
          </div>
          <div className="inputBox">
            <label>Country : </label>
            <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder="country" />
          </div>
        </div>
      </div>

      {
        status === 'display' ?
          <PaymentMain
            UID={UIDSent}
            error={err => setError(err)}
            onSub={res => (
              setUID(''),
              // setStatus2(''),
              setName(''),
              setPhoneNum(''),
              setEmail(''),
              setAddress(''),
              setSex(''),
              setCity(''),
              setState(''),
              setCountry(''),
              setStatus(''))
            }
          />
          : null
      }

    </div>
  )
}
