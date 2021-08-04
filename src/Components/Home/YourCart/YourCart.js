import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';
import { removeFromDatabaseCart } from '../../../utilities/databaseManager';
import './YourCart.css';
import YourCartDetails from './YourCartDetails';

const YourCart = (props) => {
    const [cart, setCart ]= useContext(CartContext);
    const cartItems=props.cart;
    let total=0;
    for(let i=0;i<cartItems.length;i++){
        const product=cartItems[i];  
        total=total+product.price*product.quantity||1;
         }
    let totalProduct=(Number(total)).toFixed(2);

    const removeOne=(productKey)=>{
      const newCart = cart.filter((pd) => pd.key !== productKey);
      setCart(newCart);
      removeFromDatabaseCart(productKey);
    }
    return (
    <div className="yourCart">
        <h2>Your Cart</h2>
    <div className="your-cartPart">      
    {
     cart.length
     ?
     <div className="yourCart2">
    {
     cart.map(ct=><YourCartDetails cart={ct} removeOne={removeOne}></YourCartDetails>)
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

export default YourCart;