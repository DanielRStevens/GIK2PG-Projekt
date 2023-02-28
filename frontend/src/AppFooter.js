import "./AppFooter.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import logo from "./images/dalavintage-cropped.png";
import React from "react";
function AppFooter() {
  return (
    <footer className="App-footer">
      <div className="footer-left">
        <img
          src={logo}
          alt="DalaVintage Vintage Bookstore"
          className="App-footerlogo"
        />
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-right">
        <h3>Follow us</h3>
        <a href="#fb">
          <AiFillFacebook />
        </a>
        <a href="#tw">
          <AiFillTwitterCircle />
        </a>
        <a href="#in">
          <AiFillInstagram />
        </a>
      </div>
    </footer>
  );
}

export default AppFooter;
