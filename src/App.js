import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { createContext } from 'react';

import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import ProductDetail from './Components/Home/ProductDetails/ProductDetail';
import AllProducts from './Components/Home/AllProducts/AllProducts';
import Cart from './Components/Cart/Cart';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from './utilities/databaseManager';
import fakeData from './Components/fakeData';
import YourCart from './Components/Home/YourCart/YourCart';

import YourCartDetails from './Components/Home/YourCart/YourCartDetails';
import Footer from './Components/Footer/Footer';
import ProcessPayment from './Components/ProcessPayment/ProcessPayment';
import PrivateRoute from './Components/Login/PrivateRoute';
export const UserContext = createContext();
export const CartContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);

  console.log("appcar=",cart);
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
    console.log("added",product);
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
  const onRemove = (product) => {
    console.log("sub",product);
    const exist = cart.find((x) => x.key === product.key);
    console.log("subexit",exist);
    let newCart;
    if (exist.quantity === 1) {
     setCart(cart.filter((x) => x.key !== product.key));
     removeFromDatabaseCart(product.key);
    } else {
     let count= exist.quantity-1;      
      setCart(
        cart.map((x) =>
          x.key === product.key ? { ...exist, quantity: count } : x
        )
      );
      addToDatabaseCart(product.key, count);
    }
  };
  const removeOne=(productKey)=>{
    console.log("removeone");
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
   
  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <CartContext.Provider value={[cart, setCart]}>
    <Router>   
    <Switch>     
    <Route path="/home">
    <Header></Header>
       <Home></Home>
    </Route>
    <Route exact path="/">
    <Header></Header>
       <Home></Home>
    </Route>
    <Route path="/products">
    <Header></Header>
    <AllProducts onAdd={onAdd}></AllProducts>
    <Footer></Footer>
    </Route>
    <Route path="/product/:productKey">
    <Header></Header>
    <ProductDetail onAdd={onAdd} onRemove={onRemove} removeOne={removeOne}></ProductDetail>
    <Footer></Footer> 
    </Route>
     <Route path="/cart">
     <Header></Header>
      <Cart cart={cart} onAdd={onAdd} onRemove={onRemove} removeOne={removeOne}></Cart>
      <Footer></Footer>
    </Route>  
    <Route path="/footer">
    <Header></Header>
      <Footer></Footer>
    </Route>
    <PrivateRoute path="/payment">
    <Header></Header>
     <ProcessPayment cart={cart}></ProcessPayment>
    </PrivateRoute>
    <Route path="/login">
    <Header></Header>
      <Login></Login>
    </Route>
    
    </Switch>
    </Router>
    </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
