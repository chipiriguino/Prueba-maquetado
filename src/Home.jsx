import './Home.css';
import React from "react";

function Home() {
    return (
      <div className="home">
        <div className="txt-home">
        <div className="VelozIn3"><h1 >I need <i className="red-txt"> mega energy</i></h1></div>
        <div className="VelozIn1"><h1 >I need <i className="red-txt"> mega concentration</i></h1></div>
        <div className="VelozIn"><h1 >I need <i className="red-txt"> mega health</i></h1></div>
        </div>
        <div className="VelozIn2"> <h1 className="txt-simega3">I need mega <i className="red-txt cloud3">Si</i>mega<i className="red-txt">3</i></h1></div>
        <div className="box">
       <a href="/menu"><img className="footer-img" src=".\img_1024\footer.png" alt="footer" width="100%" /></a>
      </div>
      </div>
    );
  }
  
  export default Home;