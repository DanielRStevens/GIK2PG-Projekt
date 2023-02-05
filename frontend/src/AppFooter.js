import './AppFooter.css';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import React from 'react';
function AppFooter() {
  return (
    <footer className="App-footer">
        <div className="footer-left">
          <h3>DalaVintage</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
           </div>

           <div className="footer-right">
            <h3>Follow us</h3>
            <a href="#fb"><AiFillFacebook/></a>
            <a href="#tw"><AiFillTwitterCircle/></a>
            <a href="#in"><AiFillInstagram/></a>

           </div>
    </footer>
  );
}

export default AppFooter;