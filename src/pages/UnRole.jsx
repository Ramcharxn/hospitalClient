import axios from 'axios'
import React, { useState } from 'react'

export default function UnRole() {

    const [userId, setUserId] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/role/unrole',{userId})
        .then(res => setStatus(res.data))
        .catch(err => setStatus(err.message))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder='user Id' value={userId} onChange={e => setUserId(e.target.value)} />
            <button type="submit">Delete</button>
        </form>

        {status}
    </div>
  )
}
