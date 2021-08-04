
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './Cart.css';
const CartDetails = (props) => {
    console.log(props.cartItems);
    const {key,name,img,price,quantity}=props.cartItems;
    return (
        <div className="cartDetails">
        <div className="cartDetails-info "> 
        <ul className="d-flex justify-content-between align-items-center">    
        <li > <button className="cross"onClick={()=>props.removeOne(key)}><FontAwesomeIcon icon={faTimes}/></button></li>
        <li ><img src={img}/></li>
        <li >{name}</li>
        <li >${price}</li>
        <li > <div className="button-group"><button onClick={()=>props.onAdd(props.cartItems)}>+</button>{quantity}<button onClick={()=>props.onRemove(props.cartItems)}>-</button></div> </li>
        <li >{price*quantity||1}</li>
       
        </ul>
        </div>
        <div className="underline"></div>
        </div>
        
    );
};

export default CartDetails;