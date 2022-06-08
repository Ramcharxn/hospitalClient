import React, { useState } from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, discount } = props;
  cartItems.reduce((a,c) => console.log('quantity in basket',c.discount),0)
  const totalPrice = cartItems[0] ? cartItems.reduce((a, c) => a + (c.qty * c.price) - (c.qty * c.price * c.discount/100), 0) : 0
  // const taxPrice = itemsPrice * 0.14;
//   const shippingPrice = itemsPrice > 2000 ? 0 : 20;

console.log((totalPrice))


  return (
    <aside className="block col-1">
      {/* <h2>Cart Items</h2> */}
      <div>
        {/* {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item._id} className="row">
            <div className="col-2">{item.medName}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                delete
              </button>{' '}
                <input type="number" onChange={e => onAdd(item, e.target.value)} />
            
              
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)}rs = {item.qty * item.price.toFixed(2)}rs
            </div>

            <div>
            <p>discount percent : {discount}%</p>
            <p>price after discount : {(item.qty * item.price.toFixed(2)) - [(item.qty * item.price.toFixed(2))*discount/100]}rs</p>
            </div> 
            

          </div>
        ))} */}

        {cartItems.length !== 0 && (
          <>
            {/* <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{(itemsPrice - (itemsPrice*discount/100)).toFixed(2)}rs</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)}rs</div>
            </div> */}
            {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div> */}

            <div className="BasketTP">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                {/* <strong>{typeof(totalPrice )}</strong> */}
                <strong>{(isNaN(totalPrice)) ? 0 : totalPrice.toFixed(2)}rs</strong>
              </div>
            </div>
            {/* <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div> */}
          </>
        )}
      </div>
    </aside>
  );
}
