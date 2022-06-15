import React, { useState } from 'react';




function calculateTotalPrice(list) {
  let totalPrice = 0;
  list.map((item) => (
    totalPrice += item.amount * item.price
  ));
  return totalPrice;
}

function Checkout({ cart }) {



  const totalPrice = calculateTotalPrice(cart);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
              <td>{item.amount * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <p>Total Price of your Cart: {totalPrice} </p>
    </div>
  )
}

export default Checkout;
