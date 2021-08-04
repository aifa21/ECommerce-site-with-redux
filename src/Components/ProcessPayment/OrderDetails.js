import React from 'react';
import './Payment.css';
const OrderDetails = (props) => {
    const order=props.cartItems;
    const subtotal=order.price*order.quantity;
    return (
        <tr className=" d-flex justify-content-between">
        <td className="product-name">{order.name}</td>
        <td >{subtotal}</td>  
        </tr>
    );
};

export default OrderDetails;