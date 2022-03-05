import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Medcinie = ({ medDetails, changeTotal }) => {
    const [ medReq, setMedReq ] = useState(0)
    const [ itemCost, setItemCost ] = useState(0)
    // const [ itemCostDiscount, setItemCostDiscount ] = useState(0)
    // const [ discount, setDscount ] = useState(0)
    const [ error, setError ] = useState('')
    const [ medAmount, setMedAmount] = useState(medDetails.quantity)

    // console.log(medAmount)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:5000/medReq/${medDetails._id}`,{medReq})
        .then(res => {
            if(res.data == 'medicine is lesser the req amount'){
                setError(res.data)
            } else {
                setMedAmount(res.data.quantity)
                setItemCost(itemCost + medReq*medDetails.price)
                changeTotal(medReq*medDetails.price)
                setError('')
            }
            
        })
        .catch(err => console.log(err.message))

        setMedReq(0)
    }

    return (
        <div>
            <p>Name : {medDetails.medName}</p>
            <p>expDate : {medDetails.expDate}</p>
            <p>Amount : {medAmount}</p>
            <p>MRP : {medDetails.MRP}</p>
            <p>Tax : {medDetails.tax}</p>
            <p>price : {medDetails.prce}</p>
            <form onSubmit={handleSubmit}>
            {/* <select name="cars" id="cars">
                <option value={0}>none</option>
                <option value={10}>student</option>
                <option value={25}>staff</option>
                <option value={50}>HOD</option>
            </select> */}
                <input type="number" required value={medReq} onChange={e => setMedReq(e.target.value)} />
                <button type="submit">required amount of med</button>
            </form>
            <p>{error}</p>
            <p>Cost of item: {itemCost} </p>
            {/* <button onClick={() => changeTotal(itemCost)}>get</button> */}
        </div>
    )
}

export default Medcinie