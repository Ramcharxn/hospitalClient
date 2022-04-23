import React, {useEffect} from 'react'
import axios from 'axios'

export default function HigherOff() {
  
  useEffect(() => {
    axios.get('http://localhost:5000/medRequired')
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message))
  },[])

  return (
    <div>HigherOff
      
    </div>
  )
}
