import React from 'react';
import './YourCart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/Shopping/shopping-action';
const YourCartDetails = (props) => {
    console.log(props);
    const {key,price,qty,img,name}=props.cartItems;
    return (
        <div className="YourCartDetails d-flex ">
        <div className="cartImg">   
        <img src={img}/>
        </div>              
        <div className="cartInfo">
        <p>{name}</p>  
        <small>{qty} * ${price}</small>
        </div>
        <div className="cross ml-auto pr-2">
        <button onClick={()=>props.removeFromCart (key)}><FontAwesomeIcon icon={faTimes}/></button>
        </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
      removeFromCart: (key) => dispatch(removeFromCart(key)),

    };
  };
  export default connect(null, mapDispatchToProps)(YourCartDetails);