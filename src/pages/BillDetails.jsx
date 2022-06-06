import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function BillDetails() {

    const [uid, setUid] = useState('')
    const [beforeDate, setBeforeDate] = useState(Date.now())
    const [afterDate, setAfterDate] = useState(Date.now())
    const [error, setError] = useState('')
    const [details, setDetails] = useState([])

    const statusReset = () => {
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(uid, afterDate, beforeDate)
        if(afterDate < beforeDate){
            setError('before after date mismatched')
        } else {
            axios.post('http://localhost:5000/billDetails',{uid,afterDate, beforeDate})
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
        }

        if(error != ""){
            setTimeout(statusReset, 5000);
          }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Use ID : </label>
            <input type="text" value={uid} onChange={e => setUid(e.target.value)} placeholder='User ID' />
            <label>After Date : </label>
            <input type="date" value={beforeDate} onChange={e => setBeforeDate(e.target.value)} />
            <label>Before Date : </label>
            <input type="date" value={afterDate} onChange={e => setAfterDate(e.target.value)} />
            <button type='submit'>Search</button>
        </form>

        {error}

        <Link to='/OpPharmacyBilling'> New </Link>
    </div>
  )
}
