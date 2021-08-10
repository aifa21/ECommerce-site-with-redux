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
import fakeData from '../../fakeData';
// Redux
import { connect } from "react-redux";
import {addToDatabaseCart, getDatabaseCart} from '../../../utilities/databaseManager';
const AllProducts = ({products}) => {
    console.log(products);
    // const [allProduct,setAllProduct]=useState(fakeData);
    // const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [cartOpen,setCartOpen]=useState(false);
  
    
    
    const android=products.filter(ap=>ap.category==='android');
    const android1=android.slice(0,6);
    const camera=products.filter(cm=>cm.category==='camera');
    const camera1=camera.slice(0,6);
    const laptop=products.filter(lp=>lp.category==='laptop');
    const laptop1=laptop.slice(0,6);
    return (
    <div id="allProduct">
    <div className="container">
    <div className="name-div">
    <h3 className="title1">Android</h3> 
    <div className="row">
    {
     android1.map(ad=><Android   showAddToCart={true} android={ad} key={ad.key} ></Android>)
    }
    </div>
    </div>
    <div className="name-div">
    <h3 className="title1">Camera</h3>
    <div className="row">
    {
     camera1.map(cm=><Camera   showAddToCart={true} camera={cm} key={cm.key}></Camera>)
    }
    </div>
    </div>
    <div className="name-div">
    <h3 className="title1">Laptop</h3>
    <div className="row">
    {
     laptop1.map(lp=><Laptop  showAddToCart={true} laptop={lp} key={lp.key}></Laptop>)
    }
    </div>
    </div>
    </div>

        </div>
    );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(AllProducts);