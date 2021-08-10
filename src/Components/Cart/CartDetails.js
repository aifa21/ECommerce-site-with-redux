
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Cart.css';
const CartDetails = (props) => {
    console.log(props);
    const {key,name,img,price,qty}=props.cartItems;
    return (
        <div className="cartDetails">
        <div className="cartDetails-info "> 
        <ul className="d-flex justify-content-between align-items-center">    
        <li > <button className="cross"onClick={()=>props.removeFromCart (key)}><FontAwesomeIcon icon={faTimes}/></button></li>
        <li ><img src={img}/></li>
        <li >{name}</li>
        <li >${price}</li>
        <li > <div className="button-group"><button onClick={()=>props.addToCart(key)}>+</button>{qty}<button onClick={()=>props.removeOne(key)}>-</button></div> </li>
        <li >{price*qty||1}</li>
       
        </ul>
        </div>
        <div className="underline"></div>
        </div>
        
    );
};

export default CartDetails;