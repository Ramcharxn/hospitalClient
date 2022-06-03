import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function MainStore() {

    const [product, setProduct] = useState([])
    const [error, setError] = useState('')

    console.log(error)

    useEffect(() => {
        axios.get('http://localhost:5000/store')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err.message))
      },[])

      const handleSubmit = (e) => {
          e.preventDefault()

          if(error == ''){
            axios.post('http://localhost:5000/medSent',{product})
            .then(() => window.location.reload())
            .catch(err => console.log(err.message))
          } else {
              setError(error)
          }
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {product.length == 0 ? <p>list is empty</p> : product.map(p => {
                
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
                            <h6><input type="checkbox" onClick={e => (p.sent=e.target.checked , console.log(p.sent, p))} /> Sent?</h6>
                            <br />
                        </div>
                    )
            })}
            <p>{error}</p>
            <button type='submit'>Confirm</button>
        </form>
    </div>
  )
}
