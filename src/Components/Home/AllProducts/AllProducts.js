import React, { useContext, useEffect, useState } from 'react';
import './AllProducts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { createContext } from 'react';
import Android from '../AllProducts/Android/Android';
import Camera from '../AllProducts/Camera/Camera';
import Laptop from '../AllProducts/Laptop/Laptop';
import { CartContext } from '../../../App';
import fakeData from '../../fakeData';
import {addToDatabaseCart, getDatabaseCart} from '../../../utilities/databaseManager';
const AllProducts = (props) => {
     const [cart, setCart] = useContext(CartContext);
      //const [cart, setCart] = useState([]);
    const [allProduct,setAllProduct]=useState(fakeData);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [cartOpen,setCartOpen]=useState(false);
    console.log("cart=",cart);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingKey => {
        const product = fakeData.find( pd => pd.key === existingKey);
        product.quantity = savedCart[existingKey];
        return product;
        } )
        setCart(previousCart);
    }, [])

    const onAdd = (product) => {
        const keyAdded=product.key;
        const sameProduct=cart.find(pd=>pd.key===keyAdded);
        let count=1;
        let newCart;
        if(sameProduct){        
          count= sameProduct.quantity+1;
          sameProduct.quantity=count;
          const others=cart.filter(pd=>pd.key!==keyAdded);
          newCart=[...others,sameProduct];
        }
        else{
          product.quantity=1;
          newCart=[...cart,product];
    
        }
       setCart(newCart);
       addToDatabaseCart(product.key, count);
      };
    const android=allProduct.filter(ap=>ap.category==='android');
    const android1=android.slice(0,6);
    const camera=allProduct.filter(cm=>cm.category==='camera');
    const camera1=camera.slice(0,6);
    const laptop=allProduct.filter(lp=>lp.category==='laptop');
    const laptop1=laptop.slice(0,6);
    return (
    <div id="allProduct">
    <div className="container">
    <div className="name-div">
    <h3 className="title1">Android</h3> 
    <div className="row">
    {
     android1.map(ad=><Android  onAdd={onAdd} showAddToCart={true} android={ad} key={ad.key} ></Android>)
    }
    </div>
    </div>
    <div className="name-div">
    <h3 className="title1">Camera</h3>
    <div className="row">
    {
     camera1.map(cm=><Camera  onAdd={onAdd} showAddToCart={true} camera={cm} key={cm.key}></Camera>)
    }
    </div>
    </div>
    <div className="name-div">
    <h3 className="title1">Laptop</h3>
    <div className="row">
    {
     laptop1.map(lp=><Laptop  onAdd={onAdd} showAddToCart={true} laptop={lp} key={lp.key}></Laptop>)
    }
    </div>
    </div>
    </div>

        </div>
    );
};

export default AllProducts;