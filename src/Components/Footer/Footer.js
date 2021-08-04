import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
return (
<section className="footer my-4">
  <div className="container ">
  <div className="row mt-5">
  <div className="col-md-3">
  <div style={{fontSize: "22px",marginTop:"30px" ,marginLeft:"16px",color:"#fff",fontWeight:"600"}}><p>E-Commerce</p></div> 
  <div>
  <ul className="social-media list-inline">
  <li className="list-inline-item"><FontAwesomeIcon className="icon"icon={faFacebookF} /></li>
  <li className="list-inline-item"><FontAwesomeIcon className=" icon" icon={faGooglePlusG} /></li>
  <li className="list-inline-item"><FontAwesomeIcon className=" icon" icon={faInstagram} /></li>
  </ul>
  </div>
  </div>
  <div className="col-md-3">
  <ul>
  <li><h6 style={{fontWeight:"600", marginTop:"32px",color: "#fff"}}>Services</h6></li>
  <li>Our Secret Island Boat Tour Is Just for You</li>
  <li>Chill and Escape in Our Natural Shelters</li>
  <li>September in Luviana Hotel</li>
  <li>Live Music Concerts at Luviana</li>
  </ul>
  </div>
  <div className="col-md-3">
  <ul>
  <li><h6 style={{fontWeight:"600", marginTop:"32px",color: "#fff"}}>Help</h6></li> 
  <li>Help Centers</li>
  <li>Authors</li>
  </ul>
  </div>
  <div className="col-md-3">
  <ul>
  <li><h5 style={{marginTop:"32px", color: "rgb(182, 179, 3)"}}>Our Address</h5></li> 
  <li><FontAwesomeIcon className="icon mr-2"icon={faAddressBook} />Chiitagong,Bangladesh</li>
  <li><FontAwesomeIcon className="icon mr-2"icon={faPhone} />+0880189435462</li>
  </ul>
  </div></div>
  <div className="copyRight text-center mt-5 ">
  <small className="mb-5">Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
    </div>
  </div>
 </section>
  );
};

export default Footer;