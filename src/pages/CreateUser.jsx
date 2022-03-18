import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function CreateUser() {
  const [ UID, setUID ] = useState('')
  const [ status, setStatus ] = useState('')
  const [ name, setName ] = useState('')
  const [ phoneNum, setPhoneNum ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ sex, setSex ] = useState('male')
  const [ city, setCity ] = useState('')
  const [ state, setState ] = useState('')
  const [ country, setCountry ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/createUser',{ UID, name, email, address, phoneNum, sex, city, state, country })
    .then(
      res => setStatus(res.data),
      setUID(''),
      setStatus(''),
      setName(''),
      setPhoneNum(''),
      setEmail(''),
      setAddress(''),
      setSex(''),
      setCity(''),
      setState(''),
      setCountry(''),
    )
    .catch(err => console.log(err.message))
  }

  return (
    <div>
      <h1>create User</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" required value={UID} onChange={e => setUID(e.target.value)} placeholder="UID" />
        <input type="text"  value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input type="number"  value={phoneNum} onChange={e => setPhoneNum(e.target.value)} placeholder="Phone NUmber" />
        <input type="email"  value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
        <input type="text"  value={address} onChange={e => setAddress(e.target.value)} placeholder="address" />
        <select value={sex} onChange={e => setSex(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        <input type="text"  value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
        <input type="text"  value={state} onChange={e => setState(e.target.value)} placeholder="State" />
        <input type="text"  value={country} onChange={e => setCountry(e.target.value)} placeholder="Country" />
        <button type="submit">Create</button>
      </form>
      <p>{status}</p>
    </div>
  )
}
