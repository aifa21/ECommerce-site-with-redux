import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Button,Navbar,Nav,Form,FormControl,Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import "./Header.css";
import logo1 from '../../../images/logo1.jpg';
import { CartContext, UserContext } from "../../../App";
import Drawer from '@material-ui/core/Drawer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import YourCart from "../YourCart/YourCart";
import { connect } from "react-redux";
import { adjustItemQty } from "../../../redux/Shopping/shopping-action";
const Header = ({cart,adjustQty}) => {
 
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const [cartOpen,setCartOpen]=useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      console.log("item=",item);
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  
  return (
   <div>
   <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
   <YourCart cart={cart} /> </Drawer>
  <nav className="navbar navbar-expand-sm  navbar-light bg-transparent fixed-top">
  <div className="container-fluid">
  <div className="logo ml-5"><p style={{fontWeight:"600",fontSize:"20px"}}>E-Commerce</p></div>         
  <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span><FontAwesomeIcon className="icon mr-2"icon={faBars} /></span>
   </a>
  <div className="collapse navbar-collapse "  id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
    <li className="nav-item  ">  <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink></li>
    <li className="nav-item "><NavLink className="nav-link" activeClassName="active_class" exact to="/products">Products</NavLink></li>
    <li className="nav-item "><NavLink className="nav-link" activeClassName="active_class" exact to="/room">Contact</NavLink></li>  
    { loggedInUser.email?
    <>
    <li className="nav-item"><a className="nav-link mr-3 " href="/login">{loggedInUser.email}</a></li>  
    <li><Link to="/" className="nav-item">
    <button style={{background:"lightblue",fontSize:"15px",fontWeight:"500"}}onClick={() => setLoggedInUser({})}className="btn btn-rounded">
    Sign Out</button></Link></li>
    </>
    :
    <li className="nav-item"><a className="nav-link mr-5 " href="/login">Login</a></li>
    }
    <li className="mt-2"><button onClick={()=>setCartOpen(true)}> <Badge badgeContent={cartCount} color='error'><AddShoppingCartIcon/></Badge></button></li>
    </ul>
        </div>
       </div>
      </nav>
</div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {   
    adjustQty: (key, value) => dispatch(adjustItemQty(key, value)),  
  };
};

export default connect(mapStateToProps,mapDispatchToProps )(Header);