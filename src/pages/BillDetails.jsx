import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useReactToPrint } from 'react-to-print'
import ReactToPrint from "react-to-print";  
import PrintOutLayout from './PrintOutLayout';


class ComponentToPrint extends React.Component {
    render() {
      return (
        <div className='print-source'>
          <PrintOutLayout patient={this.props.patient} detail={this.props.detail}/>
        </div>
      );
    }
  }


  class Example extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        persons: []
      }

    handleClick() {
        console.log('inside handleClick')
        // axios.get(`http://localhost:5000/getPatientData`)
        // .then(res => {
        //   const persons = res.data;
        //   this.setState({ persons });
        // })

        // .catch(err => console.log(err.message))
      }

    render() {
      return (
          <div>
            <ReactToPrint
              trigger={() => <a href="#" onClick={this.handleClick}>Print</a>}
              content={() => this.componentRef}
            />
            <ComponentToPrint ref={el => (this.componentRef = el)} patient={this.props.patient} detail={this.props.detail}/>
          </div>
      );
    }
  }








export default function BillDetails() {

    const [uid, setUid] = useState('32332')
    const [patient, setPatient] = useState([])
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

            axios.post('http://localhost:5000/getPatientData', {UID: uid})
            .then(res=>setPatient(res.data[0]))
            .catch(err => console.log(err.message))
        }

        if (error != "") {
            setTimeout(statusReset, 5000);
        }
    }

    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })

    console.log(details[0])
    
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
                                <br />
                                {
                                    detail.cartItems.map(item => {
                                        return <div key={item._id}>
                                            <p>Medicine Name : {item.medName}</p>
                                            <p>expire Date : {item.expDate.split("T")[0]}</p>
                                            <p>quantity : {item.qty}</p>
                                            <p>discount : {item.discount}</p>
                                            <p>MRP : {item.MRP}</p>
                                            <p>tax : {item.tax}</p>
                                            <p>price : {item.price}</p>
                                            <p>batch : {item.batch}</p>
                                            <br />
                                        </div>
                                    })
                                }
                                 

                                <Example patient={patient} detail={detail}/>

                                {console.log(detail)}

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