import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function MainStore() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/store')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err.message))
      },[])

      console.log(product)

      const handleSubmit = (e) => {
          e.preventDefault()

          axios.post('http://localhost:5000/medSent',{product})
          .then(() => window.location.reload())
          .catch(err => console.log(err.message))
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {product.length == 0 ? <p>list is empty</p> : product.map(p => {
                if(p.sent === "false") {
                    return (
                        <div key={p.id}>
                            <pre>Medicine name       :    {p.medName}</pre>
                            <pre>Required Quantity   :    {p.requiredQty}</pre>
                            <h6><input type="checkbox" onClick={e => (p.sent=e.target.checked , console.log(p.sent, p))} /> Sent?</h6>
                            <br />
                        </div>
                    )
                }   
            })}
            <button type='submit'>Confirm</button>
        </form>
    </div>
  )
}
