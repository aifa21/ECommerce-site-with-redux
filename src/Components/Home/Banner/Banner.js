import React from 'react';
import women from '../../../images/women.png';
import phone from '../../../images/banner_01.png';
import './Banner.css';
const Banner = () => {
    return (     
     <div class="banner-container">
       <div class="banner">
        <div class="shoe">
        <img src={phone }alt=""/>
        </div>
    <div class="content">
        <span>upto</span>
        <h3>50% 0ff</h3>
        <p>offer ends after 5 days</p>
        <a href="#" class="btn">veiw offer</a>
    </div>
    <div class="women">
        <img src={women}alt=""/>
    </div>
    </div>
    </div>
  );
};

export default Banner;