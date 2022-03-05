import React, { useEffect } from 'react'

export default function Discount({medDetails, index, discount, medReq, totalAfterDiscount}) {

    // console.log('discount', discount)
    const discountAmount = (medDetails.price*medReq*discount/100)
    const afterDiscount = medDetails.price*medReq - discountAmount
    useEffect(() => {
      totalAfterDiscount(afterDiscount)
    },[discount])
  return (
    <div>
        <h4>{index+1}</h4>
        <h3>{medReq}</h3>
        <p>Medicine Name : {medDetails.medName}</p>
        <p>Expire Date : {medDetails.expDate}</p>
        <p>MRP : {medDetails.MRP}</p>
        <p>Tax : {medDetails.tax}</p>
        <p>Price of item: {medDetails.price * medReq}</p>
        <p>Price after Discount : {afterDiscount}</p>
        <p>discount percent : {discount} </p>
        <p>discount amount : {discountAmount} </p>
        {/* {console.log('medDeaytisl',medDetails)} */}
    </div>
  )
}
