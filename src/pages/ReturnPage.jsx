import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ReturnMain from './components/ReturnMain'

export default function ReturnPage() {

    const [medArray, setMedArray] = useState([])
    const [userData, setUserData] = useState([])
    const [billNo, setBillNo] = useState('')
    const [searchOn, setSearchOn] = useState(false)

    const billNoHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/return/${billNo}`,{billNo})
        .then(res => (
            setMedArray(res.data[0]), setSearchOn(true), setUserData(res.data[1])
            
            // setMedArray(arr => [res.data]), setSearchOn(true)
        ))
        .catch(err => console.log(err.message))
      }

      const handleClick = () => {
          console.log('clicked')
        axios.post('http://localhost:5000/returnMed',{medArray})
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
      }

      //setMedArray( arr => [...arr, res.data])
      console.log("Return Page",medArray.cartItems)
      console.log('userData',userData)

    return (
        <div>
            <form onSubmit={billNoHandler}>
                <input type="text" value={billNo} required placeholder='Bill No.' onChange={e => setBillNo(e.target.value)} />
                <button type="submit">Search</button>
            </form>

        {searchOn ? <ReturnMain medArray={medArray} />:console.log('waiting for input')}
             
        <button onClick={handleClick}>return</button>

        </div>
    )
}


