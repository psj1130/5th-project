import React from 'react';
import './footer.css';

import Footerlogo from './footer/footerlogo';
import Map from './footer/map';
import Introduce from './footer/introduce';

function Footer() {
  
  return(
    <div id='footer-body'>
      <div id="footer-container">
        <div className="footer-box">
          <Footerlogo/>
        </div>
        <div className="footer-box">
          <Map/>
        </div>
        <div className="footer-box">
          <Introduce/>
        </div>
      </div>
    </div>
  );
}

export default Footer;