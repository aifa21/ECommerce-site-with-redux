import createTypography from '@material-ui/core/styles/createTypography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import './Cart.css';
import CartDetails from './CartDetails';
const Cart = (props) => {
   const cartItems=props.cart;
    console.log("CART=",cartItems);
    let total=0;
    for(let i=0;i<cartItems.length;i++){
        const product=cartItems[i];  
        total=total+product.price*product.quantity||1;
         }
    let totalProduct=(Number(total)).toFixed(2);
    return (
    <div className="cart">
      <div className="headBorder">
        <div className="headBorderInfo">
        <Link className="Link"to="/home">Home</Link>
        <p><span className="mr-3">/</span> Cart</p>
         </div>
      </div>
   <div className="cart-top">
   <div className="product-list ">
        <ul className="d-flex justify-content-start ">    
        <li ></li>
        <li >Product</li>
        <li >Price</li>
        <li >Quantity</li>
        <li >Total</li>    
        </ul>
     </div>
     <div className="underline"></div>
        {
        cartItems.length ?
        cartItems.map(ct=><CartDetails 
                          key={ct.key} 
                          onAdd={props.onAdd} 
                          onRemove={props.onRemove}
                          cartItems={ct}
                          removeOne={props.removeOne}
                           > 
                          </CartDetails>)
  :
  <div className="noItem"><p style={{fontSize:"14px",margin:"20px"}}>Your cart is currently empty.</p></div>
        }
   </div>
  <div className="cart-bottom">
  {
    cartItems.length>0?
    <div className="m-4">
    <div className="cart-header"><h3>Cart Total</h3></div>
   
    <div className="sub-total d-flex justify-content-between">
      <h4 >Total:</h4>
      <p>${totalProduct}</p>
    </div>
    <div className="underline"></div>
    <div className="d-flex justify-content-end"><Link to="/payment"><button className="check-btn">Proceed Checkout</button></Link></div>
    </div>
    :
    <Link to="/products"><button className="check-btn ml-4">Go to Shop</button></Link>

  }
</div>
    </div>
    );
};

export default Cart;