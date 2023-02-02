import './AppFooter.css';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import React from 'react'
function AppFooter() {
  return (
    <footer class="App-footer">
        <div class="footer-left">
          <h3>DalaVintage</h3>
          <a href="#">About</a>
          <a href="#">Contact</a>
           </div>

           <div class="footer-right">
            <h3>Follow us</h3>
            <a href="#"><AiFillFacebook/></a>
            <a href="#"><AiFillTwitterCircle/></a>
            <a href="#"><AiFillInstagram/></a>

           </div>
    </footer>
  );
}

export default AppFooter;