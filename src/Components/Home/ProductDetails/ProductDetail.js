import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './ProductDetails.css';
import gif from '../../../images/Loading_icon.gif';
import fakeData from '../../fakeData';
import { Facebook } from '@material-ui/icons';
const ProductDetail = (props) => {
   // const [cart, setCart] = useContext(CartContext);
    const {productKey}=useParams();
    const [loading,setLoading]=useState(true);
   // const [product,setProduct]=useState({});
   
    const product=fakeData.find(pd=>pd.key===productKey);
     console.log(product);
     let quantity=1;
     if(product.quantity>1){
       quantity=1;
       quantity=product.quantity;
     }
     else
    {
      quantity=1;
    } 
    function myFunction() {
      alert("I am an alert box!");
    }
    return (
    <section className="section product-detail">
   
    {/* {loading?<div className="spinnerImg">
        <img src={gif} className="spinnerImg" />
        </div>
        : */}
      <div className="headBorder">
        <div className="headBorderInfo">
        <Link className="Link"to="/home">Home</Link>
        <span className="m-2 ">/</span> <Link className="Link"to="/Products"> Product </Link><span className="m-2">/</span>
        <p> {product.name}</p>
         </div>
      </div>   
    <div className="container product-detail-container">
    <div className="row">
    <div className="col-md-6 left">
    <div className="main"><img src={product.img}/></div>
    </div>
    <div className="offset-md-1"></div>
    <div className="col-md-5 right">
    <h3>{product.name}</h3>
    <p className="price">${product.price}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima delectus nulla voluptates nesciunt
    quidem laudantium, quisquam voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!</p>
    <div className="button-group">
    <button onClick={()=>props.onAdd(product)}>+</button>
    <span className="mx-2"style={{fontSize:"14px"}}>{quantity}</span>  
    <button onClick={()=>props.onRemove(product)}>-</button>
   
    </div>
   <div className="share">
   <p>Share This Product:</p>
    <ul>
      <li><FontAwesomeIcon icon={faFacebook}/> </li>
      <li><FontAwesomeIcon icon={faTwitter}/> </li>
      <li><FontAwesomeIcon icon={faInstagram}/> </li>
      </ul>
   </div>
        </div>
    </div>
  {/* } */}  
            </div>   
    </section>
    );
};

export default ProductDetail;