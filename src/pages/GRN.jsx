import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GRN() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.post('http://localhost:5000/medReceived')
            .then(res => setProduct(res.data))
            .catch(err => console.log(err.message))
    }, [])

    console.log(product)

    const handleSubmit = (e, prod) => {
        e.preventDefault()

        axios.post('http://localhost:5000/deletedMedReq',{prod})
        .then(() => window.location.reload())
        .catch(err => console.log(err.message))
        
        console.log(prod)
    }


    return (
        <div>

            {product.length === 0 ? <p>list is empty</p> : product.map(p => (
                    <div key={p._id}>
                        {console.log(p)}
                        <pre>MedName       :   {p.medName}</pre>
                        <pre>expDate       :   {p.expDate.split('T')[0].split("-").reverse().join("-")}</pre>
                        <pre>batch       :   {p.batch}</pre>
                        <pre>price       :   {p.price}</pre>
                        <pre>Quantity sent  :   {p.qtySent}</pre>
                        {/* <pre>Received?       :   <input type="checkbox" /></pre> */}
                        <button onClick={(e) => handleSubmit(e, p)} type="submit">Confirm</button>
                        <br />
                        <br />
                    </div>
            ))}

                
            
        </div>
    )
}
