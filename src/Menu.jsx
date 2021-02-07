import './Menu.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel2 from "./Carousel-1";
import App from "./Swiper"
import Nav from "./Nav"

function Menu() {
    return (
      <div className="home-menu">
        <div className="align-menu">
  <Nav/>
  </div>
<App/>

      </div>
    );
  }
  
  export default Menu;
