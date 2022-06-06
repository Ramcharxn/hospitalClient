import axios from 'axios'
import React ,{useState} from 'react'

export default function MainStoreProd(props) {
    const {p} = props

    console.log(p)

    const [expireDate, setExpireDate] = useState('')
    const [MRP, setMRP] = useState('')
    const [error, setError] = useState('')
    const [tax, setTax] = useState('')
    const [batch, setBatch] = useState('')
    // const [checked, setChecked] = useState('')

    const price = parseFloat(MRP)+parseFloat(tax) || 0

    // console.log(typeof(MRP))

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('in')

        axios.post('http://localhost:5000/medSent',{p, expireDate, MRP, tax, price, batch})
        .then(() => window.location.reload())
        .catch(err => console.log(err.message))
    }
  return (
    <div key={p._id}>
        <pre>Medicine name       :    {p.medName}</pre>
        <pre>Required Quantity   :    {p.requiredQty}</pre>
        <pre>Quantity sent           :    <input type="number" onChange={e => 
            {
                if (e.target.value > parseInt(p.requiredQty)){
                    console.log('in 1')
                    setError(`quantity sent higher that required qtuantity for ${p.medName}`)
                } else if (e.target.value < 1) {
                    console.log('in 2')
                    setError(`incorrect quantity for ${p.medName}`)
                } else {
                    console.log('in 3')
                    setError('')
                    p.qty = e.target.value
                }
            }
        } /></pre>
        <pre>Expire Date              :    <input type="date" value={expireDate} onChange={e => setExpireDate(e.target.value)} /></pre>
        <pre>MRP                          :    <input type="number" value={MRP} onChange={e => setMRP(e.target.value)} /></pre>
        <pre>TAX                           :    <input type="number" value={tax} onChange={e => setTax(e.target.value)} /></pre>
        <pre>Price                         :    <input type="number" value={price} disabled/></pre>
        <pre>Batch                        :    <input type="number" value={batch} onChange={e => setBatch(e.target.value)} /></pre>
        {/* <h6><input type="checkbox" onClick={e => setChecked(e.target.value)} /> Sent?</h6> */}
        
        {
            (error.length > 0) ? <button>Send</button> : <button onClick={handleSubmit} type="submit">Send</button>
        }

        <br />

        <p>{error}</p>

        <br />
        <br />
    </div>
  )
}
