import React from 'react'
import { useEffect } from 'react'
import jwt from 'jwt-decode'
import { useState } from 'react'

export default function Main() {

  const [user, setUser] = useState([])

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    useEffect(() => {
      const token = localStorage.getItem("token")

      // axios.post('http://localhost:5000/api/token',{token})
      // .then(res => console.log(res.body))
      // .catch(err => console.log(err.message))
      
      setUser(jwt(token))
      // console.log(user.user.role)
    },[])

  return (
    <div>
        {
          user.user && 
          <div>
            <p>user Name : {user.user.firstName} {user.user.lastName}</p>
            <p>user ID : {user.user.userId}</p>
            <p>user Role : {user.user.role}</p>
          </div>
        }
        
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
