import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Android/Android.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faHeart,faEye } from "@fortawesome/free-solid-svg-icons";
const Camera = (props) => {
    const { img, key,name, price, category,seller } = props.camera;
  const [cartOpen,setCartOpen]=useState(false);
    return (
      <div className="android-container">
      <div className="card">
      <div className="imgBx">
       <img src={img} />
      </div>
      <div className="contentBx">
      <h4>Price : ${price}</h4>
      <button onClick={()=>props.onAdd(props.camera)}><FontAwesomeIcon className="icon" icon={faCartPlus} /></button>
      <button ><FontAwesomeIcon className="icon" icon={faHeart} /></button>
      <Link to={"/product/"+key} style={{ textDecoration: 'none',color:'darkBlue' }} ><button><FontAwesomeIcon className="icon" icon={faEye} /></button></Link>
      
      </div>
      </div>
     </div>
    );
};

export default Camera;