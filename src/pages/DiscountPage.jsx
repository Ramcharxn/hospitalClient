import React, { useEffect, useState } from 'react'
import Discount from './Discount'

export default function DiscountPage({details, medReq}) {
    const [ service, setService ] = useState('')
    const [ dummy, setDummy ] = useState(0)
    const [ relation, setRelation ] = useState('')
    const [ finalAmount, setFinalAmount ] = useState(0)

    // console.log('Discount',details)
    console.log('%%%%%%%%%%%%$444',finalAmount, dummy)

    const handleChange = (e) => {
      setService(e.target.value)
      console.log(e.target.value)
      console.log(finalAmount)
      console.log(dummy)
      console.log((finalAmount*(e.target.value)/100))
      // setFinalAmount(finalAmount - (finalAmount*(e.target.value)/100) - dummy)
      setFinalAmount(finalAmount)
      // setFinalAmount(0)
    }

    

    // const DiscountPart = (details) => {
    //   console.log('#@#@#@',details)
    //   return (
    //     details ? 
    //         (details.map((detail , i) => (
    //           <Discount
    //             key={i}
    //             medDetails={detail[0]}
    //             medReq={medReq[i]}
    //             index={i}
    //             discount={service}
    //             totalAfterDiscount={val => setFinalAmount(finalAmount + val)}
    //             /> 
    //         ))) : null
    //   )

          
    // }

    // useEffect(() => {
    //   console.log('details',details)
    //   DiscountPart(details)
    // },[service])

  return (
    <div>
        <h1>Discount page</h1>
        <form>
        <select value={service} onChange={handleChange}>
          <option value="0">None</option>
          <option value="10">Transport</option>
          <option value="20">staff</option>
          <option value="30">HOD</option>
          <option value="40">student</option>
        </select>

        <select value={relation} onChange={e => setRelation(e.target.value)}>
          <option value="none">myself</option>
          <option value="sibling">sibling</option>
          <option value="parent">parent</option>
          <option value="others">others</option>
        </select>

        <input type="text" placeholder='person name' />
        </form>

        {
          details ? 
          (details.map((detail , i) => (
            <Discount
              key={i}
              medDetails={detail[0]}
              medReq={medReq[i]}
              index={i}
              discount={service}
              dummy={val => setDummy(val)}
              totalAfterDiscount={val => setFinalAmount(finalAmount + val)}
              /> 
          ))) : null


      // DiscountPart(details)


          
        }

        <p>{finalAmount.toFixed(2)}</p>

    </div>
  )
}
