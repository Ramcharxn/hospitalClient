import React, { useState } from 'react'
import axios from 'axios'

export default function Role() {

    const [ userId, setUserId ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ role, setRole ] = useState('salesman')

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:5000/api/role', { userId, role })
        setStatus(res.data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder='USER Id' value={userId} onChange={e => setUserId(e.target.value)} />
            <select className='selectBox' value={role} onChange={e => setRole(e.target.value)}>
                <option value="salesman">salesman</option>
                <option value="senior">senior</option>
                <option value="admin">admin</option>
                <option value="store">store</option>
            </select>
            <button type="submit">allocate</button>
        </form>

        {status && <div>{status}</div>}

    </div>
  )
}
