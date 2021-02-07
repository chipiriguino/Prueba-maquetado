import './Nav.css';
import React from "react";


function Nav() {
    return (
      <div className="home">
   <nav role="navigation">
  <ul className="ul-nav">
    <li className="li-nav"><a href="/">Inicio</a></li>
    <li className="li-nav"><a href="/menu">Servicios</a>
      <ul class="dropdown">
        <li className="li-nav"><a href="/menu">Submenu1</a></li>
        <li className="li-nav"><a href="/menu">Submenu2</a></li>
        <li className="li-nav"><a href="/menu">Submenu3</a></li>
        <li className="li-nav"><a href="/menu">Submenu4</a></li>
      </ul>
    </li>
    <li className="li-nav"><a href="/menu">Acerca de</a></li>
    <li className="li-nav"><a href="/contact">Contacto</a></li>
  </ul>
</nav>
      </div>
    );
  }
  
  export default Nav;
