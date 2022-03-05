import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Medicinie from './Medicine'


const MedicinePage = ({ Total, medReq }) => {
  // med details
  const [ medName, setMedName ] = useState('')
  const [ medArray, setMedArray ] = useState([])
  const [ medRequired, setMedRequired ] = useState([])
  const [ totalCost, setTotalCost ] = useState(0)

  const MedSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5000/getMed',{medName})
      .then(res => {
        setMedArray(arr => [...arr, res.data])
      })
      .catch(err => console.log(err.message))

      setMedName('')
}

// console.log('medReq',medRequired)

useEffect(() => {
  Total([totalCost, medArray])
  medReq(medRequired)
},[medRequired])

  

const remove = (e, i) => {
  e.preventDefault()
  medArray.splice(i+1,1)
  setMedArray(medArray)

  Total([totalCost, medArray])
  medReq(medRequired)
  console.log('#######',medArray)
}

// useEffect(() => {
//   console.log('[hello]')
//   setMedArray(medArray)
// },[medArray])

// console.log('$$$$$$$',medArray)

  return (
    <div>
        <h1>Medicine Page</h1>

        {/* Medicine fields */}
      <form onSubmit={MedSubmit}>
        <input type="text" value={medName} required placeholder="Medicine name" onChange={e => setMedName(e.target.value)} />
        <button type="submit">get Details</button>
      </form>
      
      {/* <MedPart medArray={medArray}/> */}

      {
      //  console.log(medArray[0][0]._id)
        medArray.map((m, i) => (
          <div key={i}>
          <Medicinie
            key={i}
            // key={m[0]._id}
            medDetails={m[0]}
            // changeTotal={total => setTotalCost(totalCost + total*m[0].price)}
            changeTotal={total => setTotalCost(totalCost + total)}
            medRequired={required => setMedRequired(arr => [...arr,required])}
          />
          <button onClick={(e, i) => remove(e, i)} >delete</button>
          </div>
          
        ))
      }

      <p>Total cost :  {totalCost}</p>
    </div>
  )
}

export default MedicinePage