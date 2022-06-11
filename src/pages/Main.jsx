import React from 'react'
import { useEffect } from 'react'
import jwt from 'jwt-decode'
import axios from 'axios'

export default function Main() {

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    useEffect(() => {
      const token = localStorage.getItem("token")

      // axios.post('http://localhost:5000/api/token',{token})
      // .then(res => console.log(res.body))
      // .catch(err => console.log(err.message))
      
      const user = jwt(token)
      console.log(user.user.role)
    },[])

  return (
    <div>
        <nav>
          
            <button onClick={handleLogout}>Logout</button>
        </nav>
    </div>
  )
}
