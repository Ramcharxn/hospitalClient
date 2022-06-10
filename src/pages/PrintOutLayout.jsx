// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function PrintOutLayout({persons, detail}) {

//   const [patient, setPatient] = useState([]);

//   console.log(detail)

//   const total = detail.cartItems.reduce((a, c) => a + c.price * c.qty, 0);

//     // console.log('detail',persons)

//     console.log('detail.UID',detail.UID)

//     useEffect(() => {
//         axios.post(`http://localhost:5000/getPatientData`, {UID : detail.UID})
//           .then(res => setPatient(res.data))
//           .catch(err => console.log(err.message))
//       },[])

//     console.log('patient',patient)

//   return (
//     <div className='print-source'>

// <div className="container page-size">
//         <div className="row">
//             <div className="col-12 line"></div>
//         </div>
//         <div className="row ">
//             <div className="col-4">
//                 <img src={"./images/sims-background.png"}/>
//                 <p>Metro No.1 Jawaharlal Nehru Road, Landmark:, next to Vadapalani, Chennai, Tamil Nadu 600026</p>
//             </div>
//             <div className="col-8 d-flex justify-content-center align-items-center ">
//                 <h1 className='display-1'>Medical Bill</h1>
//             </div>
//         </div>
//         <div className="card">
//             <div className="card-body">
//                 <div className="row">
//                     <div className="col-6">
//                         <p>Patient ID: {detail.UID}</p>
//                         <p>Patient Name: {patient[0].name}</p>
//                         <p>Sex: {patient[0].sex}</p>
//                         <p>Address: {patient[0].address}</p>
//                         <p>City: {patient[0].city}</p>
//                         <br />
//                         <p>Date: {detail.Date.split('T')[0].split("-").reverse().join("-")}</p>
//                         <p>Bill No.: {detail._id}</p>
//                     </div>
//                     <div className="col-6">
//                         <p>State / Province:  {patient[0].state}</p>
//                         <p>Phone No.:  {patient[0].phoneNum}</p>
//                         <p>Email:  {patient[0].email}</p>
//                     </div>
//                 </div>
//             </div>
        
//     </div>

//         <table className="table">
//               <tr>
//                 <th >Medicine Name</th>
//                 <th >Quantity</th>
//                 <th >Price</th>
//               </tr>
//               {
//                                 detail.cartItems.map(item => {
//                                   console.log(item)
//                                         return <tr key={item._id}>
//                                             <td >{item.medName}</td>
//                                             <td >{item.qty}</td>
//                                             <td >{item.price}</td>
//                                         </tr>
//                                     })
//                                 }
//           </table>

          
//            <p>Total: {total}</p>    
           

//         <div className="row">
//             <div className="col-12 line"></div>
//         </div>
//     </div>
//       </div>
//   )
// }

import React , {useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function PrintOutLayout({patient, detail}) {
    //   const [patient, setPatient] = useState([]);

      const total = detail.cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    //   window.onload = function() {
    //     axios.post(`http://localhost:5000/getPatientData`, {UID : detail.UID})
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err.message))
    // }

//   useEffect(() => {
//         axios.post(`http://localhost:5000/getPatientData`, {UID : detail.UID})
//         .then(res => setPatient(res.data))
//         .catch(err => console.log(err.message))
//     },[detail])

    console.log(patient)

    return (
            <div className='print-source'>
        
        <div className="container page-size">
                <div className="row">
                    <div className="col-12 line"></div>
                </div>
                <div className="row ">
                    <div className="col-4">
                        <img src={"./images/sims-background.png"}/>
                        <p>Metro No.1 Jawaharlal Nehru Road, Landmark:, next to Vadapalani, Chennai, Tamil Nadu 600026</p>
                    </div>
                    <div className="col-8 d-flex justify-content-center align-items-center ">
                        <h1 className='display-1'>Medical Bill</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <p>Patient ID: {detail.UID}</p>
                                <p>Patient Name: {patient.name}</p>
                                <p>Sex: {patient.sex}</p>
                                <p>Address: {patient.address}</p>
                                <p>City: {patient.city}</p>
                                <br />
                                <p>Date: {detail.Date.split('T')[0].split("-").reverse().join("-")}</p>
                                <p>Bill No.: {detail._id}</p>
                            </div>
                            <div className="col-6">
                                <p>State / Province:  {patient.state}</p>
                                <p>Phone No.:  {patient.phoneNum}</p>
                                <p>Email:  {patient.email}</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        
                <table className="table">
                      <tr>
                        <th >Medicine Name</th>
                        <th >Quantity</th>
                        <th >Price</th>
                      </tr>
                      {
                                        detail.cartItems.map(item => {
                                          console.log(item)
                                                return <tr key={item._id}>
                                                    <td >{item.medName}</td>
                                                    <td >{item.qty}</td>
                                                    <td >{item.price}</td>
                                                </tr>
                                            })
                                        }
                  </table>
        
                  
                   <p>Total: {total}</p>    
                   
        
                <div className="row">
                    <div className="col-12 line"></div>
                </div>
            </div>
              </div>
          )
        }