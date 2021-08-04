import React from 'react';
import AllProducts from '../AllProducts/AllProducts';

import bgImg from '../../../images/collection_01.png';
import './Home.css';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
      <div className="all">
       <div className="container home-container">
         <div className="row home-row ">
           <div className="home-col col-md-6 col-info ">
            <h1>New inspiration</h1>
            <h1> Phones made for u</h1>
            <p>Check out latest deals on cell phone</p>
            <button class="shop-btn" style={{"marginTop":"15px"}}> Shop now</button>
          </div>
          {/* <div className="offset-md-1"></div> */}
          <div className="home-col col-md-5 col-image ">
           <img src={bgImg}/>
          </div>
        </div>
        </div>
        <AllProducts></AllProducts>
        <Banner></Banner>
       <Footer></Footer>
      </div>
    );
};

export default Home;