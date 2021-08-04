import React from 'react';
import './YourCart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const YourCartDetails = (props) => {
    console.log(props);
    const {key,price,quantity,img,name}=props.cart;
    return (
        <div className="YourCartDetails d-flex ">
           <div className="cartImg">   
           <img src={img}/>
           </div>              
           <div className="cartInfo">
             <p>{name}</p>  
             <small>{quantity} * ${price}</small>
            </div>
            <div className="cross ml-auto pr-2">
                <button onClick={()=>props.removeOne(key)}><FontAwesomeIcon icon={faTimes}/></button>
            </div>
               
        </div>
    );
};
export default YourCartDetails;