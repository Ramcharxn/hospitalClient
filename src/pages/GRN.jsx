import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function GRN() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.post('http://localhost:5000/medReceived')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err.message))
      },[])

      console.log(product)


  return (
    <div>
        {product.map(p => (
            <div key={p._id}>
                <pre>MedName       :   {p.medName}</pre>
                <pre>Quantity sent  :   {p.qtySent}</pre>
                <pre>Received?       :   <input type="checkbox" /></pre>
                <br />
            </div>
        ))}
    </div>
  )
}
