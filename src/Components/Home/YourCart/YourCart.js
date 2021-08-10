import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';
import { removeFromDatabaseCart } from '../../../utilities/databaseManager';
import './YourCart.css';
import YourCartDetails from './YourCartDetails';
import { connect } from "react-redux";
import { removeFromCart } from '../../../redux/action/cartAction';
import { loadCurrentItem } from '../../../redux/Shopping/shopping-action';
const YourCart = (props) => {
  const {cart}=props;

   let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];  
        total=total+product.price*product.qty||1;
         }
    let totalProduct=(Number(total)).toFixed(2);
    return (
    <div className="yourCart">
        <h2>Your Cart</h2>
    <div className="your-cartPart">      
    {
     cart.length
     ?
     <div className="yourCart2">
    {
     cart.map(ct=><YourCartDetails  
                    key={ct.key}  
                    cartItems={ct} 
                   >
                    </YourCartDetails>)
    }
     </div>     
    :
    <div className="yourCart2">
    <p>No Products In The Cart....</p>  
    </div>
    }
    <div className="line">_____________________________________</div>
    </div>
    <div className="total">       
    <div className="subtotal">
    <p >Subtotal :    </p>
    <span>{totalProduct}</span>
    </div>
    <Link to="/cart"><button>View Cart</button></Link>
    <br/>
    <Link to="/payment"><button>Proceed CheckOut</button></Link>
    </div>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
 
  export default connect(mapStateToProps)(YourCart);