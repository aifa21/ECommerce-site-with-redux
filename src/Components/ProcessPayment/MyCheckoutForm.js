import React, { useContext } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Payment.css';
import { UserContext } from '../../App';
const MyCheckoutForm  = (props) => {
  console.log(props);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const { register, handleSubmit, errors } = useForm();
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const [paymentError, setPaymentError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    
    const onSubmit = async (event) => {
      event.cartItems=props.cartItems;
       event.total=props.total; 
      console.log("event",event);
      
      // fetch('https://powerful-forest-82426.herokuapp.com/addBookings', {
      //   method: "POST",
      //   body: JSON.stringify(event),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("data=",data);
      //   });
     
      const cardElement = elements.getElement(CardElement);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error);
        setPaymentSuccess(null);
        // console.log('[error]', error);
      } else {
         setPaymentError(null);
        setPaymentSuccess(paymentMethod);
      }
  
    };
    return (
        <div className="payment-container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h5 style={{fontWeight:"600"}}>CheckOut Form</h5>
         <input
          placeholder="Name"
          type="text"
          value={loggedInUser.name}
          style={{ border: "1px solid #d9dbdb" }}
          {...register("name", { required: true })}
          />
          {errors && <span>This field is required</span>}
         
          <input
          placeholder="Email"
          type="text"
          value={loggedInUser.email}
          style={{ border: "1px solid #d9dbdb" }}
          {...register("email", { required: true })}
          />
          {errors && <span>This field is required</span>}
         
          <input
          placeholder="Phone No."
          type="number"
          style={{ border: "1px solid #d9dbdb" }}
          {...register("phone", { required: true })}
          />
          {errors && <span>This field is required</span>}
        <CardElement />
        {
          props.total>0?<button className="check-btn mt-5"type="submit" disabled={!stripe}>
          Place Order
        </button>
        :
        <div className="mt-4"style={{background:"rgb(240, 239, 238)",marginTop:"10px"}}><p className="p-2">Your cart is empty</p></div>
        }
        {paymentError && <p style={{ color: "red",fontSize:"15px" }}>Failed, {paymentError.message}</p>}
        {paymentSuccess && <p style={{ color: "green",fontSize:"15px" }}>Payment Successful & Booking Confirm</p>}
      </form>
      </div>
    );
};

export default MyCheckoutForm ;