import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MainStoreProd from './components/MainStoreProd'

export default function MainStore() {

    const [product, setProduct] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/store')
        .then(res => setProduct(res.data))
        .catch(err => console.log(err.message))
      },[])

    //   const handleSubmit = (e) => {
    //       e.preventDefault()

    //       if(error == ''){
    //         axios.post('http://localhost:5000/medSent',{product})
    //         .then(() => window.location.reload())
    //         .catch(err => console.log(err.message))
    //       } else {
    //           setError(error)
    //       }
    //   }

  return (
    <div>
            {product.length == 0 ? <p>list is empty</p> : product.map(p => (
                <MainStoreProd key={p._id} p={p} />
            ))}
            <p>{error}</p>
    </div>
  )
}
