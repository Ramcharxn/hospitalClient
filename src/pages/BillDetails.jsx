import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useReactToPrint } from 'react-to-print'
import PrintOutLayout from './PrintOutLayout';

export default function BillDetails() {

    const [uid, setUid] = useState('')
    const [beforeDate, setBeforeDate] = useState(Date.now())
    const [afterDate, setAfterDate] = useState(Date.now())
    const [error, setError] = useState('')
    const [details, setDetails] = useState([])
    const componentRef = useRef()

    const statusReset = () => {
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(uid, afterDate, beforeDate)
        if (afterDate < beforeDate) {
            setError('before after date mismatched')
        } else {
            axios.post('http://localhost:5000/billDetails', { uid, afterDate, beforeDate })
                .then(res => setDetails(res.data))
                .catch(err => console.log(err.message))
        }

        if (error != "") {
            setTimeout(statusReset, 5000);
        }
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Use ID : </label>
                <input type="text" value={uid} onChange={e => setUid(e.target.value)} placeholder='User ID' />
                <label>After Date : </label>
                <input type="date" value={beforeDate} onChange={e => setBeforeDate(e.target.value)} />
                <label>Before Date : </label>
                <input type="date" value={afterDate} onChange={e => setAfterDate(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            <br />
            <br />

            <div>
                {
                    details.map(detail => {
                        return (
                            <div key={detail._id}>
                                <p><b>BILL ID : {detail._id}</b></p>
                                <p>UID : {detail.UID}</p>
                                <p>SERVICE : {detail.service}</p>
                                <br />
                                {
                                    detail.cartItems.map(item => {
                                        return <div key={item._id}>
                                            <p>Medicine Name : {item.medName}</p>
                                            <p>expire Date : {item.expDate}</p>
                                            <p>quantity : {item.qty}</p>
                                            <p>MRP : {item.MRP}</p>
                                            <p>tax : {item.tax}</p>
                                            <p>price : {item.price}</p>
                                            <p>batch : {item.batch}</p>
                                            <br />
                                        </div>
                                    })
                                }
                                <div style={{display: "none"}} ref={componentRef} className="row">
                                    <PrintOutLayout />
                                </div>

                                <button onClick={handlePrint} >Print</button>

                                <br />
                                <hr />
                                <br />
                            </div>
                        )
                    })
                }
            </div>

            {error}

            <Link to='/OpPharmacyBilling'> New </Link>
        </div>
    )
}
