import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React,{ useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './Payment.css';
import MyCheckoutForm from './MyCheckoutForm';
import OrderDetails from './OrderDetails';

const ProcessPayment= (props) => {
  const stripePromise = loadStripe("pk_test_51HaZJzAOwZw8EHMZMFAuexZ8GMLwd1zC0VW3ASIQjK8gNDs329MpCXuKMoRH0p8eHRXjbiAmHKtucwxzxwVliDZQ00zBYC1xzG");
  const cartItems=props.cart;
  console.log("payment",cartItems);
  let total=0;
  for(let i=0;i<cartItems.length;i++){
      const product=cartItems[i];  
      total=total+product.price*product.quantity||1;
       }
  let totalProduct=(Number(total)).toFixed(2);
  // const onSubmit = async (event) => {
  //   event.startDate=props.allData.startDate;
  //   event.endDate=props.allData.endDate;
  //   event.person=props.allData.person;
  //   event.room=props.allData.room;
  //   event.price=props.allData.price;
  //   event.status="";
  //    event.color="";

    
  //   // fetch('https://powerful-forest-82426.herokuapp.com/addBookings', {
  //   //   method: "POST",
  //   //   body: JSON.stringify(event),
  //   //   headers: {
  //   //     "Content-type": "application/json; charset=UTF-8",
  //   //   },
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log("data=",data);
  //   //   });
   
  //   const cardElement = elements.getElement(CardElement);
  //   const {error, paymentMethod} = await stripe.createPaymentMethod({
  //     type: 'card',
  //     card: cardElement,
  //   });

  //   if (error) {
  //     setPaymentError(error);
  //     setPaymentSuccess(null);
  //     // console.log('[error]', error);
  //   } else {
  //      setPaymentError(null);
  //     setPaymentSuccess(paymentMethod);
  //   }

  // };

  return (
    <Elements stripe={stripePromise}>
     
     <div className="checkout">
       <h3>Checkout</h3>
     <div className="check-underline mb-5"></div>
     <div className="container">
      <div className="row">
      <div className="col-md-5">
      <div className="checkoutRight">
       <div className="order-box">
       <h4 className="order_review_heading ">Your Order</h4>
      <div className="order-review">

      <table className="checkout-table">
      <thead>
      <tr>
        <th className="pl-2">Product</th>
        <th >Subtotal</th>
      </tr>
      </thead>
      <tbody>
     {
      cartItems.map(ct=><OrderDetails key={ct.key} cartItems={ct}> </OrderDetails>)
      }   
      <tr>
        <td style={{fontWeight:"600",color:"#000",fontSize:"15px"}}>Total</td>
        <td>{totalProduct}</td>
      </tr>
    </tbody>
     </table>
    </div>
       </div>
    </div>
     </div>
     <div className="offset-md-1"></div>
    <div className="col-md-6">
    <div className="checkout-section">
    <MyCheckoutForm cartItems={cartItems} total={total}/>
    </div>
    </div>
    </div>
    </div>
     </div>
     </Elements>
   
  );
};
export default ProcessPayment;