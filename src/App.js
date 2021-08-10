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

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   
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
    <AllProducts ></AllProducts>
    <Footer></Footer>
    </Route>
    <Route path="/product/:productKey">
    <Header></Header>
    <ProductDetail  ></ProductDetail>
    <Footer></Footer> 
    </Route>
     <Route path="/cart">
     <Header></Header>
      <Cart  ></Cart>
      <Footer></Footer>
    </Route>  
    <Route path="/footer">
    <Header></Header>
      <Footer></Footer>
    </Route>
    <PrivateRoute path="/payment">
    <Header></Header>
     <ProcessPayment></ProcessPayment>
    </PrivateRoute>
    <Route path="/login">
    <Header></Header>
      <Login></Login>
    </Route>
    
    </Switch>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;
