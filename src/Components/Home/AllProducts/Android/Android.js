import React, { useState } from "react";
import "./Android.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faHeart,faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../../../redux/Shopping/shopping-action";

const Android = ({ android, addToCart, loadCurrentItem }) => {
  const { img, key,name, price, category,seller} = android;
  const [cartOpen,setCartOpen]=useState(false);
  return (
    <div className="android-container">
    <div className="card">
    <div className="imgBx">
     <img src={img} />
    </div>
    <div className="contentBx">
    <h4>Price : ${price}</h4>
    <button onClick={()=>addToCart(key)}><FontAwesomeIcon className="icon" icon={faCartPlus} /></button>
    <button ><FontAwesomeIcon className="icon" icon={faHeart} /></button>
    <Link to={"/product/"+key} style={{ textDecoration: 'none',color:'darkBlue' }} ><button><FontAwesomeIcon className="icon"icon={faEye} /></button></Link>
    
    </div>
    </div>
   </div>
  
   
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (key) => dispatch(addToCart(key)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Android);
